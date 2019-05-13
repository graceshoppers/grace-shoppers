import React from "react";
import { connect } from "react-redux";
import {addOrder, editOrder, deleteOrder } from '../../redux-store/actions/order-actions'
import {addProduct, editProduct, deleteProduct } from '../../redux-store/actions/product-actions'
import {addUser, editUser, deleteUser } from '../../redux-store/actions/user-actions'
import {addOrderitem, editOrderitem, deleteOrderitem } from '../../redux-store/actions/orderitem-actions'
import AdminOrders from './AdminOrders'
import AdminProducts from './AdminProducts'
import AdminUsers from './AdminUsers'



class AdminDashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentPanel:'products'
    }
  }
  showProducts = () => {
    this.setState({currentPanel:'products'})
  }
  showUsers = () => {
    this.setState({currentPanel:'users'})
  }
  showOrders = () => {
    this.setState({currentPanel:'orders'})
  }
  drawPanel = (currentPanel) =>{
    if (currentPanel === 'products') return <div><AdminProducts/></div>
    if (currentPanel === 'users') return <div><AdminUsers/></div>
    if (currentPanel === 'orders') return <div><AdminOrders/></div>
  }
  render(){
    const{showProducts, showUsers, showOrders, drawPanel} = this
    
    return (
      <div>
        <div><hr/><h1>Administrator Dashboard</h1></div>
      <div className="container" role="group">
      <button type="button" onClick={showProducts} className="btn btn-light btn-lg ">Products</button>
      <button type="button" onClick={showUsers} className="btn btn-light btn-lg">Users</button>
      <button type="button" onClick={showOrders} className="btn btn-light btn-lg">Orders</button>
      </div>
      <div>{drawPanel(this.state.currentPanel)}</div>
      
      
   
    </div>
    )
  }
 
};

export default AdminDashboard;



