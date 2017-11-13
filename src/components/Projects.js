import React from 'react';

const projects = [
	{
		name: "Tampa Bay Runners",
		image: "/img/Tampa_Bay_Runners.png",
		url: "https://floating-atoll-98238.herokuapp.com/",
		description: "The website for a local running club based in Tampa, Florida"
	},
	{
		name: "Idea Saver",
		image: "/img/Idea_Saver.png",
		url: "https://shielded-coast-36823.herokuapp.com/",
		description: "A web application to store and save ideas"
	},
	{
		name: "Flickr Viewer",
		image: "/img/Flickr_viewer.png",
		url: "https://desolate-reaches-89500.herokuapp.com/",
		description: "A live viewer for flickr photos"
	},
	{
		name: "Pomodoro Clock",
		image: "/img/pomodoro.jpg",
		url: "https://ctiller15.github.io/Pomodoro_Clock/",
		description: "A pomodoro clock, made as a FreeCodeCamp challenge"
	},
	{
		name: "RGB Color Game",
		image: "/img/color_game.jpg",
		url: "https://ctiller15.github.io/Color_Game_Project/",
		description: "A RGB color game",
	},
	{
		name: "Mirtha's cafe website",
		image: "/img/Mirthas_Cafe.png",
		url: "https://ctiller15.github.io/MirthasWebsite/",
		description: "A mockup website for Mirtha's latin cafe, in Winter Haven, FL"
	}
];

class Projects extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name: projects[0].name,
			image: projects[0].image,
			url: projects[0].url,
			description: projects[0].description
		}
	}

	componentDidMount(){
		window.onclick = function(event) {
			// console.log(event.target.id);
			if (event.target.classList.value === "modal"){
				document.querySelector(`#${event.target.id}`).style.display = "none";
			}
		}
	}

	componentWillUnmount(){

	}

	openElement(elemRef){
		// console.log(this.refs[elemRef]);
		this.refs[elemRef].style.display = "block";
	}

	closeElement(elemRef){
		this.refs[elemRef].style.display = "none";
	}

	projItems(){
		return projects.map((proj, ind) => {
			return(
				<div className="projects-md" ref={`myElement${ind}`} key={ind} >
					<div className="hidden-mobile project-clickable" onClick={() => this.reloadImage(proj.name, proj.image, proj.url, proj.description)}>
						<img src={proj.image}/>
					</div>
					<div className="show-mobile">
						{/*Modal Trigger*/}
						<img  src={proj.image} id={`project${ind}-mobile`} onClick={() => this.openElement(`myModal${ind}`)}/>

						{/*Actual Modal*/}
						<div ref={`myModal${ind}`} id={`mobileModal${ind}`} className="modal">
							{/*Modal Content*/}
							<div className="modal-content">
								<span className="close" onClick={() => this.closeElement(`myModal${ind}`)}>&times;</span>
								<a href={proj.url} target="_blank"><img src={proj.image}/></a>
								<h4>{proj.name}</h4>
								<p>{proj.description}</p>
							</div>
						</div>
					</div>
				</div>		
			);
		});
	}

	reloadImage(name, image, url, desc){
		console.log("Changing state! Whoo!");
		this.setState({
			name: name,
			image: image,
			url: url,
			description: desc
		});
	}

	render(){
		let name = this.state.name;
		let image = this.state.image;
		let url = this.state.url;
		let description = this.state.description;
		return(
			<div className="projectSect">
				<div className="projectNav">
					<h2>Projects</h2>
				</div>
				<div className="projectDisplay hidden-mobile">
					{/*image goes here!*/}
					<img src={image}/>
					<div className="projectInfo">
						<h4><a href={url}>{name}</a></h4>
						<p>{description}</p>
					</div>
				</div>
				<div className="projectList">
					{this.projItems()}
				</div>
			</div>
		);
	}
}

export default Projects;