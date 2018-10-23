import React, {Component} from 'react';
import EmployeeProfileCard from './EmployeeProfileCard';
import '../style/css/EmployeeProfileList.css';

class EmployeeProfileList extends Component{
    constructor(props) {
        super(props);
        this.state = {        
        }
    }

    onClickHi = () =>{
        console.log("hi")
    }
    
    
    render(){

        const {switchViewProfile} = this.props;

        let userList = [
            {first_name: "John", last_name: "Doe"}, 
            {first_name: "Jane", last_name: "Doe"},
            {first_name: "Billy", last_name: "Jean"},
            {first_name: "Kate", last_name: "Ray"},
            {first_name: "R2", last_name: "D2"}, 
            {first_name: "Buzz", last_name: "Lightyear"},
            {first_name: "Card", last_name: "Well"},
            {first_name: "Ravi", last_name: "Kumar"},
        ]

        
        const employeeComponent = userList.map((user, i)=>{
            return(
                <div>
                    <div onClick={()=> {switchViewProfile()}}>
                        <EmployeeProfileCard first_name={user.first_name} last_name={user.last_name}/>
                    </div>  
                </div>
            )
        }) 

        return(
            <div id={"pageContainer"}>
                

                <div id={"employeeListContainer"}>
                    {employeeComponent}
                </div>
            </div>
        )
    }
}

export default EmployeeProfileList;