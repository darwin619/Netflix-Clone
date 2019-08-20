import React from 'react';
import './TvShow.scss';
import {connect} from 'react-redux';
import {selectTVItems, selectTVGridItems} from '../../Redux/TVShow/tv-selectors';
import {getTvShows, getTvShowsGrid} from '../../Redux/TVShow/tv-actions';
import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';

class TvShow extends React.Component {

	componentDidMount() {
		this.props.dispatch(getTvShows());
		this.props.dispatch(getTvShowsGrid());
	}

	render() {
    return (
        <div className="TV">
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