import React from "react";
import "./SinglePhoto.css";

const SinglePhoto = props => {
  return (
    <div className="SinglePhoto">
      <img className="SinglePhoto__image" src={props.photo} alt="" />
    </div>
  );
};

export default SinglePhoto;
