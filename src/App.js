import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'react-mdl'

class App extends Component {
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <div style={{height: '100vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{width: '400px', height: '400px', backgroundColor:'white', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p><Link to="/login">Login</Link></p>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
