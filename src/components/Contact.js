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
			type: 'POST',
			data: {
				'name': this.state.name,
				'email': this.state.email,
				'message': this.state.message
			},
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		});
}

	render(){
		return(
			<div className="contact">
				<h2>Reach out to me!</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="nameInput">
						<label>
							<p>Name:</p>
							<input type="name" name="contact_name" value={this.state.value} onChange={this.handleName} />
						</label>
					</div>
					<div className="emailInput">
						<label>
							<p>Email:</p>
							<input type="text" name="contact_email" value={this.state.value} onChange={this.handleEmail} />
						</label>
					</div>
					<div className="commentInput">
						<label>
							<p>Comment:</p>
							<textarea type="textArea" name="contact_form" rows="6" value={this.state.value} onChange={this.handleText}></textarea>
						</label>
					</div>
					<button className="submit">Submit</button>
				</form>
			</div>
		);
	};
}

export default Contact;