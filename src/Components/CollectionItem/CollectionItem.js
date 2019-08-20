import React from 'react';
import {IMAGE_BASE_URL, GRID_IMAGE_SIZE} from '../../Config/config';
import './CollectionItem.scss';
import Truncate from '../../Utils/Truncate';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CollectionItem = ({title,overview,backdrop_path,name}) =>  {
	    const para = Truncate(overview, 155, ' ..read more')
		return (
			<div className="box select">
				   <img src={`${IMAGE_BASE_URL}${GRID_IMAGE_SIZE}${backdrop_path}`}
			 	    alt="movie" 
			 	    className="movie-image"/>
			    <div className="text">
					<h1 className="movie-name">{title}</h1>
					<h1 className="movie-name">{name}</h1>
					<span class="overview">{para}</span> 
		    	 <div className="addtolist">
				    <FontAwesomeIcon icon={faPlus} className="fass fa-plus" />
				    <span class="add">Add to list</span>
				 </div>
			  </div>
		  </div>
		);
	}

	export default CollectionItem;