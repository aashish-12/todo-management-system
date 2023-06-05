import classes from "./Header.module.css";
import Button from "./UI/Button";

const Header = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logo}>
          <p>ToDo</p>
        </div>
        <div className={classes.buttons}>
          <Button>Login</Button>
          <Button>Signup</Button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Header;
