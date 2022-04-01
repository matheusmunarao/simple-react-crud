import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "../src/components/Nav/Nav.js";
import Home from "../src/pages/home/Home.js";
import Read from "../src/pages/read/Read.js";
import Create from "../src/pages/create/Create.js";
import Update from "../src/pages/update/Update.js";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
