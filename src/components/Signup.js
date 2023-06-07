import React, { useState } from "react";
import classes from "./Signup.module.css";
import Button from "./UI/Button";
import Verified from "./Verified";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName !== "";
  const nameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const [enteredMobile, setEnteredMobile] = useState("");
  const [enteredMobileTouched, setEnteredMobileTouched] = useState(false);
  const enteredMobileIsValid = enteredMobile !== "";
  const enteredMobileIsInvalid = !enteredMobileIsValid && enteredMobileTouched;

  const [enteredPassword, setEnteredPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  // const [passwordTouched, setPasswordTouched] = useState(false);
  // const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  // const passwordValid =  passwordTouched && confirmPasswordTouched;

  const [signupIsValid, setSignupIsValid] = useState(false);
  // const history = useHistory();

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMobileIsValid) {
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

  const mobileChangeHandler = (event) => {
    setEnteredMobile(event.target.value);
  };
  const mobileBlurHandler = () => {
    setEnteredMobileTouched(true);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value.trim();
    const passwordFieldName = event.target.name;
    const newPassword = {
      ...enteredPassword,
      [passwordFieldName]: passwordValue,
    };
    setEnteredPassword(newPassword);
  };
  const handleValidation = (event) => {
    const passwordValue = event.target.value.trim();
    const passwordFieldName = event.target.name;

    //for password
    if (passwordFieldName === "password") {
      const passwordLength = passwordValue.length;
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else {
        // setPasswordTouched(true);
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }

    //for confirm password
    if (
      passwordFieldName === "confirmPassword" ||
      (passwordFieldName === "password" &&
        enteredPassword.confirmPassword.length > 0)
    ) {
      if (enteredPassword.confirmPassword !== enteredPassword.password) {
        setConfirmPasswordErr("Confirm password is not matched");
      } else {
        // setConfirmPasswordTouched(true);
        setConfirmPasswordErr("");
      }
    }
  };
  let user;
  async function formSubmissionHandler(event) {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setSignupIsValid(true);
    user = {
      // id: Math.random().toString(),
      name: enteredName.trim(),
      email: enteredEmail.trim(),
      // mobile: enteredMobile.trim(),
      password: enteredPassword.password,
      role: "Admin",
    };

    try {
      const response = await fetch(
        "https://to-do-manage.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }

    // history.push('/Login');

    setEnteredName("");
    setEnteredNameTouched(false);
    // setEnteredEmail("");
    setEnteredEmailTouched(false);
    setEnteredMobile("");
    setEnteredMobileTouched(false);
    setEnteredPassword({
      password: "",
      confirmPassword: "",
    });
    // setPasswordTouched(false);
    // setConfirmPasswordTouched(false);
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
              <div>
                <label htmlFor="mobile">Mobile No.</label>
                <input
                  type="text"
                  id="mobile"
                  pattern="^[0-9]{1,10}$"
                  value={enteredMobile}
                  onChange={mobileChangeHandler}
                  onBlur={mobileBlurHandler}
                ></input>
                {enteredMobileIsInvalid && (
                  <p className={classes["error-text"]}>Enter Mobile Number.</p>
                )}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
                  onChange={handlePasswordChange}
                  value={enteredPassword.password}
                  onBlur={handleValidation}
                  required
                ></input>
                <p className={classes["error-text"]}>{passwordErr}</p>
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
                  onChange={handlePasswordChange}
                  value={enteredPassword.confirmPassword}
                  onBlur={handleValidation}
                  required
                ></input>
                <p className={classes["error-text"]}>{confirmPasswordErr}</p>
              </div>

              <div className={classes.signup}>
                <Button disabled={!formIsValid}>Signup</Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {signupIsValid && <Verified email={enteredEmail}/>}
    </>
  );
};

export default Signup;
