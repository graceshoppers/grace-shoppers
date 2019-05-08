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
  return (
    <div>
      {orders.map(order => {
        return (
          <div>
            {order.id}
            {order.status}
            {orderitems.filter(orderitem => order.id === orderitem.orderId)
            .map(orderitem => {
                return(
                    <div>
                    {orderitem.product.name}x{orderitem.quantity}
                    </div>
                )
            })}
          </div>
        );
      })}
    </div>
  );
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
