import classes from "./Signup.module.css";
import Button from "./UI/Button";

const Signup = () => {
  return (
    <div className={classes.container}>
      <div>
        <form>
          <h1>SignUp</h1>
          <label id="name">Name</label>
          <input htmlFor="name" type="text" placeholder="Name"></input>
          <label id="email">Email</label>
          <input
            type="email"
            htmlFor="email"
            placeholder="example@gmail.com"
          ></input>
          <label id="password">Password</label>
          <input type="password" htmlFor="password"></input>
          <label id="password">Correct Password</label>
          <input type="password" htmlFor="password"></input>
          <div className={classes.signup}>
            <Button>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
