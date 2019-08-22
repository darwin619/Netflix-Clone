import React from 'react';
import './TvShow.scss';
import {connect} from 'react-redux';
import {selectTVItems, selectTVGridItems} from '../../Redux/TVShow/tv-selectors';
import {getTvShows, getTvShowsGrid} from '../../Redux/TVShow/tv-actions';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionGrid from '../../Components/CollectionGrid/CollectionGrid';

class TvShow extends React.Component {

	componentDidMount() {
		this.props.dispatch(getTvShows());
		this.props.dispatch(getTvShowsGrid());
	}

	render() {
    return (
        <div className="TV">
        	<CollectionGrid tvshow/>
		 	<CollectionOverview tvshow />
		</div>
        
    );
}
}

const mapStateToProps = state => ({
	tvItems: selectTVItems(state),
	tvShowGridItems: selectTVGridItems(state)
})



export default connect(mapStateToProps)(TvShow);