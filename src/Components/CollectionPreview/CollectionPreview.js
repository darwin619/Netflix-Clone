import React from 'react';
import ReactDOM from 'react-dom';
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem';
import {connect} from 'react-redux';
import {selectMovieItems} from '../../Redux/Movie/movie-selectors';
import {selectTVItems} from '../../Redux/TVShow/tv-selectors';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {TitleHide} from '../../Utils/TitleHide';

class CollectionPreview extends React.Component  {

    componentDidUpdate() {
     	var node = ReactDOM.findDOMNode(this);
     	TitleHide(node)
     }

    render() {
    	const {title,movieItems,tvItems,start,end,movies,tvshow} = this.props;
    	const movieData = movieItems.slice(start, end);
        const tvData = tvItems.slice(start, end);
	return (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="collection-box">
				<span><FontAwesomeIcon icon={faChevronLeft} className="left-controls" /> </span>
	 		 <div className="preview">	
	  			
					  {     
					  		movies
					  	    ? (movieData.map(({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} />))
							: null
					  }
					  {
					  		tvshow
					  		? (tvData.map(({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} />))
					  		: null
					  }
			 </div>
	 			 <span><FontAwesomeIcon icon={faChevronRight} className="right-controls " /> </span>
      		</div>
		</div>
		);
	}
}

	const mapStateToProps = state => ({
		movieItems: selectMovieItems(state),
		tvItems: selectTVItems(state),
	})

	export default connect(mapStateToProps)(CollectionPreview);