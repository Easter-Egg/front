import React, { Component } from 'react';
import { Button, Textfield } from 'react-mdl';
import './Login.css';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ error: '' });
    
  }

  render() {
    return (
      <div className="sg-container">
        <div className="sg-wrapper">
          <div className="sg-header">
            <h2 className="sg-title">Smart GYM</h2>
          </div>

          <div className="sg-contents">
            <div className="sg-inner">
              <h4 style={{fontWeight: "800"}}>로그인</h4>

              <Textfield
                onChange={() => {}}
                ref={(val) => {this.email = val}}
                type="email"
                label="이메일"
                floatingLabel
                style={{width: "100%"}}
              />

              <Textfield
                onChange={() => {}}
                ref={(val) => {this.password = val}}
                type="password"
                label="비밀번호"
                floatingLabel
                style={{width: "100%"}}
              />

              <a href="#" style={{textAlign: 'center', color: "#3f51b5"}}>비밀번호 찾기</a>
              <Button style={{marginTop: "20px", height: "48px", fontSize: "18px", fontWeight: "800"}} colored raised ripple>로그인</Button>
              <Button ripple style={{marginTop: "10px", marginBottom: "10px", height: "48px", fontSize: "18px", fontWeight: "800"}}>회원가입</Button>
            </div>
          </div>

          <div className="sg-footer">
            <p>healthrian</p>
          </div>
        </div>
      </div>
    );
  }
}
