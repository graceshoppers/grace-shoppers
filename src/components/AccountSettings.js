import React from 'react';
import Navbar from './Nav';
import connect from 'react-redux';
import getOrderItemsForOneUser from '../redux-store/store'

const AccountSettings = props => {
  const { user } = props
  const { orders } = props

  return (
    <div>
      <h1>Hello</h1>
      <h1>{user.firstName}</h1>
      <h1>{user.lastName}</h1>
      <h3>{user.email}</h3>
      <br/>
      <br/>

      <h1>Orders</h1>
      
      <div>
      {orders.map(order =>{

      })}
      </div>
      

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders:state.ordersForOne
  }
}



export default connect(mapStateToProps, {getOrderItemsForOneUser(user)})(AccountSettings);


