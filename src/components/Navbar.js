import React from 'react';

class Navbar extends React.Component{
	constructor() {
		super();
	}

	componentDidMount(){
		var scrollNav = document.querySelector("nav");
		var stickPos = window.pageYOffset + scrollNav.getBoundingClientRect().y;
		var stickPosHeight = scrollNav.getBoundingClientRect().height;
		// console.log(stickPos);
		var beforeElement = document.querySelector('.banner');
		var style = window.getComputedStyle(beforeElement);
		var marginBottom = style.getPropertyValue('margin-bottom');
		window.addEventListener('scroll', this.handleScroll.bind(this, stickPos, stickPosHeight, scrollNav, parseInt(marginBottom, 10)));
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(pos, height, elem, marg){
		console.log(pos);
		// console.log(window.pageYOffset);
		// console.log(pos);
		// console.log(typeof(marg));

		if(window.pageYOffset > pos){
			// console.log("We stickin' now!");
			elem.style.position = "fixed";
			elem.style.top = "0";
		{/*Remember, these values are only temporary! Code with more variable values later!*/}
			document.querySelector(".banner").style.marginBottom = `${marg + height}px`;
		} else {
			// console.log("Not sticky enough...");
			elem.style.position = "relative";
			elem.style.top = "null";
			document.querySelector(".banner").style.marginBottom = `${marg}px`;
		}
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