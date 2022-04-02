import React from "react";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";

const Create = () => {
  return (
    <>
      <Title />
      <div className="container">
        <form action="">
          <div>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="text" name="age" />
          </div>
          <div>
            <label htmlFor="movie">Favorite Movie</label>
            <input type="text" name="movie" />
          </div>
          <div className="checkbox-field">
            <label htmlFor="happy">check if you like me</label>
            <input type="checkbox" name="happy" />
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
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Create;
