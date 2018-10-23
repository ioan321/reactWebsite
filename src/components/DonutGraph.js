import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../style/css/DonutGraph.css';

class DonutGraph extends Component {
    // Percentage will be grabbed from this.props.percentage.
    render()
    {
        var label = this.props.label.toLowerCase(); 

        return(
            <div className="box" >
                {/* <VisibilitySensor onChange={this.myChange} /> */}
                <CircularProgressbar 
                    className={label}
                    initialAnimation={true}
                    percentage={this.props.percent} 
                    text={`${this.props.percent}%`}
                    strokeWidth={10}
                    styles={{
                        path: {
                          strokeLinecap: 'butt',
                          transition: 'stroke-dashoffset 2s ease-out 5s'
                        }
                      }}
                    />
                <div className="label">{this.props.label}</div>
            </div>
        );
    }
}

export default DonutGraph;