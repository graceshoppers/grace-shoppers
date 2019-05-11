import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux-store/actions/auth-actions';

const AccountSettings = props => {
  const {userDetails, logoutUser} = props;
  const {firstName, lastName, email} = userDetails;

  console.log(userDetails)
  return (
    <div>
      <div>
      <h1>User Profile</h1>
      <hr />
      <p>Name: {`${firstName} ${lastName}`}</p>
      <p>Email: {email}</p>
      <hr />
      <button className="btn btn-danger" onClick={logoutUser}>
        Logout
      </button>
      </div>
      <div>
      <h1>Past Orders</h1>

      </div>
    </div>
  );
};


const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () =>
    dispatch(logoutUser()).then(() => ownProps.history.push('/')),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
