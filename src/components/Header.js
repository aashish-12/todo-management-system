import classes from "./Header.module.css";

import Button from "./UI/Button";
import React from "react";

const Header = (props) => {
  // console.log(props.login);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <p>ToDo</p>
        </div>
        {!props.login && (
          <div className={classes.buttons}>
            <Button onClick={props.loginHandler}>Login</Button>
            <Button onClick={props.signupHandler}>Signup</Button>
          </div>
        )}
        {props.login && (
          <div className={classes.buttons}>
            <Button>Logout</Button>
          </div>
        )}
        <hr></hr>
      </div>
    </>
  );
};

export default Header;
