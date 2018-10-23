import React, {Component} from 'react';
import "../style/css/anchorNav.css";

class AnchorNav extends Component{
  render(){
    return (
    <div id= "AnchorNav">
      <ul className="pager">
        <li><a href="#metrics"></a></li>
        <li><a href="#whoWeAre"></a></li>
        <li><a href="#whatWeDo"></a></li>
        <li><a href="#clients"></a></li>
      </ul>
    </div>
    );
  }
}
export default AnchorNav;