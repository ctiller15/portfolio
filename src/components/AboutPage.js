import React from 'react';

class AboutPage extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<div>
					<img src="/img/Profile_Pic_10-25-2017_0002.jpg"/>
				</div>
				<div className="detail">
					<h2>Who is this guy?</h2>
					<p>Hey there, the name is Chris! I'm just a guy with an endless thirst for knowledge, and an insatiable desire to help make people's lives easier. By continuing to develop websites in the Tampa, FL area, I hope to 
					strengthen the local online presence as much as I can.

					When I'm not tracing over lines of code, I like to spend my free time with my dog, and/or trying out the local eats. Sometimes both!</p>
				</div>


			</div>
		);
	}
}

export default AboutPage;