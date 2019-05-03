import React from "react";
import { connect } from "react-redux";


const AccountSettings = props => {
  const users  = props.users;
  const userId = props.match.params.userId * 1
  
  console.log(users)
  console.log(userId)
  const user = users.find(user => {return user.id === userId})
  console.log(user)
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

      {/* <div>{orders.filter(order => order.userId === user.id).map(order => {
        
      })}</div> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(AccountSettings);
