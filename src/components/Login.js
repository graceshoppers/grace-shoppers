import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../redux-store/actions/user-actions';

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.authenticateUser({email: email.value, password: password.value});
  };

  //   componentDidMount() {
  //     this.props.history.push('/account');
  //   }

  render() {
    const {handleSubmit} = this;

    return (
      <div style={{height: '100vh', backgroundColor: 'blue'}}>
        <div className="card container">
          <div>
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="email@gmail.com"
                />
              </div>

              {/* Password input */}
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control mb-3"
                  placeholder="maryh4dAL1ttl3L4M.B"
                />

                {/* Submit button */}
                <button type="submit" className="btn btn-warning">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  authenticateUser: loginCredentials =>
    dispatch(authenticateUser(loginCredentials)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
