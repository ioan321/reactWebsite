import React, {Component} from 'react';
import ClientLogos from '../components/ClientLogos';
import ClientDescription from '../components/ClientDescription';

class Clients extends Component{

	// TODO: Currently, this is only rendering in the client logo portion of the screen.
	// Need to make another Component that renders the details.
	// ClientLogos component also INCOMPLETE.
	render(){
		return(
			<div>
				<h2> Our Current Clients Page </h2>
				<ClientLogos/>
				<ClientDescription/> 
			</div>
		)
	}
}

export default Clients;