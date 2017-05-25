import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'react-mdl'
import './App.css'

class App extends Component {
  render() {
    return (
      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <div className="sg-container">
          <div className="sg-contents">
            <p><Link to="/login">Login</Link></p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
