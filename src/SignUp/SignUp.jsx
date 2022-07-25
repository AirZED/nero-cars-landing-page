import React from "react";
import "./SignUp.scss";
import { useState } from "react";

class UserProfile {
  constructor(name, dateofBirth, phoneNo, email) {
    this.name = name;
    this.phoneNo = phoneNo;
    this.email = email;
    this.dateofBirth = dateofBirth;
  }
}

const users = [];

function Login(props) {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userDateOfBirth, setDateOfBirth] = useState("");
  const [userPhoneNo, setPhoneNo] = useState("");
  const [SignUpState, setSignUpState] = useState(true);

  const activateSignUp = () => {
    setSignUpState(true);
  };
  const activateLogin = () => {
    setSignUpState(false);
  };

  //Pick states for inputs
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };
  const updatePhoneNo = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleLogin = (e) => {
    // const user = new UserProfile();
    e.preventDefault();
    console.log("Submiting");

    const user = new UserProfile(
      userName,
      SignUpState && userDateOfBirth,
      SignUpState && userPhoneNo,
      userEmail
    );
    users.push(user);
    console.log(users);

    setName("");
    setEmail("");
    setDateOfBirth("");
    setPhoneNo("");
  };

  return (
    <div className="signup-bg">
      <div className="bg"></div>
      <div className="form-div">
        <div className="crtl-btn">
          <button className="btn btn-signIn" onClick={activateSignUp}>
            Sign Up
          </button>
          <button className="btn btn-signUp" onClick={activateLogin}>
            Sign In
          </button>
        </div>
        <form className={SignUpState ? "signup form" : "signin form"}>
          <div>
            <div className="circles">👻</div>
            <div className="circles">👻</div>
          </div>
          <h2>{SignUpState ? "Sign Up" : "Sign In"}</h2>
          <div className="form-example">
            <label>Enter your name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={updateName}
              value={userName}
              required
            />
          </div>
          <div className="form-example">
            <label>Enter your email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userEmail}
              onChange={updateEmail}
              required
            />
          </div>

          {/*Connditional Rendering Below */}
          {SignUpState && (
            <div className="form-example">
              <label>Enter your phone No:</label>
              <input
                type="number"
                name="phone-no"
                id="phone-no"
                value={userPhoneNo}
                onChange={updatePhoneNo}
                required
              />
            </div>
          )}
          {SignUpState && (
            <div className="form-example">
              <label>Enter your Date of Birth: </label>
              <input
                type="date"
                name="dob"
                id="dob"
                onChange={updateDateOfBirth}
                value={userDateOfBirth}
                required
              />
            </div>
          )}
          <button className="btn btn-signup" onClick={handleLogin}>
            {SignUpState ? "Login" : "logout"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
