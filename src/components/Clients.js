import React, {Component} from 'react';
import ClientLogos from '../components/ClientLogos';
import ClientDescription from './ClientDescription';
import '../style/css/Clients.css';


class Clients extends Component{

	constructor(props){
		super(); 
		this.state = {}; 
		// this.state = {file: "No Client Selected"}; 
		this.change = this.change.bind(this); 
	}

	change(info){
		this.setState({file: info}); 
	}

	// ClientLogos component INCOMPLETE.
	render() {
		return(
			<div className="client-containter">
				<h2> Our Current Clients </h2>
				<div className="client-content"> 
					<div className="logobox-container"> 
						<ClientLogos change={this.change}/>
					</div> 
					<div className="client-description-container"> 
						{(this.state.file != undefined) && <ClientDescription file={this.state.file}/> }
					</div> 
				</div> 
			</div>
		)
	}
}

export default Clients;