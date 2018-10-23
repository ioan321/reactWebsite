import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import '../style/css/WhatWeDo.css';

// Class to tell that the animation is in the field of view. 
var VisibilitySensor = require('react-visibility-sensor');


class WhatWeDo extends Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            openDNA:  true,
            openDX:   true,
            openCIS:  true,
            openSAP:  true,
            openENG:  true,
            openEAIS: true,
            openIPS: true,
            openHIL: true,
            openMFG: true,
            openORC: true,
            openIVS: true,
            openAll: true
        };
        this.myChange = this.myChange.bind(this); 
        this.setAllTrue = this.setAllTrue.bind(this); 
    }

    handleClick = (service) => {
        switch(service) {
            case 'dna':
                this.setState({ openDNA: !this.state.openDNA })
                break;
            case 'dx':
                this.setState({ openDX: !this.state.openDX })
                break;
            case 'cis':
                this.setState({ openCIS: !this.state.openCIS})
                break;
            case 'sap':
                this.setState({ openSAP: !this.state.openSAP})
                break;
            case 'eng':
                this.setState({ openENG: !this.state.openENG})
                break;
            case 'eais':
                this.setState({ openEAIS: !this.state.openEAIS})
                break;
            case 'ips':
                this.setState({ openIPS: !this.state.openIPS})
                break;
            case 'hil':
                this.setState({ openHIL: !this.state.openHIL})
                break;
            case 'mfg':
                this.setState({ openMFG: !this.state.openMFG})
                break;
            case 'orc':
                this.setState({ openORC: !this.state.openORC})
                break;
            case 'ivs':
                this.setState({ openIVS: !this.state.openIVS})
                break;
            default:
                break;
        }
    }

    myChange(isVisible) {
        setTimeout(
            function() {
                if(isVisible) {
                    this.setState({ openAll: true })
                } 
            }
            .bind(this),
            500 //this is the delay in milliseconds
        );
        if(!isVisible)
        {
            this.setState({ openAll: false })
            this.setAllTrue(); 
        }   
    };

    setAllTrue(){
        this.setState({
            openDNA: true,
            openDX:  true,
            openCIS: true,
            openSAP: true,
            openENG: true,
            openEAIS: true,
            openIPS: true,
            openHIL: true,
            openMFG: true,
            openORC: true,
            openIVS: true
        });
    }

    
    render(){

        let springConfigOptions = {
            stiffness: 70,
            damping: 20
        }

        return(
            <div className="alignment"> {/* Container holding the section */}
                <VisibilitySensor onChange={this.myChange} />
                <h2>Clients by Service Line</h2>
                <div className="row1"> {/* First row of the service lines - */}
                    <div className="serviceline"> { /* Group of the button w/ the client names underneath */ }
                        <button className="button1" onClick={() => this.handleClick('dna')}>DNA</button> {/* Service Line Button */}
                        <Collapse isOpened={this.state.openDNA && this.state.openAll } springConfig={springConfigOptions}> 
                            <div className="clients">
                                <div>John Deere</div>
                                <div>Johnson Controls</div>
                                <div>Caterpillar</div>
                                <div>Harley Davidson</div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button2" onClick={() => this.handleClick('dx')}>DX</button>
                        <Collapse isOpened={this.state.openDNA && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Microsoft</div>
                            <div>Northwestern Mutual</div>
                            <div>Arizona Public Services</div>
                            <div>Nieman Marcus</div>
                            <div>Exelon</div>
                            <div>Tractor Supplies</div>
                            <div>Nissan</div>
                            <div>PWC</div>
                            <div>CareFirst</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button3" onClick={() => this.handleClick('cis')}>CIS</button>
                        <Collapse isOpened={this.state.openCIS && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Allison Transmission </div>
                            <div>Eli Lilly</div>
                            <div>PWC</div>
                            <div>P&amp;G</div>
                            <div>Thyssenkrupp</div>
                            <div>MassMutual</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button4" onClick={() => this.handleClick('sap')}>SAP</button>
                        <Collapse isOpened={this.state.openSAP && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Eli Lilly</div>
                            <div>Johnson Controls</div>
                            <div>RCP</div>
                            <div>P&amp;G</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button5" onClick={() => this.handleClick('eng')}>ENG</button>
                        <Collapse isOpened={this.state.openENG && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Eli Lilly</div>
                            <div>GE</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button6" onClick={() => this.handleClick('eais')}>EAIS</button>
                        <Collapse isOpened={this.state.openEAIS && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Caterpillar</div>
                            <div>Allison</div>
                        </Collapse>
                    </div>
                </div>
                <div className="row2">
                    <div className="serviceline">
                        <button className="button7" onClick={() => this.handleClick('ips')}>IPS</button>
                        <Collapse isOpened={this.state.openIPS && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Texas DFS</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button8" onClick={() => this.handleClick('hil')}>HIL</button>
                        <Collapse isOpened={this.state.openHIL && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Northwestern Mutual</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button9" onClick={() => this.handleClick('mfg')}>MFG</button>
                        <Collapse isOpened={this.state.openMFG && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Caterpillar</div>
                            <div>Cummins</div>
                            <div>John Deere</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button10" onClick={() => this.handleClick('orc')}>ORACLE</button>
                        <Collapse isOpened={this.state.openORC && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Cummins </div>
                            <div>Emerson </div>
                            <div>Exelon </div>
                            <div>Johnson Controls</div>
                            <div>Tribune</div>
                        </Collapse>
                    </div>
                    <div className="serviceline">
                        <button className="button11" onClick={() => this.handleClick('ivs')}>IVS</button>
                        <Collapse isOpened={this.state.openIVS && this.state.openAll} springConfig={springConfigOptions}>
                            <div>Charter</div>
                            <div>Texas DFS</div>
                        </Collapse>
                    </div>
                </div>

            </div>
        );
    }
}

export default WhatWeDo;