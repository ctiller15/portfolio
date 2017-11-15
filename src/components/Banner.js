import React from 'react';

class Banner extends React.Component{
	constructor() {
		super();
	}

	render(){
		return(
			<div id="banner" className="banner">
				<h1>Christopher Tiller</h1>
				<hr/>
				<h4>Clean, clear, reliable, responsive</h4>
			</div>
		);
	}
}

export default Banner;

