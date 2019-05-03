import React from 'react';
import {connect} from 'react-redux';

const AccountSettings = props => {
  const user = {
    id: 1,
    firstName: 'Kevin',
    lastName: 'Han',
    email: 'kevinhan@email.com',
    isAdmin: true,
    password: 'password',
    createdAt: '2019-05-03T01:02:27.275Z',
    updatedAt: '2019-05-03T01:02:27.275Z',
  };
  return (
    <div>
      <hr />
      <h1>Welcome</h1>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <h3>{user.email}</h3>
    </div>
  );
};

export default AccountSettings;
