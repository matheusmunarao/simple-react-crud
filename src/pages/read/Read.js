import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
// import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";
import { createUser } from "../../graphql/mutations";

const initialFormState = { name: "", lastName: "", age: 0, favoriteMovie: "" };

const Read = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const userList = userData.data.listUsers.items;
      setUsers(userList);
    } catch (error) {
      console.log("ERROR IN FETCHING", error);
    }
  };

  async function newUser() {
    try {
      await API.graphql(graphqlOperation(createUser, { input: formData }));
      setUsers([...users, formData]);
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Title />
      <div className="container">
        <form action="">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              value={formData.lastName}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              value={formData.age}
            />
          </div>
          <div>
            <label htmlFor="movie">Favorite Movie</label>
            <input
              type="text"
              name="movie"
              onChange={(e) =>
                setFormData({ ...formData, favoriteMovie: e.target.value })
              }
              value={formData.favoriteMovie}
            />
          </div>
          {/* <div className="checkbox-field">
            <label htmlFor="happy">check if you like me</label>
            <input
              type="checkbox"
              name="happy"
              onChange={(e) => setCheckbox(e.target.value)}
            />
          </div>
          <div>
            <p>Are you happy now?</p>
            <div className="radio-field">
              <div className="radio_input_label-field">
                <input type="radio" name="happy" />
                <label htmlFor="">Yes 😁</label>
              </div>
              <div className="radio_input_label-field">
                <input type="radio" name="happy" />
                <label htmlFor="">Maybe 🤔</label>
              </div>
              <div className="radio_input_label-field">
                <input type="radio" name="happy" />
                <label htmlFor="">No 😢</label>
              </div>
            </div>
            <button onClick={postData} type="submit">
              Submit
            </button>
          </div> */}
          <div className="container-button-user">
            <button onClick={() => newUser()}>Criar usuário</button>
          </div>
        </form>
        <table>
          <thead>
            <tr className="thead-tr">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Favorite Movie</th>
              {/* <th>you like me?</th>
              <th>Are you happy?</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.favoriteMovie}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Read;
