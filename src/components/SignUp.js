import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../redux-store/actions/user-actions';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const fields = [
      'firstName',
      'lastName',
      'email',
      'password',
      'confirmPassword',
    ];
    const signupCredentials = fields.reduce((acc, field) => {
      if (event.target[field]) acc[field] = event.target[field].value;
      return acc;
    }, {});

    this.props.addUser(signupCredentials).catch(err =>
      this.setState({
        errors: err.response.data.errors,
      })
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="card container" style={{marginTop: '2em'}}>
        <h2>Sign Up</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
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
  addUser: signupCredentials => dispatch(addUser(signupCredentials)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
