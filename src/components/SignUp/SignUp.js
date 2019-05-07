import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../redux-store/actions/user-actions';
import TextInputGroup from './TextInputGroup';

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
          <TextInputGroup
            inputName="firstName"
            labelDisplayText="First Name"
            errors={errors.firstName}
          />

          <TextInputGroup
            inputName="lastName"
            labelDisplayText="Last Name"
            errors={errors.lastName}
          />

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

          <TextInputGroup
            inputName="confirmPassword"
            inputType="password"
            labelDisplayText="Confirm Password"
            errors={errors.confirmPassword}
          />

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
