import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import "./Header.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { auth } from "../../Firebase/firebase.utils";
import {
  selectCurrentUser,
  selectToggleHidden
} from "../../Redux/User/user-selectors";
import { ToggleMenuHidden } from "../../Redux/User/user-actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";

const Header = ({
  history,
  currentUser,
  currentRoute,
  hidden,
  ToggleMenuHidden
}) => {
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
      <FontAwesomeIcon
        icon={faBars}
        className="nav-menu-icon"
        onClick={ToggleMenuHidden}
      />
      {hidden ? null : <NavMenu />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectToggleHidden(state)
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
)(Header);
