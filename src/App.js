
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			searchText: 'Busqueda',
			firstName: '',
			lastName: '',
			phone: '',
		};

	}

	handleSearchTextChange = (event) => {
		this.setState({
			searchText: event.target.value
		});
	}

	handleFirstNameChange = (event) => {
		this.setState({
			firstName: event.target.value
		});
	}

	handleLastNameChange = (event) => {
		this.setState({
			lastName: event.target.value
		});
	}

	handlePhoneChange = (event) => {
		this.setState({
			phone: event.target.value
		});
	}

	render() {
    return (
      <div>
        <Header title="Address Book" />
        <div className="row">
        	<div className="col-md-6">
        		<SearchBox 
        			value={this.state.searchText}
        			onChange={this.handleSearchTextChange} 
        		/>
        	</div>
        	<div className="col-md-6">
        	<h1>Nuevo Contacto</h1>
        	<ContactForm
        		firstName={this.state.firstName}
        		lastName={this.state.lastName}
        		phone={this.state.phone}
        		handleFirstNameChange={this.handleFirstNameChange}
        		handleLastNameChange={this.handleLastNameChange}
        		handlePhoneChange={this.handlePhoneChange}
        	/>
        	</div>
        </div>
        <Footer copyright="Copyright 2017 - PUCE" />
      </div>
      );
  }
}

export default App;