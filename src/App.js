import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import TvShow from './Pages/TVShows/TvShow';


class App extends React.Component {
  render() {
  return (
    <div>
      <Header />
	      <Route exact path='/' component={Movies} />
	      <Route path='/movies' render={(props) => <Movies />} />
	      <Route path='/tvshows' component={TvShow} />
    </div>
  );
}
}
export default App;                         
