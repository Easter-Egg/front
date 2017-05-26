import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Textfield } from 'react-mdl';
import { auth } from './actions/auth.js'
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoading: false,
      error: '',
      currentUser: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  static propTypes = {
    currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ error: '' });

    let { dispatch } = this.props;

    let email = this.email.inputRef.value;
    let password = this.password.inputRef.value;

    console.log(this.props.currentUser)

    dispatch(auth(email, password))
    .then((data) => {
      console.log(this.props.currentUser)
    })
    .catch((e) => {console.error(e)});
  }

  render() {
    return (
      <div className="sg-container">
        <div className="sg-wrapper">
          <div className="sg-header">
            <h2 className="sg-title">Title here</h2>
          </div>

          <p style={{marginBottom: "0"}}></p>

          <div className="sg-contents">
            <div className="sg-inner">
              <h4 style={{fontWeight: "800"}}>로그인</h4>

              <Textfield
                ref={(val) => {this.email = val}}
                type="email"
                label="이메일"
                floatingLabel
                style={{width: "100%"}}
              />

              <Textfield
                ref={(val) => {this.password = val}}
                type="password"
                label="비밀번호"
                floatingLabel
                style={{width: "100%"}}
              />

              <a href="#" style={{textAlign: 'center', color: "#3f51b5"}}>비밀번호 찾기</a>
              <Button onClick={this.handleLogin} style={{marginTop: "20px", height: "48px", fontSize: "18px", fontWeight: "800"}} colored raised ripple>로그인</Button>
              <Button ripple style={{marginTop: "10px", marginBottom: "10px", height: "36px", fontSize: "18px", fontWeight: "800"}}>회원가입</Button>
            </div>
          </div>

          <div className="sg-footer">
            <p>Logo here</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(Login);