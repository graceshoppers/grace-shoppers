import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux-store/actions/auth-actions';

const AccountSettings = props => {
  const {auth, userDetails, logoutUser} = props;
  const {firstName, lastName, email} = userDetails;
  //   const userId = props.match.params.userId * 1;
  //   const user = users.find(user => {
  //     return user.id === userId;
  //   });

  //   const {orders} = props;
  //   const ownOrders = orders.filter(order => order.userId === userId);

  //   const {orderitems} = props;
  //   return (
  //     <div>
  //       <hr />
  //       <h1>Welcome</h1>
  //       <br />
  //       <h2>
  //         {userDetails.info.firstName} {userDetails.info.lastName}
  //       </h2>
  //       <h3>{userDetails.info.email}</h3>

  //       <h1>Orders</h1>
  //       {ownOrders.map(ownOrder => {
  //         return (
  //           <ul key={ownOrder.id}>
  //             <h2>{ownOrder.createdAt}</h2>
  //             <h3>{ownOrder.status}</h3>
  //             PUT ORDERITEMS HERE
  //           </ul>
  //         );
  //       })}
  //     </div>
  //   );

  const { orders } = props;
  console.log(orders)
  const ownOrders = orders.filter(order => order.userId === userId)


  const {orderitems} = props;
  console.log(orderitems)
  return (
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
