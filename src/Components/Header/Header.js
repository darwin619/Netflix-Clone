import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import './Header.scss';

import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
    return(
        <div className="header">
		
		<div className="logo-container">	
			<img src={Logo} alt="logo" className="logo" />
		</div>

		<div className="options">

			<Link 
			className="option" 
			to="/movies">
		 	Movies
			</Link>

			<Link 
			className="option" 
			to="/tvshows">
		 	TV Shows
			</Link>

			<Link 
			className="option" 
			to="/contact">
		 	My List
			</Link>
			
			<div className="last">
			<SearchBar />
			</div>

			<Link 
			className="option" 
			to="/contact">
		 	Hi, Shivam
			</Link>

			<Link 
			className="option shift" 
			to="/contact">
		 	Sign In
			</Link>


		</div>
        </div>
        
    );
}

export default Header;