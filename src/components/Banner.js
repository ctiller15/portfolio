import React from 'react';

class Banner extends React.Component{
	constructor() {
		super();
	}

	render(){
		return(
			<div className="banner">
				<h1>Christopher Tiller</h1>
				<hr/>
				<h4>Making your life easier</h4>
			</div>
		);
	}
}

export default Banner;

