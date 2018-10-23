import React, {Component} from 'react';
import ProfileDetails from './ProfileDetails';
import * as profilePic from '../assets/default-avatar.png';
import '../style/css/Profile.css';

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        const details = [
            {first_name: "John"},
            {last_name: "Doe"},
            {nick_name: ""},
            {train_batch: "Milwaukee, Oct 2017"},
            {tech_trained: "SAP"},
            {tech_interested: "ReactJS"},
            {hobbies: ""},
            {joining_date: "10/9/2017"}]

       

        
        
        //Remove the objects with no values
        for (let i = 0; i <details.length; i++){
            let value = details[i][Object.keys(details[i])[0]];
            if(!value || value === null || value === ""){             
                details.splice(i, 1);
                i--;
            }
        }

        const detailsComponent = details.map( (element) => {
            return(
                <div className={"detailsObjects"}>
                    <ProfileDetails property={Object.keys(element)[0]} details={element[Object.keys(element)[0]]}/>
                </div>
            )
        })

        return(

            <div id={"profileContainer"}>
                <div id={"profilePic"}>
                    <img src={profilePic} alt={"Profile Picture"} />
                </div>
                
                <div id={"detailsContainer"}>
                    {detailsComponent}
                </div>
            </div>
        )
    }
}

export default Profile;