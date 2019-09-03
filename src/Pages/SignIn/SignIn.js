import React from 'react';
import './SignIn.scss';
import Background from '../../Assets/Background.jpg';
import FormInput from '../../Components/FormInput/FormInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {Link} from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithGoogle } from '../../Firebase/firebase.utils';
import { auth } from '../../Firebase/firebase.utils';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

    handleSubmit = async event => {
		event.preventDefault();
    	const { email, password } = this.state;

    try {
		await auth.signInWithEmailAndPassword(email,password);
		this.setState( { email: '', password: '' } )
    }
    catch (error) {
	      console.error(error);
	    }
}


	handleChange = event => {
		const {value, name} = event.target;

		this.setState({ [name] : value })
	}
	
	render() {
    return (
        <div className="signin">
		  <div className="background-image" 
		  style={{backgroundImage: `url(${Background})`
		}}/>
			<div className="form-container">
				<div className="form-shadow">
					<h1 className="signin-title">Sign In</h1>
				
			 <form action="POST" autoComplete="new-password" onSubmit={this.handleSubmit} >

				<FormInput 
				name="email" 
				type="email" 
				value = {this.state.email}
				handleChange={this.handleChange} 
				label = "Email"
				required />

				<FormInput 
				name="password" 
				type="password" 
				value= {this.state.password}
				handleChange={this.handleChange} 
				label = "Password"
				required />

				<div className="buttons-container">
				<div className="customButton" >
				<CustomButton type="submit" signin> Sign In </CustomButton>
				<CustomButton onClick={signInWithGoogle} >
				<FontAwesomeIcon icon={faGoogle} className="google-icon" /> 
				 Sign In With Google 
				 </CustomButton>

				</div>
				</div>
				</form>
				<div className="signup-option">
				<span className="newuser">New to Netflix?</span>
				<Link to='/signup' className='signupnow' >Sign up now.</Link>
				</div>
	    		</div>
			</div>
		</div>
    );
}
}

export default SignIn;