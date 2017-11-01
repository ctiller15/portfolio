import React from 'react';

class Services extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Services">
				<h2>What can I do for you?</h2>

				<p>When I build a website for you, you get...</p>

				<div className="promise1">
					<h3>Clear communication</h3>
					<div>
						{/*<i class="fa fa-bullhorn" aria-hidden="true"></i>*/}
						{/*http://simpleicon.com/wp-content/uploads/loudspeaker.svg*/}
						<img src="/svg/loudspeaker.svg"/>
					</div>
					<p>Clean, clear design ensures that your users know exactly what you offer.</p>
				</div>

				<div className="promise2">
					<h3>Responsive design</h3>
					<div>
						{/*http://simpleicon.com/responsive-design.html
						No clue who made this, find out?
						*/}
						<img src="/svg/responsive-design.svg"/>
					</div>
					<p>Your website will be optimized for everything from the smallest phones to the largest desktops</p>
				</div>

				<div className="promise3">
					<h3>Easy support and management</h3>
					<div>
						{/*<a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>*/}
						<img src="/svg/maintenance.svg"/>
					</div>
					<p>I don't vanish after your site is built. I give you the means to handle the simple stuff, and if something goes wrong? Just give me a call.</p>
				</div>

				<div className="contactButtons">
					<a className="myWork" href="#">See my work</a>  
					<br/>
					<a className="contactMe" href="#">Get in touch</a>
				</div>
			</div>
		);
	};
}

export default Services;