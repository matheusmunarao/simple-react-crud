import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Nav/Nav.js";
import Home from "./pages/home/Home.js";
import Read from "./pages/read/Read.js";
import Create from "./pages/create/Create.js";
import Update from "./pages/update/Update.js";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'
Amplify.configure(awsconfig);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
      <div className="btn-signout">
        <AmplifySignOut />
      </div>
    </>
  );
};

export default withAuthenticator(App);
