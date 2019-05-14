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

  const {orders} = userDetails;

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-evenly">
        <NavLink to="/userpage/profile" style={{textDecoration: 'none'}}>
          <div className="option-card">View Account Information</div>
        </NavLink>
        <NavLink to="/userpage/orders" style={{textDecoration: 'none'}}>
          <div className="option-card">View Orders</div>
        </NavLink>
      </div>
      <button
        className="btn btn-danger"
        onClick={logoutUser}
        style={{width: '100px', marginLeft: '10px'}}
      >
        Logout
      </button>
      <div>
        {/* <h1>Past Orders</h1>
          {orders.map(order => {
            const {id, status} = order;
            const orderValue = order.orderitems.reduce(
              (acc, cur) => (acc += cur.quantity * cur.product.unitCost),
              0
            );
            const items = order.orderitems
              .reduce((acc, cur) => {
                acc.push(cur.product.name);
                return acc;
              }, [])
              .join(', ');
            return (
              <div key={id}>
                <h5>Order ID: {id}</h5>
                <p>Status: {status}</p>
                <p>Items: {items} </p>
                <p>Order Value: {parseCost(orderValue)}</p>
                <hr />
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () =>
    dispatch(logoutUser()).then(() => ownProps.history.push('/')),
  getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
