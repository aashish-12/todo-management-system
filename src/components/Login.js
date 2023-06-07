import { useState } from "react";
import classes from "./Login.module.css";
import Signup from "./Signup";
import Button from "./UI/Button";

const Login = (props) => {
  const [signUp, setSignUp] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  let valid = false;
  const emailValid = enteredEmail.includes("@");
  const emailInValid = !emailValid && emailTouched;
  if (emailValid) {
    valid = true;
  }
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const emailBlurHandler = () => {
    setEmailTouched(true);
  };
  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  let content = (
    <div className={classes.container}>
      <div>
        <form>
          <h1>Login</h1>
          <input
            type="email"
            htmlFor="email"
            placeholder="User Email"
            value={enteredEmail}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          ></input>
          {emailInValid && (
            <p className={classes["error-text"]}>Enter correct email.</p>
          )}
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
            name="password"
            required
            value={enteredPassword}
            onChange={passwordHandler}
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          ></input>
          <div className={classes.login}>
            <Button disabled={!valid} onClick={props.onLogin}>
              Login
            </Button>
            <Button onClick={signUpHandler}>SignUp</Button>
          </div>
        </form>
      </div>
    </div>
  );
  function signUpHandler() {
    setSignUp(true);
  }
  // function onLogin() {
  //   console.log("login12345");
  //   props.onLogin();
  // }
  if (signUp) {
    content = <Signup />;
  }
  return <>{content}</>;
};

export default Login;
