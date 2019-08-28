import React from 'react';
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../../Config/config';
import './ItemPage.scss';
import {connect} from 'react-redux';
import imdb from '../../Assets/imdb.png';
import star from '../../Assets/star.png';
import {selectMovieCast,selectMovieVideos} from '../../Redux/Movie/movie-selectors';
import ItemPageFooter from '../ItemPageFooter/ItemPageFooter';
import {getAdditionalMovieData} from '../../Redux/Movie/movie-actions';
import {getAdditionalTVData} from '../../Redux/TVShow/tv-actions';

class ItemPage extends React.Component {
	componentDidMount() {
	return this.props.movies 
	? this.props.dispatch(getAdditionalMovieData(this.props.id)) 
	: this.props.dispatch(getAdditionalTVData(this.props.id))
	}
	render() {
		 const {title,name,overview,backdrop_path,poster_path,vote_average,movies,tvshow} = this.props
		 const background =`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`
	     const poster =`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
	     return (
		<div className="item-page">
		  <div className="background-image" 
		  style={{backgroundImage: `url(${background})`
		}}/>
		<div className="item">
			<div className="item-container">
				<div className="container">
					<div className="image-container">
		  				<img src={`${poster}`} alt="poster" className="poster" />
					</div>
				<div className="text-box">
					<h1 className="item-name">{title}</h1>
					<h1 className="item-name">{name}</h1>
					<span className="paragraph">{overview}</span>
					<span className="rating">
						<img src={imdb} alt="imdb" className="imdb" />
						<span className="rank">{vote_average}/</span>
						<span className="ten">10</span>
						<img src={star} alt="imdb" className="star" />
					</span>
					<h1 className="cast-title">Cast</h1>
					<ItemPageFooter movies={movies} tvshow={tvshow} />
				</div>
		</div>
		</div>
	    </div>
	    </div>
	);
}
}

const mapStateToProps = state => ({
	movieCast: selectMovieCast(state),
    movieVideos: selectMovieVideos(state)
});

export default connect(mapStateToProps)(ItemPage);

