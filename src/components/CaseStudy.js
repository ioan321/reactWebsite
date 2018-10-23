import React, {Component} from 'react';
import '../style/css/CaseStudy.css';

class CaseStudy extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <div>
                <h1>Case Studies</h1>
                <div>
                    <input className="button" type="submit" value="Add new Case Study"/>
                    <input className="button" type="submit" value="Edit Case Study"/>
                </div>

                <h1>Edit Case Study</h1>
                <div id={"caseStudyContainer"}>
                    <div id={"clientContainer"}>
                        <div className={"caseStudyInputDiv"}>
                            <label>Client Name:</label> <input type={"text"} className={"caseStudyInput"} name={"clientName"}/>
                        </div>

                        <div className={"caseStudyInputDiv"}>
                            <label>Project Name:</label>  <input type={"text"} className={"caseStudyInput"} name={"projectName"}/>
                        </div>

                        <div className={"caseStudyInputDiv"}>
                            <label>Project Details: </label>  
                            <textarea id="projectDetailsTextArea" cols="40" rows="5"></textarea>
                        </div>

                    </div>
                </div>
                <input className="button" type="submit" value="Submit"/>
            </div>
        )
    }
}

export default CaseStudy;