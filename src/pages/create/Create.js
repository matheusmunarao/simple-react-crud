import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const [radioButton, setRadionButton] = useState(options);

  // const changeRadio = (id, checked) => {};

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(favoriteMovie);
    console.log(checkbox);
    // console.log(radioButton);
  };

  console.log(postData);

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
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="movie">Favorite Movie</label>
            <input
              type="text"
              name="movie"
              onChange={(e) => setFavoriteMovie(e.target.value)}
            />
          </div>
          <div className="checkbox-field">
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
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
