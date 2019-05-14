import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux-store/actions/auth-actions';
import TextInputGroup from '../_common/TextInputGroup';

import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const {email, password} = event.target;
    const loginCredentials = {email: email.value, password: password.value};

    this.props
      .loginUser(loginCredentials)
      .then(() => this.props.history.push('/userpage'))
      .catch(err => {
        this.setState({
          errors: err.response.data.errors,
        });
      });
  };

  render() {
    const {state, handleSubmit} = this;
    const {errors} = state;

    return (
      <div className="container" style={{width: '50vw'}}>
        <form onSubmit={handleSubmit}>
          <TextInputGroup
            inputName="email"
            inputType="email"
            labelDisplayText="Email"
            errors={errors.email}
          />

          <TextInputGroup
            inputName="password"
            inputType="password"
            labelDisplayText="Password"
            errors={errors.password}
          />
          <div className="d-flex ">
            <div className="form-group">
              <button type="submit" style={{color: '#50a0fc'}}>
                Login
              </button>
            </div>
            <div>
              <button
                type="submit"
                onClick={() => this.props.history.push('/signup')}
                style={{color: '#50a0fc'}}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = dispatch => ({
  loginUser: loginCredentials => dispatch(loginUser(loginCredentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
