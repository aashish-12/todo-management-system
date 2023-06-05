import React, { useState } from "react";
import classes from "./Signup.module.css";
import Button from "./UI/Button";

const Signup = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName !== "";
  const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  return (
    <div className={classes.container}>
      <div>
        <form onSubmit={formSubmissionHandler}>
          <h1>SignUp</h1>
          <div>
            <label id="name">Name</label>
            <input
              htmlFor="name"
              type="text"
              placeholder="Name"
              pattern="[a-zA-Z]+"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            ></input>
            {nameIsInvalid && <p className={classes['error-text']}>Name must not be empty.</p>}
          </div>

          <div>
            <label id="email">Email</label>
            <input
              type="email"
              htmlFor="email"
              placeholder="example@gmail.com"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            ></input>
            {enteredEmailIsInvalid && (
              <p className={classes['error-text']}>Please enter a valid email.</p>
            )}
          </div>

          <label id="password">Password</label>
          <input
            type="password"
            htmlFor="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          ></input>
          <label id="password">Correct Password</label>
          <input type="password" htmlFor="password"></input>
          <div className={classes.signup}>
            <Button disabled={!formIsValid}>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
