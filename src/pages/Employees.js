import React, {Component} from 'react';
import EmployeeProfileList from '../components/EmployeeProfileList';
import Profile from '../components/Profile';
import '../style/css/Employees.css';


class Employees extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewProfile : false
        }
    }

    switchViewProfile = () => {
        this.setState( {
            viewProfile: !this.state.viewProfile
        })
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Meet Our Employees</h1>
                    {this.state.viewProfile ?(
                    <div>
                        <input type={"button"} onClick={()=>{this.switchViewProfile()}} value={"Back"}/> 
                    </div>
                    ):(
                        <div>&nbsp;</div>
                    )
                }
                </header>
                
                
                <body>
                {this.state.viewProfile ?(
                    <div>
                        <Profile/>
                    </div>
                ):(
                    <EmployeeProfileList switchViewProfile={this.switchViewProfile}/> 
                )
                }
                </body>
            </div>
        )
    }
}

export default Employees;