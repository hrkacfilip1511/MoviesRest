import classes from "./Drawer.module.css";
import { Link } from "react-router-dom";
const Drawer = (props) => {
  return (
    <div
      className={`${classes.drawer} ${
        props.isMenuVisible && classes.showDrawer
      }`}
    >
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Drawer;
