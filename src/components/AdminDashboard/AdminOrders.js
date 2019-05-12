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

  console.log(orders[1])
  console.log(orderitems[1])
  return <div>{displayOrders(orders, orderitems)}</div>;
};

const displayOrders = (orders, orderitems) => {
  return orders.map(order => {
    const {firstName, lastName} = order.user
    return (
      <div
        className="table"
        key={order.id}
        style={{ border: "1px solid black", marginBottom: "40px" }}
      >
        <div className="row">
          <div className="col"><h3>{order.status}</h3></div>
          <div className="col"> 
              <button style={{width:'35px'}} type="submit" className="btn btn-dark">
                +
              </button>
            </div>
        </div>
        <div className="row">
          <div className="col">Ordered on: {order.createdAt.slice(11,16)} {order.createdAt.slice(0,10)}</div>
        </div>
        <div className="row">
          <div className="col">Ordered by: {firstName} {lastName}</div>
        </div>

    
        {orderitems
          .filter(orderitem => order.id === orderitem.orderId)
          .map(orderitem => {
            return (
              <div
                key={orderitem.id}
                style={{ borderLeft: "solid 5px black", marginBottom: "10px" }}
              >
                <img
                  width="50px"
                  height="50px"
                  src={orderitem.product.imageName}
                />
                {orderitem.product.name}x{orderitem.quantity}
              </div>
            );
          })}
      </div>
    );
  });
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
