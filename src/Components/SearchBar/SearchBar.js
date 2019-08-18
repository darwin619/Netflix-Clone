import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="box">
		  <div className="container-2">
		      <span className="icon"><i className="fa fa-search"></i></span>
		      <input type="search" id="search" placeholder="Movies, TV Shows..." />
		  </div>
		</div>
        
    );
}

export default SearchBar;