import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
const Profile = props => {
  if (!props.userDetails) return <div />;
  const {
    userDetails: {firstName, lastName, email, addresses},
  } = props;

  console.log(props);
  return (
    <div>
      <h1>Account Information</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <p>Name: {`${firstName} ${lastName}`}</p>
        <NavLink to="userpage/profile/edit/name">
          <button>Edit</button>
        </NavLink>
      </div>
      <div className='d-flex justify-content-between'>
        <p>Email: {email}</p>
        <NavLink to="userpage/profile/edit/email">
          <button>Edit</button>
        </NavLink>
      </div>
      <div className='d-flex justify-content-between'>
      <p>Password: ******</p>
      <NavLink to="userpage/profile/edit/password">
          <button>Edit</button>
        </NavLink>
      </div>

      <hr />
      <h1>Addresses</h1>
      <div>
        {addresses.map(address => {
          const {
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
            <div>
              <p>
                {fullName}
                <br />
                {addressLine1}
                <br />
                {addressLine2}
                <br />
                {city}, {state} {zip}
                <br />
                {country}
                <br />
                Phone Number: {phoneNumber}
                <br />
                Additional Instructions: {additionalInstruction}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => userDetails;

export default connect(mapStateToProps)(Profile);
