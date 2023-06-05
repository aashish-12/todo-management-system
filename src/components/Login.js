import { useState } from "react";
import classes from "./Login.module.css";
import Signup from "./Signup";
import Button from "./UI/Button";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  let content = (
    <div className={classes.container}>
      <div>
        <form>
          <h1>Login</h1>
          <input type="email" htmlFor="email" placeholder="User Email"></input>
          <input
            type="password"
            htmlFor="password"
            placeholder="Password"
          ></input>
          <div className={classes.login}>
            <Button>Login</Button>
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
