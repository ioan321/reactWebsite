import React, { Component } from 'react';
import '../style/css/LandingPage.css';
import Metrics from './Metrics';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import Clients from './Clients';
import Feature from './Feature';
import { ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';

import Pic1 from '../assets/1.png'; 
import Pic2 from '../assets/2.png';
import Pic3 from '../assets/3.png';

import Infosys from '../assets/indy-infy logo.png';


class LandingPage extends Component {

    render() {

        let options = {
            className: 'sections-container',
            sectionClassName: 'section',
            anchors: ['metrics', '1', 'whoWeAre', '2', 'clients', '3', 'whatWeDo'],
            scrollBar: false,
            verticalAlign: false,
            delay: 1000, // the scroll animation speed
            navigation: false, // use dots navigatio
            sectionPaddingTop: '0px',
            sectionPaddingBottom: '0px',
            arrowNavigation: true
        };

        return (
            <main className="main_stuff">
                <div className="navi">
                    <a href={'#metrics'}><img src={Infosys}/></a>
                    <a href={`#metrics`} className="active" ><span> Metrics </span></a>
                    <a href={`#1`}><span> 1 </span></a>
                    <a href={`#whoWeAre`}><span> Who we are </span></a>
                    <a href={`#2`}><span> 2 </span></a>
                    <a href={`#clients`} ><span> Clients </span></a>
                    <a href={`#3`}><span> 3 </span></a>
                    <a href={`#whatWeDo`}><span> What we do </span></a>
                </div>
                <ScrollToTopOnMount />
                <SectionsContainer className="sections-container" {...options}>
                    <section className="metrics" id="metrics">
                        <img id="home" src={require('../assets/test.png')} />
                        <div className="right data">
                            <Metrics />
                        </div>
                    </section>
                    <section className="1">
                        <Feature picture={Pic3}/>
                    </section>
                    <section className="whoWeAre">
                        <div>
                            <WhoWeAre />
                        </div>
                    </section>
                    <section className="2">
                        <Feature picture={Pic2} reverse={true}/>
                    </section>
                    <section className="clients">
                        <div>
                            <Clients />
                        </div>
                    </section>
                    <section className="3">
                        <Feature picture={Pic1} reverse={true}/>
                    </section>
                    <section className="whatWeDo">
                        <div>
                            <WhatWeDo />
                        </div>
                    </section>
                </SectionsContainer>
            </main>
        );
    }
}

export default LandingPage;