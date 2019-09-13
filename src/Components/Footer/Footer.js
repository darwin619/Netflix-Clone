import React from "react";
import "./Footer.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tmdb from '../../Assets/tmdb.png';
import github from '../../Assets/github.png';
import Thanos from "react-thanos";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
      <div className="footer-start">
      <Thanos
        onSnap={() => console.log("I love you 3000! Decimate...") }
        onSnapReverse={() => console.log("Avengers assemble!") }
      />
        <h1 className="made one"
          onClick={() => window.open(`https://shivamaima.com/`, '_blank') }
        >By <span className="name-link">Shivam Aima</span></h1>
        </div>
        <div className="center-text">
        <img src={tmdb} alt="tmdb" className="tmdb" 
          onClick={() => window.open(` https://www.themoviedb.org/en`, '_blank') }
        />
        <h1 className="made two">
          Copyright©2019, ReactJS is
          <FontAwesomeIcon
            icon={faHeart}
            className="fa fa-heart-o heart-off"
            aria-hidden="true"
          />
         
        </h1>
        </div>
        <div className="footer-end" onClick={() => window.open(`https://github.com/darwin619/Netflix-Clone`, '_blank') }>
        <img src={github} alt="github" className="github-logo"/>
        <h1 className="made three">View on Github</h1>
        </div>
      </div>
    </div>
  );
};


export default Footer;
