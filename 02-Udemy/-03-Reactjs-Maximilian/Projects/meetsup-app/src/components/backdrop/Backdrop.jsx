import React from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

export default Backdrop;
