import React from 'react';

class Projects extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<button>Professional</button> <h2>What I've made</h2> <button>Personal</button>
				<div className="professional">
					<div>Project 1</div>
					<div>Project 2</div>
					<div>Project 3</div>
					<div>Project 4</div>
					<div>Project 5</div>
					<div>Project 6</div>
				</div>
				
				<div className="personal">
					<div>Project 1</div>
					<div>Project 2</div>
					<div>Project 3</div>
					<div>Project 4</div>
					<div>Project 5</div>
					<div>Project 6</div>
				</div>
			</div>
		);
	}
}

export default Projects;