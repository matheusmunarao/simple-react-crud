import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";
import { createUser } from "../../graphql/mutations";

const initialFormState = { name: "", lastName: "", age: 0, favoriteMovie: "" };

const Create = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  // const [checkbox, setCheckbox] = useState(false);
  // const [radioButton, setRadionButton] = useState(options);

  // const changeRadio = (id, checked) => {};

  async function newUser() {
    try {
      await API.graphql(graphqlOperation(createUser, { input: formData }));
      setUserInfos([...userInfos, formData]);
      setFormData(initialFormState);
      console.log("EXECUTOU");
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
          <button onClick={() => newUser()}>Criar usuário</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
