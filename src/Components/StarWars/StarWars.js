import React from 'react';
import './StarWars.scss';
import starwars from './starwars.mp3';

const StarWars = () => {
	return ( 
		<div className="starwars">
		<div className="galaxy">
			<div className="logo">
			<img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237" />
			</div>
			<div className="fall">
				<div className="away">
				<p>A long time ago in a galaxy far, far away...</p>
				</div>
			<p>
			<i>EPISODE IV A NEW HOPE</i>
			Hi, I am Shivam Aima. I'm an aspiring Frontend Developer and a Computer science graduate, currently on some internship work. A couple of years back when I was introduced to the world of web development, the endless possibilities of what we can do with this skill blew my mind away. And I have been caught in its web ever since. And I never plan on stopping. I am passionately in love with the technologies I have learned in this long journey and really looking forward to increase the depth of my understanding of these technologies as I finally start looking for employement openly.<br />

I have also been an Internet marketer with a lot of video editing and photoshop skills. I have lived more in the internet world than I ever have in the real world.<br />

I try my hardest to work on each project. I love solving puzzles and can often find solutions to tough problems. I am highly-motivated, self-driven, fast learner and eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success. When I’m not programming, you can find me playing video games or learning and reading more about web development. <br />

I solemnly swear that I'll work tirelessly on any kind of work offered.<br />

Oh and also, the force is strong with this one!</p>	
			</div>
		</div>
		<audio preload="auto" autoPlay src={starwars} >
		</audio>
		</div>
  			
	)
}
export default StarWars;