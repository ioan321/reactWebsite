import React, { Component } from 'react';
import '../style/css/TextBox.css';


class TextBox extends Component {  
  constructor(props){
    super(props);
    
  }
    render() {
    return (
      // <div className="tc br2 shadow-1 pa4 ma3 dib bg-white-90" >
      <div className="textbox">
        <h1 > {this.props.title} </h1>
        <div className="content">
            {this.props.content}
        </div>
      </div>
    );
  }
}

export default TextBox;