import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import classes from "./Heading.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const Heading = (props) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((prevBool) => !prevBool);
  };
  const showClass = isMenuVisible ? "showMenuBtn" : null;
  return (
    <div className={classes.heading}>
      <Drawer isMenuVisible={isMenuVisible} />
      <div
        className={`${classes.menuBtn} ${isMenuVisible && classes.moveMenuBtn}`}
        onClick={toggleMenu}
      >
        <div className={classes.firstLine}></div>
        <div className={classes.secondLine}></div>
        <div className={classes.thirdLine}></div>
      </div>
      <div className={classes.headerFixedContent}>
        <h1>Movie app</h1>
        <div className={classes.social}>
          <FaFacebook className={classes.facebook} />
          <FaInstagram className={classes.instagram} />
          <FaTiktok className={classes.tikTok} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
