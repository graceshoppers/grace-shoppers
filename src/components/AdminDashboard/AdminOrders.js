import React from "react";
import { connect } from "react-redux";
import {
  addOrder,
  deleteOrder
} from "../../redux-store/actions/order-actions";

import {
  addOrderitem,
  editOrderitem,
  deleteOrderitem
} from "../../redux-store/actions/orderitem-actions";
import AdminOrdersEdit from './AdminOrdersEdit'

const AdminOrders = props => {
  const { orders, orderitems } = props;
  return <div>{displayOrders(orders, orderitems)}</div>;
};

const handleChange = (event) =>{

}

const displayOrders = (orders, orderitems) => {
  return orders.map(order => {
    const { firstName, lastName } = order.user;
    const {
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      country,
      phoneNumber,
      additionalInstruction
    } = order.address;
    return (
      <div
        className="table"
        key={order.id}
        style={{ border: "1px solid black", marginBottom: "40px" }}
      >
      
           <AdminOrdersEdit order={order}/>

        <div className="row">
          <div className="col">
            ON: {order.createdAt.slice(11, 16)} {order.createdAt.slice(0, 10)}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            BY: {firstName} {lastName}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            TO: {fullName} <br />
            {addressLine1} {addressLine2}
            <br /> {city} {state} {zip} {country} {phoneNumber}
          </div>
        </div>

        <div className="row" style={{ marginBottom: "5px", marginTop: "30px" }}>
          <div className="col">
            {" "}
            Additional Instructions: {additionalInstruction}
          </div>
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
                {orderitem.product.name} x {orderitem.quantity}
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
    deleteOrder,
    addOrderitem,
    editOrderitem,
    deleteOrderitem
  }
)(AdminOrders);
