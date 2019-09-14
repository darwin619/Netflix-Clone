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
import { ToggleMenuHidden } from "../../Redux/User/user-actions";
import Netflix from "../../Assets/netflix.jpg";

const NavMenu = ({ history, currentUser, ToggleMenuHidden }) => {
  return (
    <div className="overlay">
      <div className="overlay__exit" onClick={ToggleMenuHidden}>
        <FontAwesomeIcon icon={faTimes} className="overlay__exit-icon" />
      </div>
      <div className="overlay__content" onClick={ToggleMenuHidden}>
        <img src={Netflix} alt="netflix" className="overlay__netflix" />

        {currentUser ? (
          <Link className="overlay__username" to="">
            Hi, {currentUser.displayName}
          </Link>
        ) : (
          <Link className="overlay__username" to="">
            Hi, Guest
          </Link>
        )}

        <Link className="overlay__option" to="/movies">
          Movies
        </Link>

        <Link className="overlay__option" to="/tvshows">
          TV Shows
        </Link>

        <Link className="overlay__option" to="/mylist">
          My List
        </Link>

        {currentUser ? (
          <div
            className="overlay__option overlay__signout"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </div>
        ) : (
          <div>
            <Link className="overlay__option" to="/signin">
              Sign In
            </Link>
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavMenu);
