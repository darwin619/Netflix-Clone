import React from 'react';
import './ItemPageFooter.scss';
import {connect} from 'react-redux';
import {selectMovieCast,selectMovieVideos} from '../../Redux/Movie/movie-selectors';
import {selectTVCast,selectTVVideos} from '../../Redux/TVShow/tv-selectors';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemPageCast from '../ItemPageCast/ItemPageCast';
import {TRAILER_LINK} from '../../Config/config';

class ItemPageFooter extends React.Component {
	
	   render() { 
         const {movieCast, movieVideos, tvCast, tvVideos, movies, tvshow} = this.props;
         console.log(movieCast)
    	return (
        <div className="item-page-footer">
    		<div className="item-page-container">
    		{
                movies
                ? (movieCast
                  .filter((item,index) => index < 4)
                  .map(({id, ...otherProps}) => <ItemPageCast key={id} {...otherProps} /> ))
                : null
            }
            {
                 tvshow 
                ? (tvCast
                  .filter((item,index) => index < 4)
                  .map(({id, ...otherProps}) => <ItemPageCast key={id} {...otherProps} /> ))
                : null
            }
             </div>
            <div className="buttons">
            <button className="btn"><FontAwesomeIcon icon={faPlus} className="icon" /> My List</button>
            <button 
            onClick={() => {
              return movies 
              ? (window.open(`${TRAILER_LINK}${movieVideos}`, '_blank'))
              : (window.open(`${TRAILER_LINK}${tvVideos}`, '_blank')) 
             }}
            className="btn">
            <FontAwesomeIcon icon={faPlay} className="icon" /> 
            Watch Trailer
            </button>
            </div>
    	    </div>
    	);
    }
 }

const mapStateToProps = state => ({
  movieCast: selectMovieCast(state),
  movieVideos: selectMovieVideos(state),
  tvCast: selectTVCast(state),
  tvVideos: selectTVVideos(state)
});

export default connect(mapStateToProps)(ItemPageFooter);



