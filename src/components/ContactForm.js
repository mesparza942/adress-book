import React from 'react';

const ContactForm = (props) => (
	<div>
		<input 
			type="text" 
			value={props.firstName}
			onChange={props.handleFirstNameChange}
		/>
		<input 
			type="text" 
			value={props.lastName}
			onChange={props.handleLastNameChange}
		/>
		<input 
			type="text" 
			value={props.phone}
			onChange={props.handlePhoneChange}
		/>
	</div>
	);

export default ContactForm;