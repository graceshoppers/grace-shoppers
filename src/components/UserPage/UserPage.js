import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux-store/actions/auth-actions';
import parseCost from '../../shared/parse-cost';
import {getUserDetails} from '../../redux-store/actions/auth-actions';
import {NavLink} from 'react-router-dom';

class AccountSettings extends Component {
  render() {
    const {userDetails, logoutUser} = this.props;
    //defend against first render before App component did mount run
    if (!userDetails) return <div />;
    const {firstName, lastName, email} = userDetails;
    const {orders, addresses} = userDetails;

    return (
      <div>
        <button className="btn btn-danger" onClick={logoutUser}>
          Logout
        </button>
        <div>
          <NavLink to="/userpage/profile">View Account Information</NavLink>
        </div>
        <div>
          <h1>Past Orders</h1>
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
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => userDetails;

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () =>
    dispatch(logoutUser()).then(() => ownProps.history.push('/')),
  getUserDetails: () => dispatch(getUserDetails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
