import React from 'react';
import {IMAGE_BASE_URL, BACKDROP_SIZE} from '../../Config/config';
import './CollectionGridItem.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CollectionGridItem = ({title,overview,backdrop_path,name}) =>  {
		return (
			<div className="grid-item">
				   <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
			 	    alt="movie" 
			 	    className="grid-image"/>
			    <div className="grid-text">
					<h1 className="grid-name">{title}</h1>
					<h1 className="grid-name">{name}</h1>
					<span className="grid-overview">{overview}</span> 
		    	 <div className="addtolist">
				    <FontAwesomeIcon icon={faPlus} className="fass fa-plus" />
				    <span className="add">Add to list</span>
				 </div>
			  </div>
		  </div>
		);
	}

	export default CollectionGridItem;