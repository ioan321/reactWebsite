import React, {Component} from 'react';

class ProfileDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){

        const {property, details} = this.props;


        return(
            <div>
                
                <div>
                    {property}: {details} 
                </div>
            </div>
        )
    }
}

export default ProfileDetails;