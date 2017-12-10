import React from 'react';

class Footer extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<footer>
				<div>Site created by Christopher Tiller, <span className="emailMe">christiller2015@gmail.com</span></div>
				<div>
					<p> SVG images provided by <span> 
					<a href="http://www.onlinewebfonts.com" target="_blank">online Web Fonts</a>
					</span> and <span><a href="http://simpleicon.com" target="_blank">simpleicon</a></span>
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;