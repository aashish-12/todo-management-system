import classes from "./Verified.module.css";
import { useState } from "react";
import Button from "./UI/Button";

const Verified = (props) => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState("");
  const valid = enteredOtp.length === 6;
  const otpHandler = (event) => {
    setEnteredOtp(event.target.value);
  };
  async function verifyHandler(event) {
    event.preventDefault();
    const otp = {
      email: props.email,
      otp: enteredOtp.trim(),
    };

    try {
      const response = await fetch(
        "https://to-do-manage.onrender.com/api/auth/email-otp-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(otp),
        }
      );
      const result = await response.json();
      console.log(result);
      //   message = result.message;
      setMessage(result.message);
    } catch (error) {
      console.error(error.message);
    }
    setEnteredOtp("");
  }
  console.log(message);
  return (
    <div className={classes.container}>
      <form onSubmit={verifyHandler}>
        <h1>OTP</h1>
        {!message && (
          <>
            <label>Verify your account with otp sent on your email.</label>
            <input
              type="text"
              value={enteredOtp}
              onChange={otpHandler}
              pattern="^[0-9]{1,6}$"
            ></input>
            <div className={classes.login}>
              <Button disabled={!valid}>Verify</Button>
            </div>
          </>
        )}
        {message && <p className={classes.success}>{message}</p>}
      </form>
    </div>
  );
};

export default Verified;
