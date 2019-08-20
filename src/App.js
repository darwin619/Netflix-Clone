import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {Route} from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import TvShow from './Pages/TVShows/TvShow';

class App extends React.Component {
  render() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Movies} />
      <Route exact path='/movies' component={Movies} />
      <Route exact path='/tvshows' component={TvShow} />
    </div>
  );
}
}
export default App;
