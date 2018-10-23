import React, {Component} from 'react';
import * as plantWall from '../assets/infosys_plant_wall.JPG'; 
import '../style/css/Login.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div id="pageContainer">
                <img alt="Infosys: Navigate Your Next" 
                    // className="vh-75 w-auto br3 ba b--black-10 mv4 shadow-5"
                    id="plantWall"
                    height="200px" 
                    width="auto" 
                    src= {plantWall}>
                </img> 
                    <article id="loginContainer">
                    <main id="loginPadding">
                            <fieldset id="loginBox" className="">
                                <legend id="loginTitle"className="">Admin Login</legend>
                                <div id="username" className="">
                                    <label id="usernameLabel" className="">Username</label>
                                    <input 
                                        className="textInput"  
                                        id="usernameInput"
                                    />
                                </div>
                                <div id="password">
                                    <label id="passwordLabel" className="" htmlFor="password">Password</label>
                                    <input 
                                        className="textInput" 
                                        type="password"  
                                        id="passwordInput"
                                    />
                                </div>
                                
                            </fieldset>

                            <div className="">
                                <input 
                                    className="button" 
                                    type="submit" 
                                    value="Sign in"
                                />
                            </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Login;