import React from 'react';

const projects = [
	{
		name: "Tampa Bay Runners",
		image: "/img/Tampa_Bay_Runners.png",
		imgMobile: "/img/Tampa_Bay_Runners_mobile.png",
		url: "https://www.tampabayrunners.com",
		description: "The website for a local running club based in Tampa, Florida"
	},
	{
		name: "Idea Saver",
		image: "/img/Idea_Saver.png",
		imgMobile: "/img/Idea_Saver_mobile.png",
		url: "https://shielded-coast-36823.herokuapp.com/",
		description: "A web application to store and save ideas"
	},
	{
		name: "MDI Sales",
		image: "/img/mdi_sales.png",
		imgMobile: "/img/mdi_sales_mobile.png",
		url: "https://ctiller15.github.io/mdisales/",
		description: "A mockup home page for Manufacturer Distributor's, Inc."
	},
	{
		name: "5-day forecast",
		image: "/img/Weather_App.png",
		imgMobile: "/img/Weather_App_mobile.png",
		url: "https://fierce-everglades-46054.herokuapp.com/",
		description: "A five-day weather forecast, gives the high and low temperatures for the next five days."
	},
	{
		name: "React Social Cards",
		image: "/img/React_Social_Cards.png",
		imgMobile: "/img/React_Social_Cards_mobile.png",
		url: "https://mighty-oasis-47295.herokuapp.com/",
		description: "A set of social cards, made with React and Flexbox."
	},
	{
		name: "IPM Roofing",
		image: "/img/IPMRoofing.jpg",
		url: "https://ctiller15.github.io/IPMRoofing/",
		imgMobile: "/img/IPMRoofing_mobile.png",
		description: "A mockup website for a local roofing company based in Valrico, FL"
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
								<a href={proj.url} target="_blank"><img src={proj.imgMobile}/></a>
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
			<div id="projects" className="projectSect">
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