import React, { useState } from "react";
import classes from "./Signup.module.css";
import Button from "./UI/Button";
import Login from "./Login";

const Signup = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName !== "";
  const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const [signupIsValid, setSignupIsValid] = useState(false);

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

  async function formSubmissionHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setSignupIsValid(true);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);

    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          name: enteredName,
          email: enteredEmail,
        },
      });
      const result = response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      {!signupIsValid && (
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
                {nameIsInvalid && (
                  <p className={classes["error-text"]}>
                    Name must not be empty.
                  </p>
                )}
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
                  <p className={classes["error-text"]}>
                    Please enter a valid email.
                  </p>
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
      )}
      {signupIsValid && <Login />}
    </>
  );
};

export default Signup;
