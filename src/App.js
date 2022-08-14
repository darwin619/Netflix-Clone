import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import { Header, SearchPage, ListOverview } from "./Components";
import {
  Movies,
  TvShow,
  SignIn,
  SignUp,
  MovieItemPage,
  TVShowItemPage,
} from "./Pages";
import { auth } from "./Firebase/firebase.utils";
import { CreateUserProfileDocument } from "./Firebase/firebase.utils";
import { setCurrentUser } from "./Redux/User/user-actions";
import { selectCurrentUser } from "./Redux/User/user-selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies/:title" component={MovieItemPage} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows/:name" component={TVShowItemPage} />
          <Route path="/tvshows" component={TvShow} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/searchresults" component={SearchPage} />
          <Route exact path="/mylist" component={ListOverview} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
