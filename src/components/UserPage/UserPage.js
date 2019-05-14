import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux-store/actions/auth-actions';
import parseCost from '../../shared/parse-cost';
import {getUserDetails} from '../../redux-store/actions/auth-actions';
import {NavLink} from 'react-router-dom';

import './UserPage.css';

const UserPage = props => {
  const {userDetails, logoutUser} = props;
  //defend against first render before App component did mount run
  if (!userDetails) return <div />;

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-evenly">
        <NavLink to="/userpage/profile" style={{textDecoration: 'none'}}>
          <div className="option-card">View Account Information</div>
        </NavLink>
        <NavLink to="/userpage/orders" style={{textDecoration: 'none'}}>
          <div className="option-card">View Orders</div>
        </NavLink>
      </div>
      <button
        onClick={logoutUser}
        style={{width: '100px', marginLeft: '10px', color: '#fc5050'}}
      >
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () =>
    dispatch(logoutUser()).then(() => ownProps.history.push('/login')),
  getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
