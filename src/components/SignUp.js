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

    this.props
      .addUser(signupCredentials)
      .then(() => this.props.history.push('/'))
      .catch(err => {
        console.log(err);
        this.setState({
          errors: err.response.data.errors,
        });
      });
  };

  render() {
    const {errors} = this.state;

    return (
      <div className="card container" style={{marginTop: '2em'}}>
        <h2>Sign Up</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
          {/* Input for first name*/}
          <div className="form-group">
            <label
              htmlFor="firstName"
              className={`${errors.firstName ? 'text-danger' : ''}`}
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
            />
            {errors.firstName && renderErrors(errors.firstName)}
          </div>

          {/* Input for last name */}
          <div className="form-group">
            <label
              htmlFor="lastName"
              className={`${errors.firstName ? 'text-danger' : ''}`}
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
            />
            {errors.lastName && renderErrors(errors.lastName)}
          </div>

          {/* Input for email */}
          <div className="form-group">
            <label
              htmlFor="email"
              className={`${errors.firstName ? 'text-danger' : ''}`}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
            />
            {errors.email && renderErrors(errors.email)}
          </div>

          {/* Input for password */}
          <div className="form-group">
            <label
              htmlFor="password"
              className={`${errors.firstName ? 'text-danger' : ''}`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
            />
            {errors.password && renderErrors(errors.password)}
          </div>

          {/* Input for confirm password */}
          <div className="form-group">
            <label
              htmlFor="confirmPassword"
              className={`${errors.firstName ? 'text-danger' : ''}`}
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className={`form-control${errors.firstName ? ' is-invalid' : ''}`}
            />
            {errors.confirmPassword && renderErrors(errors.confirmPassword)}
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

const renderErrors = errorArray =>
  errorArray.map((err, i) => (
    <div key={i} className="help-block text-danger">
      ∙ {err}
    </div>
  ));

const mapDispatchToProps = dispatch => ({
  addUser: signupCredentials => dispatch(addUser(signupCredentials)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
