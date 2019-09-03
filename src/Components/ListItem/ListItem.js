import React from 'react';
import './ListItem.scss';
import {withRouter} from 'react-router';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../Config/config';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imdb from '../../Assets/imdb.png';
import star from '../../Assets/star.png';
import {FixString} from '../../Utils/FixString'; 
import {removeItem} from '../../Redux/List/list-actions';
import {connect} from 'react-redux';
import { compose } from 'redux';


const ListItem = ({item,history,removeItem}) => {
		const {id,title,poster_path,vote_average,name} = item
	    var titlePath = title ? FixString(title) : null
	    var namePath = name ? FixString(name) : null
	  return (
		<div className="list-item">
		<div className="rating-container">
		<span className="rating">
				<img src={imdb} alt="imdb" className="imdb" />
				<span className="rank">{vote_average}/</span>
				<span className="ten">10</span>
				<img src={star} alt="imdb" className="star" />
		</span>
		</div>
			<div className="list-addtolist" onClick={() => removeItem(item)}>
			    <FontAwesomeIcon icon={faTimes} className="remove-icon" />
			 </div>

			<div className="list-image-container" 
				onClick={() => {
				    return title
				    ? history.push({pathname: `/movies/${titlePath}`, state: { id }})
				    : history.push({pathname: `/tvshows/${namePath}`, state: { id }})
				}}> 
			   <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
		 	    alt="movie" 
		 	    className="list-image"/>
		 	 </div>

		    <div className="list-text">
				<h1 className="list-movie-name">{title}</h1>
				<h1 className="list-movie-name">{name}</h1> 
			</div>
	   </div>
	);
}

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item))
});

export default compose(
  withRouter,
  connect(null,mapDispatchToProps)
)(ListItem);

