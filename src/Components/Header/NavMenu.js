import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { auth } from "../../Firebase/firebase.utils";
import { selectCurrentUser } from "../../Redux/User/user-selectors";
import { connect } from "react-redux";
import { compose } from "redux";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleMenuHidden } from '../../Redux/User/user-actions';
import Netflix from "../../Assets/netflix.jpg";

const NavMenu = ({ history, currentUser, ToggleMenuHidden }) => {
  return (
    <div className="overlay">   
       <div className="exit" onClick={ToggleMenuHidden}>
          <FontAwesomeIcon icon={faTimes} className="exit-menu-icon" />
       </div>
      <div className="overlay-content" onClick={ToggleMenuHidden}>
        
        <img src={Netflix} alt="netflix_profile" className="netflix_profile" />

        {currentUser 
         ? <Link className="navmenu-username" to="">Hi, {currentUser.displayName}</Link>
         : <Link className="navmenu-username" to="">Hi, Guest</Link>
        }

        <Link className="navmenu-option" to="/movies">
          Movies
        </Link>

        <Link className="navmenu-option" to="/tvshows">
          TV Shows
        </Link>

        <Link className="navmenu-option" to="/mylist">
          My List
        </Link>

        {currentUser ? (
          <div>
            <div className="navmenu-option" onClick={() => auth.signOut()}>Sign Out</div>
          </div>
        ) : (
          <div>
            <Link className="navmenu-option" to="/signin">Sign In</Link>
          </div>
        )}
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  ToggleMenuHidden: () => dispatch(ToggleMenuHidden())
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavMenu);
