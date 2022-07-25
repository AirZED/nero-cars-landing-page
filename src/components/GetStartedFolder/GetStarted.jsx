import React from "react";
import { signUpHandler } from "../Utils";
import { Link } from "react-router-dom";

const getStartedHandler = () => {
  signUpHandler();
};

function GetStarted(props) {
  return (
    <div className="start">
      <div>
        <h1>DEFINITION OF SPEED AND CLASS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis!
        </p>
      </div>
      <Link to="/signup" className="link">
        <button
          type="button"
          className="btn get-started"
          onClick={getStartedHandler}
        >
          GET STARTED
        </button>
      </Link>
      
    </div>
  );
}

export default GetStarted;
