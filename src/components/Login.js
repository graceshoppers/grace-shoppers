import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../redux-store/actions/user-actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const {handleSubmit} = this;

    return (
      <div
        className="card container"
        style={{marginTop: '2em', paddingTop: '1em'}}
      >
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" className="form-control" />
          </div>

          {/* Password input */}
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mb-3"
            />

            {/* Submit button */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: loginCredentials => dispatch(loginUser(loginCredentials)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
