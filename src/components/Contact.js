import React from 'react';

function contactMe() {
	$.ajax({
	    url: '/contactus',
	    dataType: 'json',
	    cache: false,
	    method: 'POST',
	    success: function(data) {
	        console.log("this.state");
	    }.bind(this),
	    error: function(xhr, status, err) {
	    	console.log("Error!");
	        console.error(status, err.toString());
	    }.bind(this)
	});
}

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
						name: '',
						email: '',
						message: ''};

		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleText = this.handleText.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleName(event){
		this.setState({name: event.target.value});
	}

	handleEmail(event){
		this.setState({email: event.target.value});
	}

	handleText(event){
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		$.ajax({
		    url: '/contactus',
		    dataType: 'json',
		    cache: false,
		    method: 'POST',
		    data: {
		    	'name': this.state.name,
		    	'email': this.state.email,
		    	'message': this.state.message
		    },
		    success: function(data) {
		        console.log("We did it!");
		    }.bind(this),
		    error: function(xhr, status, err) {
		    	console.log("Error!");
		        console.error(status, err.toString());
		    }.bind(this)
		});		
		// console.log(
		// 			this.state.name,
		// 			this.state.email,
		// 			this.state.message
		// 			);

	}

	render(){
		return(
			<div className="contact">
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="name" name="contact_name" value={this.state.value} onChange={this.handleName} />
					</label>
					<label>
						Email:
						<input type="text" name="contact_email" value={this.state.value} onChange={this.handleEmail} />
					</label>
					<label>
						Comment:
						<input type="textArea" name="contact_form" value={this.state.value} onChange={this.handleText} />
					</label>
					<button>Submit</button>
				</form>
			</div>
		);
	};
}

export default Contact;