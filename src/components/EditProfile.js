import React, {Component} from 'react';
import * as default_avatar from '../assets/default-avatar.png';
import '../style/css/EditProfile.css';

class EditProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(

            <div>
                <h1> Update Employee Details </h1>
                
                <div id={"profileContainer"}>
                    
                    <div id={"profilePictureContainer"}>
                            
                        <img id={"profilePicture"} className="" alt="404 Phot not found." 
                            src={default_avatar}
                            />

                        <div id={"profilePictureInput"} className="">
                            <input type="file" name="pic" accept="image/*" onChange={this.setImageURL}/>
                        </div>
                    </div>

                    <div id={"detailsContainer"}>
                        <div className={"inputDiv"}>
                            <label>Employee ID:</label> <input type={"text"} className={"input"} name={"ID"}/>
                        </div>
                        <div className={"inputDiv"}>
                            <label>First Name:</label>  <input type={"text"} className={"input"} name={"fName"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Last Name:</label>   <input type={"text"} className={"input"} name={"lName"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Nickname: </label>   <input type={"text"} className={"input"} name={"nName"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Training Batch:</label>  <input type={"text"} className={"input"} name={"batch"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Technology Trained In:</label>   <input type={"text"} className={"input"} name={"techTrained"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Technology Interested In:</label>    <input type={"text"} className={"input"} name={"techInterested"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Hobbies:</label> <input type={"text"} className={"input"} name={"hobbies"}/>
                            </div>
                        <div className={"inputDiv"}>
                            <label>Joining Date:</label>    <input type={"date"} className={"input"} name={"joiningDate"}/>
                        </div>
                    </div>
            </div>
                <input className={"button"} type={"submit"} value="Update"/>
            </div>
        )
    }
}

export default EditProfile;