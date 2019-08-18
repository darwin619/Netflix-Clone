import React from 'react';
import './Movies.scss';
import {connect} from 'react-redux';
import {selectMovieItems, selectMovieGridItems} from '../../Redux/Movie/movie-selectors';
import {getMovies, getMovieGrid} from '../../Redux/Movie/movie-actions';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';

class Movies extends React.Component {

	componentDidMount() {
		this.props.dispatch(getMovieGrid());
		this.props.dispatch(getMovies());
	}

	render() {
		const {movieItems, movieGridItems} = this.props;
    return (
        <div className="movies">
		 	<h1>WTF BRO</h1>
		 	<CollectionOverview />
		</div>
        
    );
}
}

const mapStateToProps = state => ({
	movieItems: selectMovieItems(state),
	movieGridItems: selectMovieGridItems(state)
})



export default connect(mapStateToProps)(Movies);