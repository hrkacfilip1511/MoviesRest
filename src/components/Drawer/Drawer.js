import classes from "./Drawer.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const Drawer = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div
      className={`${classes.drawer} ${
        props.isMenuVisible && classes.showDrawer
      }`}
    >
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">{isLoggedIn ? "Logout" : "Login"}</Link>
    </div>
  );
};

export default Drawer;
