import React from 'react';
import {connect} from 'react-redux';
import parseCost from '../../shared/parse-cost';

const PastOrders = props => {
  const {orders} = props.userDetails;
  if (!orders) return <div />;
  return (
    <div>
      <h1>Past Orders</h1>
      {orders
        .filter(order => order.status !== 'Cart')
        .map(order => {
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
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

export default connect(mapStateToProps)(PastOrders);
