import React, { Component } from 'react';
import DonutGraph from '../components/DonutGraph';
import '../style/css/Metrics.css';

// Class to tell that the animation is in the field of view. 
var VisibilitySensor = require('react-visibility-sensor');


class Metrics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // TODO: Set the state with actual percentage value from DB
            utilizationPercent: 73,
            preproductionPercent: 11,
            trainingPercent: 9,
            benchPercent: 7,
            visibility: true
        }
        this.myChange = this.myChange.bind(this);
    }

    myChange(isVisible) {
        //console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        if (isVisible) {
            this.setState({ visibility: true });
        } else {
            this.setState({ visibility: false });
        }
    };

    render() {
        return (
            <div>
                <VisibilitySensor onChange={this.myChange} />
                <div className={(this.state.visibility) ? "slide-in" : "slide-out"}>
                <h2 className="left"> Indianapolis Technology </h2>
                <h2 className="left"> and Innovation Hub </h2>
                <h2 className="left"> Metrics </h2>
                    <div className="donutgraph">
                        <DonutGraph percent={this.state.utilizationPercent} label={"Utilization"} />
                        <DonutGraph percent={this.state.preproductionPercent} label={"Preproduction"} />
                        <DonutGraph percent={this.state.trainingPercent} label={"Training"} />
                        <DonutGraph percent={this.state.benchPercent} label={"Bench"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Metrics;