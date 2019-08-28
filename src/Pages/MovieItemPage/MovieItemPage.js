import React from 'react';
import './MovieItemPage.scss';
import {connect} from 'react-redux';
import ItemPageOverview from '../../Components/ItemPageOverview/ItemPageOverview';
import {selectMovieItems} from '../../Redux/Movie/movie-selectors';
import {getMovies} from '../../Redux/Movie/movie-actions';


class MovieItemPage extends React.Component {
	componentDidMount() {
    	this.props.dispatch(getMovies()); 
		// setTimeout(() => this.props.dispatch(getAdditionalData(this.props.movieItemByTitle[0].id)), 1000)
	}

	  render() {
		return (
			<div className="movie-item-page">
				<ItemPageOverview params={this.props.match.params} movies />
		   </div>
		);
	}
}

const mapStateToProps = state => ({
	movieData: selectMovieItems(state)
});

export default connect(mapStateToProps)(MovieItemPage);