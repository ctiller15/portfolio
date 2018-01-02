import React from 'react';

class Services extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){
		smoothScroll();
	}

	render(){
		return(
			<div className="Services">
				<h2>What can I do for you?</h2>

				<p>As a web developer, i specialize in:</p>

				<div className="promiseContainer">
					<div className="promise1">
						<h3>Front end with ReactJS</h3>
						<div>
							{/*<i class="fa fa-bullhorn" aria-hidden="true"></i>*/}
							{/*http://simpleicon.com/wp-content/uploads/loudspeaker.svg*/}
							<img src="/svg/reactJS.svg"/>
						</div>
						<p>Nice, modular front-end web development with the ReactJS framework.</p>
					</div>

					<div className="promise2">
						<h3>Responsive design</h3>
						<div>
							{/*http://simpleicon.com/responsive-design.html
							No clue who made this, find out?
							*/}
							<img src="/svg/responsive-design.svg"/>
						</div>
						<p>Using Bootstrap, Flexbox, or what have you, I'm experienced at optimizing websites for both mobile and desktop.</p>
					</div>

					<div className="promise3">
						<h3>Back-end with MongoDB, Node, Express</h3>
						<div>
							{/*<a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>*/}
							<img src="/svg/nodeJS.svg"/>
						</div>
						<p>Back-end support with NodeJS, MongoDB for the database, and Express for the routing.</p>
					</div>
				</div>

				<div className="contactButtons">
					<a className="myWork" href="#projects">See my work</a>  
					<br/>
					<a className="contactMe" href="#contact">Get in touch</a>
				</div>
			</div>
		);
	};
}

export default Services;