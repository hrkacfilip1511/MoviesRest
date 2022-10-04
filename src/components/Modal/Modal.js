import React from "react";
import classes from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
