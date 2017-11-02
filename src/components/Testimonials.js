import React from 'react';

class Testimonials extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="testimonials">
				<h2>See what others are saying</h2>
				<div>
					<p className="testimonialText">
						"Phasellus fringilla venenatis enim ut malesuada.
						 Duis rhoncus sem vel dui euismod varius. Vestibulum vitae ultrices magna.
						 Nulla non egestas sem."
					</p>
					<p className="testimonialName">-Anonymous fellow</p>
				</div>
			</div>
		);
	}
}

export default Testimonials;