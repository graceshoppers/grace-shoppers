import React from 'react';
import {connect} from 'react-redux';

const AccountSettings = props => {
  const {auth} = props;
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

  return (
    <div>
      <p>Under construction</p>

      <button className="btn btn-danger" onClick={auth.logout.bind(this)}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = ({users, orders, orderitems}) => ({
  users,
  orders,
  orderitems,
});

export default connect(mapStateToProps)(AccountSettings);
