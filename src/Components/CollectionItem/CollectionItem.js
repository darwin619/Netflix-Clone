import React from 'react';
import {IMAGE_BASE_URL, GRID_IMAGE_SIZE} from '../../Config/config';
import './CollectionItem.scss';
import Truncate from '../../Utils/Truncate';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ItemPage from '../ItemPage/ItemPage';
import {withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import {FixString} from '../../Utils/FixString';


const CollectionItem = ({title,overview,backdrop_path,name,movies,tvshow,history,match}) =>  {
	    const para = Truncate(overview, 155, ' ..read more')
	    var titlePath = movies ? FixString(title) : null
	    var namePath = tvshow ? FixString(name) : null
	    console.log(match)
		return (
			<div className="box select" 
				onClick={() => {
				    return movies 
				    ? history.push(`movies/${titlePath}`) 
				    : history.push(`tvshows/${namePath}`)
				}}>
				 	<Route path={`movies/${titlePath}`} render={(props) => <ItemPage />} />
				 	
	           		
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

	export default withRouter(CollectionItem);