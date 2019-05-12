import React from "react";
import { connect } from "react-redux";
import {
  addOrder,
  editOrder,
  deleteOrder
} from "../../redux-store/actions/order-actions";

import {
  addOrderitem,
  editOrderitem,
  deleteOrderitem
} from "../../redux-store/actions/orderitem-actions";

const AdminOrders = props => {
  const { orders, orderitems } = props;
  return(
    <div>{displayOrders(orders, orderitems)}</div>
  )
 }



const displayOrders = (orders, orderitems) =>{
  console.log(orderitems)
    return (orders.map(order => {
      return (
        <div key={order.id} style={{border:"1px solid black", marginBottom:"40px"}}>
          <h3>{order.status}  </h3>
          <h4>{order.createdAt}</h4>
          {orderitems
            .filter(orderitem => order.id === orderitem.orderId)
            .map(orderitem => {
              return (
                <div key={orderitem.id} style={{borderLeft:"solid 5px red", marginBottom:"10px"}} >
                  <img width="50px" height="50px" src={orderitem.product.imageName}/>{orderitem.product.name}x{orderitem.quantity}
                </div>
              );
            })}
        </div>
      );
    }))
};

const mapStateToProps = state => {
  return {
    orders: state.orders,
    orderitems: state.orderitems
  };
};

export default connect(
  mapStateToProps,
  {
    addOrder,
    editOrder,
    deleteOrder,
    addOrderitem,
    editOrderitem,
    deleteOrderitem
  }
)(AdminOrders);
