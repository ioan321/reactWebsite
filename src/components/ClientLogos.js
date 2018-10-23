import React, {Component} from 'react';
import '../style/css/ClientLogos.css';

// IMPORT ALL OF THE CLIENT LOGO'S.
// This is NOT DONE DYNAMICALLY! Should more clients
// be added, create a dynamic function.
import Allison from '../assets/Allison.png';
import Aps from '../assets/aps.png';
import Boeing from '../assets/Boeing.png';
import Cat from '../assets/Cat.png';
import Charter from '../assets/Charter.png';
import Cummins from '../assets/Cummins.png';
import Exelon from '../assets/Exelon.png';
import HHSC from '../assets/HHSC.png';
import JohnDeere from '../assets/JohnDeere.png';
import JohnsonControls from '../assets/JohnsonControls.png';
import LamResearch from '../assets/LamResearch.png';
import Lilly from '../assets/Lilly.png';
import Microsoft from '../assets/Microsoft.png';
import NeimanMarcus from '../assets/NeimanMarcus.png';
import NorthwesternMutual from '../assets/NorthwesternMutual.png';
import PandG from '../assets/P&G.png';
import PWC from '../assets/pwc.png';
import Reynolds from '../assets/Reynolds.png';
import ThyssenKrupp from '../assets/ThyssenKrupp.png';
import TractorSupplyCo from '../assets/TractorSupplyCo.png';
import Tribune from '../assets/Tribune.png';
import Versum from '../assets/Versum.png';
import Volvo from '../assets/Volvo.png';
import WilliamsSonoma from '../assets/WilliamsSonoma.png'

class ClientLogos extends Component{

    constructor(props){
        super(); 
  
        //Set the classnames dynamically so that you can update the selected div 
        this.state = { classnames : [] }; 
        for(var i =0; i<24; i++) {
            this.state.classnames.push("client"); 
        }

        this.selectClient = this.selectClient.bind(this); 
    }

    // TODO: Add alt="" For an alternate to get rid of console warnings.
    // Working on styling still. Need to resize images while maintaining aspect ratio.
    selectClient(index, name) 
    {
        //Unselected the last 
        if(this.state.selectedIndex != undefined) {
            this.state.classnames[this.state.selectedIndex] = "client"; 
        }
        this.setState({selectedIndex: index}); 
        this.state.classnames[index] = "client selected-client"; 
        //call callback to propagate named value back to parent
        this.props.change(name); 
    }    
    
    render(){
        return(
            <div className="logobox">
                <div className={this.state.classnames[0]}  onClick={() => this.selectClient(0, "Allison")}><img src={Allison}/></div>
                <div className={this.state.classnames[1]} onClick={() => this.selectClient(1, "Aps")}><img src={Aps}/></div>
                <div className={this.state.classnames[2]} onClick={() => this.selectClient(2, "Boeing")}><img src={Boeing}/></div>
                <div className={this.state.classnames[3]} onClick={() => this.selectClient(3, "Cat")}><img src={Cat}/></div>
                <div className={this.state.classnames[4]} onClick={() => this.selectClient(4, "Charter")}><img src={Charter}/></div>
                <div className={this.state.classnames[5]} onClick={() => this.selectClient(5, "Cummins")}><img src={Cummins}/></div>
                <div className={this.state.classnames[6]} onClick={() => this.selectClient(6, "Exelon")}><img src={Exelon}/></div>
                <div className={this.state.classnames[7]} onClick={() => this.selectClient(7, "HHSC")}><img src={HHSC}/></div>
                <div className={this.state.classnames[8]} onClick={() => this.selectClient(8, "JohnDeere")}><img src={JohnDeere}/></div>
                <div className={this.state.classnames[9]} onClick={() => this.selectClient(9, "JohnsonControls")}><img src={JohnsonControls}/></div>
                <div className={this.state.classnames[10]} onClick={() => this.selectClient(10, "LamResearch")}><img src={LamResearch}/></div>
                <div className={this.state.classnames[11]} onClick={() => this.selectClient(11, "Lilly")}><img src={Lilly}/></div>
                <div className={this.state.classnames[12]} onClick={() => this.selectClient(12, "Microsoft")}><img src={Microsoft}/></div>
                <div className={this.state.classnames[13]} onClick={() => this.selectClient(13, "NeimanMarcus")}><img src={NeimanMarcus}/></div>
                <div className={this.state.classnames[14]} onClick={() => this.selectClient(14, "NorthwesternMutual")}><img src={NorthwesternMutual}/></div>
                <div className={this.state.classnames[15]} onClick={() => this.selectClient(15, "PandG")}><img src={PandG}/></div>
                <div className={this.state.classnames[16]} onClick={() => this.selectClient(16, "PWC")}><img src={PWC}/></div>
                <div className={this.state.classnames[17]} onClick={() => this.selectClient(17, "Reynolds")}><img src={Reynolds}/></div>
                <div className={this.state.classnames[18]} onClick={() => this.selectClient(18, "ThyssenKrupp")}><img src={ThyssenKrupp}/></div>
                <div className={this.state.classnames[19]} onClick={() => this.selectClient(19, "TractorSupplyCo")}><img src={TractorSupplyCo}/></div>
                <div className={this.state.classnames[20]} onClick={() => this.selectClient(20, "Tribune")}><img src={Tribune}/></div>
                <div className={this.state.classnames[21]} onClick={() => this.selectClient(21, "Versum")}><img src={Versum}/></div>
                <div className={this.state.classnames[22]} onClick={() => this.selectClient(22, "Volvo")}><img src={Volvo}/></div>
                <div className={this.state.classnames[23]} onClick={() => this.selectClient(23, "WilliamsSonoma")}><img src={WilliamsSonoma}/></div>
            </div>
        );
    }   
}

export default ClientLogos;