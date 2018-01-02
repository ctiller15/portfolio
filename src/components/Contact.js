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
				this.refs.personal.childNodes[0].childNodes[0].value = "";
				this.refs.personal.childNodes[1].childNodes[0].value = "";
				this.refs.sending.childNodes[0].childNodes[0].value = "";
				this.setState({
								name: "",
								email: "",
								message: ""
							});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(status, err.toString());
			}.bind(this)
		});
}

	render(){
		return(
			<div className="contact" id="contact">
				<h2>Reach out to me!</h2>
				<form ref="form" method="POST" onSubmit={this.handleSubmit}>
					<div ref="personal" className="personal">
						<div className="nameInput">
							<label htmlFor="contact_name">Name</label>
							<input type="name" name="contact_name" id="contact_name" value={this.state.value} onChange={this.handleName} />
						</div>
						<div className="emailInput">
							<label htmlFor="contact_email">Email</label>
							<input type="text" name="contact_email" id="contact_email" value={this.state.value} onChange={this.handleEmail} />
						</div>
					</div>
					<div ref="sending" className="sending">
						<div className="commentInput">
							<label htmlFor="contact_form">Comment</label>
							<textarea type="textArea" name="contact_form" id="contact_form" rows="6" value={this.state.value} onChange={this.handleText}></textarea>
						</div>
					</div>
					<button className="submit">Submit</button>
				</form>
			</div>
		);
	};
}

export default Contact;