import React from 'react';

class Navbar extends React.Component{
	constructor() {
		super();
	}

	render(){
		return(
			<nav>
				<div className="Navbar">
						<span className="main"><a href="#">CT</a> </span>
						<span><a href="#">About</a> </span>
						<span><a href="#">Projects</a> </span>
						<span><a href="#">Contact</a> </span>
				</div>
			</nav>
		);
	}
}

export default Navbar;