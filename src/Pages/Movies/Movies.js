import React from 'react';
import './Movies.scss';
import {connect} from 'react-redux';
import {selectMovieItems, selectMovieGridItems} from '../../Redux/Movie/movie-selectors';
import {getMovies, getMovieGrid} from '../../Redux/Movie/movie-actions';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionGrid from '../../Components/CollectionGrid/CollectionGrid';

class Movies extends React.Component {

	componentDidMount() {
		this.props.dispatch(getMovieGrid());
		this.props.dispatch(getMovies());
	}
	
	render() {
    return (
        <div className="movies">
            <CollectionGrid movies/>
		 	<CollectionOverview movies />
		</div>
    );
}
}

const mapStateToProps = state => ({
	movieItems: selectMovieItems(state),
	movieGridItems: selectMovieGridItems(state)
})



export default connect(mapStateToProps)(Movies);