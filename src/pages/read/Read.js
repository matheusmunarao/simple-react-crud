import React from "react";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import "./style.css";

const Read = () => {
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
              <th>you like me?</th>
              <th>Are you happy?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matheus</td>
              <td>Munarão</td>
              <td>21</td>
              <td>Interstelar</td>
              <td>check</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Matheus</td>
              <td>Munarão</td>
              <td>21</td>
              <td>Interstelar</td>
              <td>check</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Read;
