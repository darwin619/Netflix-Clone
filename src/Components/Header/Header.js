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

const Header = ({history,currentUser,currentRoute,hidden,ToggleMenuHidden}) => {
  return (
    <div className="header">
      <div className="header__logo-box" onClick={() => history.push("/movies")}>
        <img src={Logo} alt="logo" className="header__logo" />
      </div>

      <div className="header__options">
        <div className="header__options-primary">
          <Link className="header__option" to="/movies">
            Movies
          </Link>

          <Link className="header__option" to="/tvshows">
            TV Shows
          </Link>

          <Link className="header__option" to="/mylist">
            My List
          </Link>
        </div>

        <div className="header__searchbar">
          <SearchBar currentRoute={currentRoute} />
        </div>

        {currentUser ? (
          <div className="header__options-secondary">
            <Link className="header__option" to="">
              Hi, {currentUser.displayName}
            </Link>
            <div
              className="header__option header__option--signout"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </div>
          </div>
        ) : (
          <div className="header__options-secondary">
            <Link className="header__option" to="">
              Hi, Guest
            </Link>
            <Link
              className="header__option header__option--signin"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="header__nav-menu-icon"
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
