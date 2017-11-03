import React from 'react';

class Navbar extends React.Component{
	constructor() {
		super();
	}

	componentDidMount(){
		var scrollNav = document.querySelector("nav");
		var stickPos = window.pageYOffset + scrollNav.getBoundingClientRect().y;
		console.log(stickPos);
		var afterElement = document.querySelector('.aboutMe');
		var style = window.getComputedStyle(afterElement);
		var marginTop = style.getPropertyValue('margin-top');
		window.addEventListener('scroll', this.handleScroll.bind(this, stickPos, scrollNav, parseInt(marginTop, 10)));
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(pos, elem, marg){
		console.log(window.pageYOffset);
		console.log(pos);
		console.log(typeof(marg));

		if(window.pageYOffset > pos){
			console.log("We stickin' now!");
			elem.style.position = "fixed";
			elem.style.top = "0";
		{/*Remember, these values are only temporary! Code with more variable values later!*/}
			document.querySelector(".aboutMe").style.marginTop = `${marg + 36}px`;
		} else {
			console.log("Not sticky enough...");
			elem.style.position = "relative";
			elem.style.top = "null";
			document.querySelector(".aboutMe").style.marginTop = `${marg}px`;
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