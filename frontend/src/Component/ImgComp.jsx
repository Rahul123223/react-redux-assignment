import transitions from "@material-ui/core/styles/transitions";
import React from "react";

const ImgComp = ({ src }) => {
  let imgStyles = {
    width: 100 + "%",
    height: "auto",
    transitions: "none",
  };
  return (
    <img id="slide_images" src={src} alt="slid-img" style={imgStyles}></img>
  );
};

export default ImgComp;
