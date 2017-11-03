import React from 'react';

class Projects extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="projectSect">
				<div className="projectNav">
					<h2>Projects</h2>
				</div>
				<div className="projectDisplay">
					{/*iframe goes here!*/}
					<iframe className="projectView" src="https://floating-atoll-98238.herokuapp.com/" frameBorder="0"></iframe>
					<div className="projectInfo">
						<p>This is some dummy text describing the project</p>
					</div>
				</div>
				<div className="professional projectList">
					<div>
						<iframe src="https://shielded-coast-36823.herokuapp.com/"></iframe>
					</div>
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