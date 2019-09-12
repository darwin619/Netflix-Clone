import React from 'react';
import {connect} from 'react-redux';
import {selectMovieByTitle} from '../../Redux/Movie/movie-selectors';
import {selectTVByTitle} from '../../Redux/TVShow/tv-selectors';
import ItemPage from '../../Components/ItemPage/ItemPage';
import {selectSearchedMovieByTitle,selectSearchedTVShowByTitle} from '../../Redux/Search/search-selectors';
import {selectListMovieByTitle,selectListTVShowByTitle} from '../../Redux/List/list-selectors';

const ItemPageOverview = ({movieItemByTitle,tvItemByTitle,movies,tvshow,searchedMovieItemByTitle,			  
	searchedTvItemByTitle,listMovieItemByTitle,listTvItemByTitle}) => {
	return (
		<div className="item-page-overview">
			{
				movies
				? (movieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
				: null
			}
			{
				tvshow
				? (tvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
				: null
			}
			{
				movieItemByTitle.length === 0
				 ? (searchedMovieItemByTitle
				 ? (searchedMovieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
				 : null)
				 : null
			}
			{
				tvItemByTitle.length === 0
				? (searchedTvItemByTitle
				? (searchedTvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
				: null)
				: null
			}
			{
				(movieItemByTitle.length === 0) && (searchedMovieItemByTitle.length === 0)
				 ? (listMovieItemByTitle
				 ? (listMovieItemByTitle.map(item => <ItemPage key={item.id} item={item} movies={movies} />))
				 : null)
				 : null
			}
			{
				(tvItemByTitle.length === 0) && (searchedTvItemByTitle.length === 0)
				? (listTvItemByTitle
				? (listTvItemByTitle.map(item => <ItemPage key={item.id} item={item} tvshow={tvshow} />))
				: null)
				: null
			}
	    </div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	movieItemByTitle: selectMovieByTitle(ownProps.params.title)(state),
	tvItemByTitle: selectTVByTitle(ownProps.params.name)(state),
	searchedMovieItemByTitle: selectSearchedMovieByTitle(ownProps.state ? ownProps.state.id : null)(state),
	searchedTvItemByTitle: selectSearchedTVShowByTitle(ownProps.state ? ownProps.state.id : null)(state),
	listMovieItemByTitle: selectListMovieByTitle(ownProps.state ? ownProps.state.id : null)(state),
	listTvItemByTitle: selectListTVShowByTitle(ownProps.state ? ownProps.state.id : null)(state)
})

export default connect(mapStateToProps)(ItemPageOverview);

