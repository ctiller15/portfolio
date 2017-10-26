// importing react
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// importing components
import Counter from './components/Counter';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

class Page extends Component {
	constructor(props){
		super(props);
	};

	render(){
		return(
			<div>
				{/* <Counter/> */}
				<Banner/>
				<Navbar/>
				<AboutPage/>
				<Services/>
				<Projects/>
				<Testimonials/>
				<Contact/>
				<Footer/>
			</div>
		);
	};
}

// document.addEventListener('DOMContentLoaded', function() {
// 	ReactDOM.render(
// 		React.createElement(Counter),
// 		document.getElementById('container')
// 	);
// });
document.addEventListener('DOMContentLoaded', function(){
	ReactDOM.render(<Page/>, document.querySelector('#container'));
});