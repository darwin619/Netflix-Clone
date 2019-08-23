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
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';

class CollectionPreview extends React.Component  {
	constructor() {
		super();
		this.divRef = React.createRef();
	}
	
    componentDidUpdate() {
    	var node = ReactDOM.findDOMNode(this);
     	TitleHide(node);
     }

     onLeftClick = () => {
     	LeftArrow(this.divRef); 
     }
     onRightClick = () => {
     	RightArrow(this.divRef); 
     }

    render() {
    	const {title,movieItems,tvItems,start,end,movies,tvshow} = this.props;
    	const movieData = movieItems.slice(start, end);
        const tvData = tvItems.slice(start, end);

	return (
	<div className="collection-preview" id="scroll" ref={this.divRef}>
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="collection-box">
		<span className="fix"><FontAwesomeIcon icon={faChevronLeft} className="left-controls"  onClick={this.onLeftClick} /> </span>
    <div className="preview">	
	
	  {     
	  		movies
	  	    ? (movieData.map(({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} movies={movies} tvshow={tvshow}/>))
			: null
	  }
	  {
	  		tvshow
	  		? (tvData.map(({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} movies={movies} tvshow={tvshow}/>))
	  		: null
	  }
    </div>
	 	<span className="fix"><FontAwesomeIcon icon={faChevronRight} className="right-controls" onClick={this.onRightClick}/> </span>
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