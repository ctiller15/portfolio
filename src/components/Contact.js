import React from 'react';

function contactMe() {
	$.ajax({
	    url: '/contactus',
	    dataType: 'json',
	    cache: false,
	    method: 'POST',
	    success: function(data) {
	        console.log("success!");
	    }.bind(this),
	    error: function(xhr, status, err) {
	    	console.log("Error!");
	        console.error(status, err.toString());
	    }.bind(this)
	});
}

class Contact extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="contact">
				<form>
					<input type="name" name="contact_name"/>
					<input type="text" name="contact_email"/>
					<input type="textArea" name="contact_form"/>
					<button onClick={contactMe()}>Submit</button>
				</form>
			</div>
		);
	};
}

export default Contact;