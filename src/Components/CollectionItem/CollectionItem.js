import React from 'react';
import {IMAGE_BASE_URL, GRID_IMAGE_SIZE} from '../../Config/config';
import './CollectionItem.scss';
import Truncate from '../../Utils/Truncate';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router';
import {FixString} from '../../Utils/FixString'; 

const CollectionItem = ({id,title,overview,backdrop_path,poster_path,vote_average,name,movies,tvshow,history}) => {
	    const para = Truncate(overview, 155, ' ..read more')
	    var titlePath = movies ? FixString(title) : null
	    var namePath = tvshow ? FixString(name) : null
	return (
		<div className="box select" 
			onClick={() => {
			    return movies 
			    ? (history.push(`/movies/${titlePath}`))
			    : (history.push(`/tvshows/${namePath}`))
			}}>
			   <img src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${backdrop_path}`}
		 	    alt="movie" 
		 	    className="movie-image"/>
		    <div className="text">
				<h1 className="movie-name">{title}</h1>
				<h1 className="movie-name">{name}</h1>
				<span className="overview">{para}</span> 
	    	 <div className="addtolist">
			    <FontAwesomeIcon icon={faPlus} className="fass fa-plus" />
			    <span className="add">Add to list</span>
			 </div>
		  </div>
	   </div>
	);
}


export default withRouter(CollectionItem)