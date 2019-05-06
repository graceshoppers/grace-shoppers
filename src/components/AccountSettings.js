import React from "react";
import { connect } from "react-redux";

const AccountSettings = props => {
  const { users } = props;
  const userId = props.match.params.userId * 1;
  const user = users.find(user => {
    return user.id === userId;
  });

  const { orders } = props;
  console.log(orders)
  const ownOrders = orders.filter(order => order.userId === userId)

  console.log(ownOrders)
  return (
    <div>
      <h1>Welcome</h1>
      <h2>{user.firstName}</h2>
      <h3>{user.lastName}</h3>
      <h3>{user.email}</h3>
      <br />
      <br />

      <h1>Orders</h1>
      {ownOrders.map(ownOrder => {
        return (
        <ul key={ownOrder.id}>
          <h2>{ownOrder.createdAt}</h2>
          <h3>{ownOrder.status}</h3>
          PUT ORDERITEMS HERE

        </ul>)
        
      })}

    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    orders: state.orders
  };
};

export default connect(mapStateToProps)(AccountSettings);
