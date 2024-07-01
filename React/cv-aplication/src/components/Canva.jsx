/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/canvas.css";
import avatar from "../assets/pexels-stefanstefancik-91227.jpg";
const url = "../assets/pexels-stefanstefancik-91227.jpg";
const Canvas = (data) => {
  return (
    <>
      <div className="canvas__left">
        <div className="canvas__left__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="canvas__left__info">
          <h2>Duc Le</h2>
          <h4 defaultValue={"Monile: 0123456 - Email:JohnDoe@gmail.com"}>
            Mobile: - Email:{" "}
          </h4>
        </div>
      </div>
      <div className="canvas__right">
        <div className="canvas__right__education">edu</div>
        <div className="canvas__right__work">work</div>
      </div>
    </>
  );
};

export default Canvas;
