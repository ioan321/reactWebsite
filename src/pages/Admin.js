import React, {Component} from 'react';
import  '../style/css/Admin.css';
import Login from '../components/Login.js';
import Data from '../components/Data.js';
import EditProfile from '../components/EditProfile.js';
import CaseStudy from '../components/CaseStudy.js';

class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <Login/>

                <Data/>

                <EditProfile/>

                <CaseStudy/>
            </div>
        )
    }
}

export default Admin;