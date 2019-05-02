import React from "react";
import connect from "react-redux";

const props = {
  user: {
    id:1,
    firstName: "bob",
    lastName: "bobbert",
    email: "bob@gmail.com"
  },
  orders: {
    id=55,
    userId = 1
  },
  orderitems: [{
    orderId:55,
    productId:5,
    quantity:3
  },
  {
    orderId:55,
    productId:2,
    quantity:1
  }],
  products:[{
    name:,
    unitCost,
  }]


};



const AccountSettings = props => {
  const { user } = props;
  const { orders } = props;

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{user.firstName}</h2>
      <h3>{user.lastName}</h3>
      <h3>{user.email}</h3>
      <br />
      <br />

      <h1>Orders</h1>

      <div>{orders.filter(order => order.userId === user.id).map(order => {
        
      })}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

export default AccountSettings; //connect(mapStateToProps)(AccountSettings);
