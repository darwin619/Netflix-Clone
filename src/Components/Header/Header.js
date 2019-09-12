import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import "./Header.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { auth } from "../../Firebase/firebase.utils";
import { selectCurrentUser } from "../../Redux/User/user-selectors";
import { connect } from "react-redux";
import { compose } from "redux";

const Header = ({ history, currentUser, currentRoute }) => {
  return (
    <div className="header">
      <div className="logo-container" onClick={() => history.push("/movies")}>
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="options">
       <div className="options-primary">
        <Link className="option" to="/movies">
          Movies
        </Link>

        <Link className="option" to="/tvshows">
          TV Shows
        </Link>

        <Link className="option" to="/mylist">
          My List
        </Link>
      </div>

        <div className="last">
          <SearchBar currentRoute={currentRoute} />
        </div>

        {currentUser ? (
          <div className="options-secondary">
            <Link className="option" to="">
              Hi, {currentUser.displayName}
            </Link>
            <div className="option signout" onClick={() => auth.signOut()}>
              Sign Out
            </div>
          </div>
        ) : (
          <div className="options-secondary">
            <Link className="option" to="">
              Hi, Guest
            </Link>
            <Link className="option shift" to="/signin">
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

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Header);
