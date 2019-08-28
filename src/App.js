import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import TvShow from './Pages/TVShows/TvShow';
import MovieItemPage from './Pages/MovieItemPage/MovieItemPage';
import TVShowItemPage from './Pages/TVShowItemPage/TVShowItemPage';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import { auth } from './Firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});
        console.log(this.state.currentUser)
      })
    }

    componentWillUnmount() {
     this.unsubscribeFromAuth();
    }
       
        

  render() {
  return (
    <div>
      <Header user={this.state.currentUser} />
	     <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies/:title" component={MovieItemPage} />
          <Route path="/movies" component={Movies} />
          <Route path="/tvshows/:name" component={TVShowItemPage} />
          <Route path="/tvshows" component={TvShow} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
	      </Switch>
    </div>
  );
}
}

export default App;                       
