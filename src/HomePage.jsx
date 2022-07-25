import React from "react";
import NavBar from "./components/NavBar";
import GetStarted from './components/GetStartedFolder/GetStarted';

function HomePage(props) {
    return (
      <div>
        <NavBar />
        <GetStarted />
      </div>
    );
}

export default HomePage;