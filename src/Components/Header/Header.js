import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import './Header.scss';
import {withRouter} from 'react-router';
import SearchBar from '../SearchBar/SearchBar';
import { auth } from '../../Firebase/firebase.utils';

const Header = ({history, user}) => {
    return(
        <div className="header">
		
		<div className="logo-container" onClick={() => history.push('/movies')} >	
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


			{
				user
				? (<div><Link className="option">Hi, {user.displayName}</Link>
				   <div className="option signout" onClick={() => auth.signOut()} >Sign Out</div></div>)
				: (<div><Link className="option">Hi, Guest</Link>
				   <Link className="option shift" to="/signin">Sign In</Link></div>)
			}

		</div>
        </div>
    );
}

export default withRouter(Header);