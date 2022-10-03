import { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
const Register = (props) => {
  const [usernameValue, setUsernameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const registerHandler = (e) => {
    e.preventDefault();
    console.log(usernameValue);
    console.log(passwordValue);
    setUsernameValue("");
    setPasswordValue("");
  };
  return (
    <div className={classes.registerContainer}>
      <h3>REGISTER</h3>
      <form onSubmit={registerHandler}>
        <div className={classes.username}>
          <input
            value={usernameValue}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsernameValue(e.target.value)}
          />
        </div>
        <div className={classes.password}>
          <input
            value={passwordValue}
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className={classes.moreOptions}>
          <div className={classes.checkBox}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Forgot?</a>
        </div>
        <div className={classes.toLoginLink}>
          <Link to="/login">Already have an account?</Link>
        </div>
        <button type="submit" className={classes.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
