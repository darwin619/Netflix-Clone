import React from 'react';
import {connect} from 'react-redux';
import {selectMovieByTitle} from '../../Redux/Movie/movie-selectors';
import {selectTVByTitle} from '../../Redux/TVShow/tv-selectors';
import ItemPage from '../../Components/ItemPage/ItemPage';

class ItemPageOverview extends React.Component {
	render() {
		const {movieItemByTitle, tvItemByTitle, movies, tvshow} = this.props
	return (
		<div className="item-page-overview">
			{
				movies 
				? (movieItemByTitle.map(({id, ...otherProps}) => <ItemPage key={id} id={id} movies={movies} {...otherProps} />))
				: null
			}
			{
				tvshow
				? (tvItemByTitle.map(({id, ...otherProps}) => <ItemPage key={id} id={id} tvshow={tvshow} {...otherProps} />))
				: null
			}
	    </div>
	);
}
}

const mapStateToProps = (state, ownProps) => ({
	movieItemByTitle: selectMovieByTitle(ownProps.params.title)(state),
	tvItemByTitle: selectTVByTitle(ownProps.params.name)(state)
})

export default connect(mapStateToProps)(ItemPageOverview);

