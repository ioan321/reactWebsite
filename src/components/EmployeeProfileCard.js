import React, {Component} from 'react';
import '../style/css/EmployeeProfileCard.css';
import * as profile_pic from '../assets/default-avatar.png';

class EmployeeProfileCard extends Component{
    constructor(props) {
        super(props);
        this.state = {        
        }
    }

    render(){
        const {first_name, last_name} = this.props;
        return(
            <div className={"card"}>
                <img alt={"profile_pic"} src={profile_pic} />
                <div className={"names"}>
                    <label>First Name:</label> {first_name}
                </div>
                <div className={"names"}>
                    <label>Last Name:</label> {last_name}
                </div>

            </div>
        )
    }
}

export default EmployeeProfileCard;