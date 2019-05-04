import React from 'react';
import {connect} from 'react-redux';

const AccountSettings = props => {
  const {userDetails} = props;

  // If user information is not on Redux state from thunk request,
  // redirect to /login
  if (!userDetails.info) props.history.push('/login');

  return (
    <div>
      <hr />
      <h1>Welcome</h1>
      <br />
      <h2>
        {userDetails.info.firstName} {userDetails.info.lastName}
      </h2>
      <h3>{userDetails.info.email}</h3>

      <button className="btn btn-danger">Logout</button>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

export default connect(mapStateToProps)(AccountSettings);
