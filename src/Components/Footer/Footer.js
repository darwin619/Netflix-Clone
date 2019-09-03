import React from 'react';
import './Footer.scss';
import Thanos from "react-thanos";
import {setSnap} from '../../Redux/User/user-actions';
import {connect} from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({setSnap}) => {
	return (
		 <div className="footer" >
			<div className="footer-text" >
				<h1 className="made">By Shivam Aima</h1>
				<h1 className="made two">Copyright©2019, ReactJS is
				<FontAwesomeIcon icon={faHeart} className="fa fa-heart-o heart-off" aria-hidden="true" />
				</h1>
				<h1 className="made three">View on Github</h1>	
			</div>
		</div>
		);
}

const mapDispatchToProps = dispatch => ({
	setSnap: () => dispatch(setSnap())
});

export default connect(null,mapDispatchToProps)(Footer);