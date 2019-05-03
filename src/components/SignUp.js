import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../redux-store/actions/user-actions';

class SignUp extends Component {
  render() {
    const {handleSubmit, addUser} = this.props;
    return (
      <div className="card container" style={{marginTop: '2em'}}>
        <h2>Sign Up</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          {/* Input for first name*/}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" className="form-control" />
          </div>

          {/* Input for last name */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" className="form-control" />
          </div>

          {/* Input for email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>

          {/* Input for password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control mb-3"
            />
          </div>

          {/* Input for confirm password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control mb-3"
            />
          </div>

          {/* Submit button */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),

  handleSubmit: event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = event.target;

    console.log(firstName);
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
