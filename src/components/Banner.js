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
				<h2>Making your life easier</h2>
			</div>
		);
	}
}

export default Banner;

