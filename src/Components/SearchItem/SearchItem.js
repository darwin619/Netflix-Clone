import React from 'react';
import './SearchItem.scss';
import {withRouter} from 'react-router';
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../Config/config';
import imdb from '../../Assets/imdb.png';
import star from '../../Assets/star.png';
import {FixString} from '../../Utils/FixString'; 
import AddToList from '../AddToList/AddToList';

const SearchItem = ({item,history,ListItems}) =>  {
	    const {id,title,poster_path,vote_average,name} = item
	    var titlePath = title ? FixString(title) : null
	    var namePath = name ? FixString(name) : null
	  return (
		<div className="search-item">
		<div className="rating-container">
		<span className="rating">
				<img src={imdb} alt="imdb" className="imdb" />
				<span className="rank">{vote_average}/</span>
				<span className="ten">10</span>
				<img src={star} alt="imdb" className="star" />
		</span>
		</div>
			<div className="search-addtolist">
				<AddToList item={item} />
			</div>
			<div className="search-image-container"
			onClick={() => {
			    return title
			    ? history.push({pathname: `/movies/${titlePath}`, state: { id }})
			    : history.push({pathname: `/tvshows/${namePath}`, state: { id }})
			}}> 
			   <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`}
		 	    alt="movie" 
		 	    className="search-image"/>
		 	 </div>

		    <div className="search-text">
				<h1 className="search-movie-name">{title}</h1>
				<h1 className="search-movie-name">{name}</h1> 
			</div>
	   </div>
	);
}

export default withRouter(SearchItem);

