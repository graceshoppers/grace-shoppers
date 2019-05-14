import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {editUser} from '../../redux-store/actions/user-actions';
import {updateUserDetails} from '../../redux-store/actions/auth-actions';

import './UserPage.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      addresses: [],
      password: '',
      confirmPassword: '',
    };
  }

  componentDidMount() {
    if (this.props.userDetails) {
      const {
        id,
        firstName,
        lastName,
        email,
        addresses,
      } = this.props.userDetails;
      this.setState({id, firstName, lastName, email, addresses});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userDetails !== this.props.userDetails) {
      const {
        id,
        firstName,
        lastName,
        email,
        addresses,
      } = this.props.userDetails;
      this.setState({id, firstName, lastName, email, addresses});
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const {history, editUser, updateUserDetails} = this.props;
    const {id, firstName, lastName, email, password} = this.state;

    const newProfile =
      password !== ''
        ? {id, firstName, lastName, email, password}
        : {id, firstName, lastName, email};
    editUser(newProfile);
    updateUserDetails(id);
    history.push('/userpage/profile');
  };

  handleChange = evt => {
    evt.preventDefault();
    this.setState({[evt.target.name]: evt.target.value});
  };

  handleCancel = evt => {
    evt.preventDefault();
    this.props.history.push('/userpage/profile');
  };

  render() {
    if (!Object.keys(this.props.userDetails).length) return <div />;

    const {
      firstName,
      lastName,
      email,
      addresses,
      password,
      confirmPassword,
    } = this.state;
    const {field} = this.props.match.params;
    const hiddenPassword = this.props.userDetails.password.replace(/./gi, '∙');

    return (
      <div>
        <h1>Account Information</h1>
        <hr />

        {/* Name field, confirm button is disabled if input name is the same as current name*/}
        {field === 'name' ? (
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-between">
              <div className="d-inline-block">
                First Name:{' '}
                <input
                  type="text"
                  name="firstName"
                  style={{marginRight: '20px'}}
                  onChange={this.handleChange}
                  value={`${firstName}`}
                />
                Last Name:{' '}
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={`${lastName}`}
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={
                    firstName === this.props.userDetails.firstName &&
                    lastName === this.props.userDetails.lastName
                  }
                >
                  Confirm
                </button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        ) : (
          <div className="d-flex justify-content-between">
            Full Name: {`${firstName} ${lastName}`}
            <NavLink to="/userpage/profile/edit/name">
              <button>Edit</button>
            </NavLink>
          </div>
        )}

        {/* Email field, confirm button is disable if input email is the same as current email*/}
        {field === 'email' ? (
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-between">
              <div>
                Email:{' '}
                <input
                  type="text"
                  name="email"
                  style={{marginRight: '20px'}}
                  onChange={this.handleChange}
                  value={`${email}`}
                />
                {email === this.props.userDetails.email ? (
                  <div>
                    <br />
                    This is your current email address
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={email === this.props.userDetails.email}
                >
                  Confirm
                </button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        ) : (
          <div className="d-flex justify-content-between">
            Email: {email}
            <NavLink to="/userpage/profile/edit/email">
              <button>Edit</button>
            </NavLink>
          </div>
        )}

        {/* Password field, confirm button is disabled if input password is the same as current password and if password and confirm password do not match */}
        {field === 'password' ? (
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-between">
              <div className="d-inline-block">
                New Password:{' '}
                <input
                  type="password"
                  name="password"
                  style={{marginRight: '20px'}}
                  onChange={this.handleChange}
                  value={`${password}`}
                />
                Confirm Password:{' '}
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={this.handleChange}
                  value={`${confirmPassword}`}
                />
                {password === this.props.userDetails.password ? (
                  <div>This is your current password</div>
                ) : password !== confirmPassword ? (
                  <div>Password must match</div>
                ) : (
                  ''
                )}
                {password.length <= 4 ? (
                  <div>Password must be longer than 4 characters</div>
                ) : (
                  ''
                )}
              </div>
              <div>
                <button
                  type="submit"
                  disabled={
                    password === this.props.userDetails.password ||
                    password !== confirmPassword ||
                    password.length <= 4
                  }
                >
                  Confirm
                </button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
          </form>
        ) : (
          <div className="d-flex justify-content-between">
            Password: {hiddenPassword}
            <NavLink to="/userpage/profile/edit/password">
              <button>Edit</button>
            </NavLink>
          </div>
        )}

        <hr />
        <h1>Addresses</h1>
        <div className="d-flex">
          {addresses.map(address => {
            const {
              id,
              fullName,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
              phoneNumber,
              additionalInstruction,
            } = address;
            return (
              <div key={id} className="address-card">
                <p>
                  <span style={{fontWeight: 'bold'}}>{fullName}</span>
                  <br />
                  {addressLine1}
                  <br />
                  {addressLine2}
                  <br />
                  {city}
                  <br />
                  {state} {zip}
                  <br />
                  {country}
                  <br />
                  Phone Number: {phoneNumber.substring(0, 12)}
                  <br />
                  Additional Instructions:{' '}
                  {additionalInstruction.substring(0, 18) + '...'}
                </p>
                <div className="d-flex justify-content-end">
                  <div>
                    <NavLink to={`/userpage/profile/edit/address/${id}`}>
                      <button style={{margin: '2px', flex: '1'}}>Edit</button>
                    </NavLink>
                  </div>
                  <div>
                    <button style={{margin: '2px', flex: '1'}}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});
const mapDispatchToProps = dispatch => ({
  editUser: newProfile => dispatch(editUser(newProfile)),
  updateUserDetails: id => dispatch(updateUserDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
