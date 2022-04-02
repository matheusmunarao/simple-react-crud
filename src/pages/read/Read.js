import React from "react";
import "./style.css";

function Read() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matheus</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Read;
