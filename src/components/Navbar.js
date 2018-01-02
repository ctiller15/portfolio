import React from 'react';

class Navbar extends React.Component{
	constructor() {
		super();
	}

	componentDidMount(){
		smoothScroll();
		var scrollNav = document.querySelector("nav");
		var stickPos = window.pageYOffset + scrollNav.getBoundingClientRect().y;
		var stickPosHeight = scrollNav.getBoundingClientRect().height;
		var beforeElement = document.querySelector('.banner');
		var style = window.getComputedStyle(beforeElement);
		var marginBottom = style.getPropertyValue('margin-bottom');
		window.addEventListener('scroll', this.handleScroll.bind(this, stickPos, stickPosHeight, scrollNav, parseInt(marginBottom, 10)));
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(pos, height, elem, marg){

		if(window.pageYOffset > pos){
			elem.style.position = "fixed";
			elem.style.top = "0";
			document.querySelector(".banner").style.marginBottom = `${marg + height}px`;
		} else {
			elem.style.position = "relative";
			elem.style.top = "null";
			document.querySelector(".banner").style.marginBottom = `${marg}px`;
		}
	}

	render(){
		return(
			<nav>
				<div className="Navbar">
						<span className="main"> 
							<a href="https://github.com/ctiller15" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square" aria-hidden="true"></i></a>
							<a href="https://www.linkedin.com/in/christopher-tiller-9b853b129/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> 
						</span>
						<span><a href="#about">About</a> </span>
						<span><a href="#projects">Projects</a> </span>
						<span><a href="#contact">Contact</a> </span>
				</div>
			</nav>
		);
	}
}

export default Navbar;