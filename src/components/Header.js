import classes from "./Header.module.css";
import Signup from "./Signup";
import Login from "./Login";
import Button from "./UI/Button";
import React, { useState } from "react";

const Header = (props) => {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  let content = (
    <div className={classes.container}>
      <div className={classes.logo}>
        <p>ToDo</p>
      </div>
      <div className={classes.buttons}>
        <Button onClick={loginHandler}>Login</Button>
        <Button onClick={signUpHandler}>Signup</Button>
      </div>
      <hr></hr>
    </div>
  );
  function loginHandler() {
    console.log("login");
    setLogin(true);
  }
  function signUpHandler() {
    console.log("clicked");
    setSignUp(true);
  }
  if (signUp) {
    content = <Signup />;
  }
  if (login) {
    content = <Login />;
  }
  return <>{content}</>;
};

export default Header;
