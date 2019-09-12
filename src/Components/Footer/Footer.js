import React from "react";
import "./Footer.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <h1 className="made">By Shivam Aima</h1>
        <h1 className="made two">
          Copyright©2019, ReactJS is
          <FontAwesomeIcon
            icon={faHeart}
            className="fa fa-heart-o heart-off"
            aria-hidden="true"
          />
        </h1>
        <h1 className="made three">View on Github</h1>
      </div>
    </div>
  );
};


export default Footer;
