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
import {LeftArrow, RightArrow} from '../../Utils/ScrollArrows';

class CollectionPreview extends React.Component  {
	constructor() {
		super();
		this.divRef = React.createRef();
	}
	
    componentDidUpdate() {
    	var node = ReactDOM.findDOMNode(this);
     	TitleHide(node);
     }

    render() {
    	const {title,movieItems,tvItems,start,end,movies,tvshow} = this.props;
    	const movieData = movieItems.slice(start, end);
        const tvData = tvItems.slice(start, end);

	return (
	<div className="collection-preview" id="scroll" ref={this.divRef}>
		<div className="title-container"><h1 className="title">{title.toUpperCase()}</h1></div>
		<div className="collection-box">
		<span className="fix"><FontAwesomeIcon icon={faChevronLeft} className="left-controls"  onClick={() => LeftArrow(this.divRef)} /> </span>
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
	 	<span className="fix"><FontAwesomeIcon icon={faChevronRight} className="right-controls" onClick={() => RightArrow(this.divRef)} /> </span>
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