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
  async function loginSubmit(event) {
    event.preventDefault();
    const loginDetail = {
      email: enteredEmail.trim(),
      password: enteredPassword.trim(),
    };

    try {
      const response = await fetch(
        "https://to-do-manage.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginDetail),
        }
      );
      const result = await response.json();
      console.log(result);
      if(result.token){
        props.onLogin({login: true});
        props.token(result.token);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  let content = (
    <div className={classes.container}>
      <div>
        <form onSubmit={loginSubmit}>
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
            <Button disabled={!valid}>Login</Button>
            <Button onClick={signUpHandler}>SignUp</Button>
          </div>
        </form>
      </div>
    </div>
  );
  function signUpHandler() {
    setSignUp(true);
  }
  if (signUp) {
    content = <Signup />;
  }
  return <>{content}</>;
};

export default Login;
