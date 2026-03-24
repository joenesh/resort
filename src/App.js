import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

import { Routes, Route } from "react-router-dom";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <>
      <Navbar />
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/rooms/" Component={Rooms} />
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/rooms/:slug" Component={SingleRoom} />
          <Route path="*" Component={Error} />
        </Routes>
      )}
    </>
  );
}

export default App;
