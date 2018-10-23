import React, { Component } from 'react';
import '../style/css/App.css';
import Footer from '../components/Footer';
import LandingPage from '../components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <LandingPage/>
        </div>
        {/* Footer - will be added with other pages */}
        {/* <div className="App-footer">
          <Footer />
        </div> */}
      </div>
    );
  }
}

export default App;
