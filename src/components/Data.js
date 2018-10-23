import React, {Component} from 'react';
import '../style/css/Data.css';

class Data extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div id={"container"}>
                <h1> Edit Data </h1>
                <div id={'inputContainer'}>
                    <div className={"inputDiv"}>
                        <label id={"utilizationLabel"}>Utilization Percentage: </label> <input type={"text"} className={"input"} name={"utilization"}/>
                    </div>
                    <div className={"inputDiv"}>
                        <label id={"preproductionLabel"}>Preproduction Percentage: </label> <input type={"text"} className={"input"} name={"preproduction"}/>
                    </div>
                    <div className={"inputDiv"}>
                        <label id={"trainingLabel"}>Training Percentage: </label> <input type={"text"} className={"input"} name={"training"}/>
                    </div>
                    <div className={"inputDiv"}>
                        <label id={"benchLabel"}> Bench Percentage: </label> <input type={"text"} className={"input"} name={"bench"}/>
                    </div>
                </div>
                <div className="">
                                <input 
                                
                                    className="button" 
                                    type="submit" 
                                    value="Submit"
                                    
                                />
                            </div>
            </div>
        )
    }
}

export default Data;