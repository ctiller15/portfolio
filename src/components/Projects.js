import React from 'react';

class Projects extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="projectSect">
				<div className="projectNav">
					<button>Professional</button>
					<h2>Projects</h2>
					<button>Personal</button>
				</div>
				<div className="projectDisplay">
					{/*iframe goes here!*/}
					<iframe className="projectView"></iframe>
					<div className="projectInfo">
						<p>This is some dummy text describing the project</p>
					</div>
				</div>
				<div className="professional projectList">
					<div>Project 1</div>
					<div>Project 2</div>
					<div>Project 3</div>
					<div>Project 4</div>
					<div>Project 5</div>
					<div>Project 6</div>
				</div>
				
				<div className="personal projectList hiddenProj">
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