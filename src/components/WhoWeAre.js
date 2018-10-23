import React, { Component } from 'react';
import TextBox from './TextBox';
import * as url from '../assets/front_desk.jpg';
import '../style/css/WhoWeAre.css';

/* Images that are used in the below component */
import StateRep from '../assets/StateRep.png';
import UniversityPic from '../assets/UniversityPic.png';
import IndianaState from '../assets/IndianaState.png';
import People from '../assets/people.png';

class WhoWeAre extends Component {


  render() {

    return (
      <div>
        <h2>Who We Are</h2>

        <div className="who-container">

          <img src={People} />

          {/* This part contains information on freshers and laterals */}
          <div className="infobox1">
            <div>
              <h3>
                <span className="fresherpercent">62% </span> Campus Hires {/* as defined by new college recruits*/}
              </h3>
            </div>
            <div>
              <h3>
                <span className="lateralpercent">38% </span> Experienced Hires {/* as defined by experience hires*/}
              </h3>
            </div>
          </div>

          {/* This part contains the left side holding the US Representation info */}
          <div className="infobox2">
            <div>
              <img src={IndianaState} />
              <h5><span className="percentage">33%+ </span> Native Hoosiers</h5>
            </div>
            <div>
              <img src={StateRep} />
              <h5><span className="percentage">24+ </span>Home States</h5>
            </div>
            <div>
              <img src={UniversityPic} />
              <h5><span className="percentage">85+ </span>Universities and Colleges</h5>
            </div>
          </div>

          {/* For the month of June, we have successfully onboarded 95 and July onboarded 87 Infoscions in Indy.
        Current attrition rate for associates is under 4%. */}

        </div>

      </div>
    );
  }
}

export default WhoWeAre;
