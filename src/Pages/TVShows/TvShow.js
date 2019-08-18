import React from 'react';
import './TvShow.scss';
import {connect} from 'react-redux';
import {selectTVItems, selectTVGridItems} from '../../Redux/TVShow/tv-selectors';
import {getTvShows, getTvShowsGrid} from '../../Redux/TVShow/tv-actions';

class TvShow extends React.Component {

	componentDidMount() {
		this.props.dispatch(getTvShows());
		this.props.dispatch(getTvShowsGrid());
	}

	render() {
		const {tvItems, tvShowGridItems} = this.props;
    return (
        <div className="TV">
		 	<h1>WTF BRO</h1>
		 	{console.log('tv grid', tvShowGridItems)}
		</div>
        
    );
}
}

const mapStateToProps = state => ({
	tvItems: selectTVItems(state),
	tvShowGridItems: selectTVGridItems(state)
})



export default connect(mapStateToProps)(TvShow);