import React from 'react';

class Services extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="Services">
				<h2>What can I do for you?</h2>

				<p>When I build a website for you, I promise the following:</p>

				<div className="promise1">
					<h3>Clear communication</h3>
					<div> icon goes here</div>
					<p>Clearly present your message to your users. They will know what they came for</p>
				</div>

				<div className="promise2">
					<h3>Responsive design</h3>
					<div> icon goes here</div>
					<p>Your website will be optimized for everything from the smallest phones to the largest desktops</p>
				</div>

				<div className="promise3">
					<h3>Easy support and management</h3>
					<div> icon goes here</div>
					<p>I don't vanish after your site is built. I give you the means to handle the simple stuff, and if something goes wrong? Just give me a call.</p>
				</div>

				<a href="#">See my work</a>  
				<br/>
				<a href="#">Get in touch</a>
			</div>
		);
	};
}

export default Services;