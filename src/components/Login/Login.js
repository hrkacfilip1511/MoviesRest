import { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [usernameValue, setUsernameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const loginHandler = (e) => {
    e.preventDefault();
    console.log(usernameValue);
    console.log(passwordValue);
    setUsernameValue("");
    setPasswordValue("");
  };
  return (
    <div className={classes.loginContainer}>
      <h3>LOGIN</h3>
      <form onSubmit={loginHandler}>
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
        <div className={classes.toRegisterLink}>
          <Link to="/register">Don't have an account ?</Link>
        </div>
        <button type="submit" className={classes.submitBtn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
