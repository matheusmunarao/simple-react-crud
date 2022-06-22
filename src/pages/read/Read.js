import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";

const Read = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <>
      <Title />
      <div className="container">
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
      <Footer />
    </>
  );
};

export default Read;
