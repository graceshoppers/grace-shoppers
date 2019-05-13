import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../redux-store/actions/auth-actions';
import TextInputGroup from '../_common/TextInputGroup';

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
      .then(() => this.props.history.push('/catalog'))
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
      <div className="container" style={{width: '40vw'}}>
        <h3>Login</h3>
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

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.props.history.push('/signup')}
        >
          Sign Up
        </button>
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
