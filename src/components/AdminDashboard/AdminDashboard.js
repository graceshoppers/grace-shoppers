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
    if (currentPanel === 'products') return <AdminProducts/>
    if (currentPanel === 'users') return <AdminUsers/>
    if (currentPanel === 'orders') return <AdminOrders/>
  }
  render(){
    const{showProducts, showUsers, showOrders, drawPanel} = this
    
    return (
      <div>
      <div className="btn-group" role="group">
      <button type="button" onClick={showProducts} className="btn btn-light btn-lg">Products</button>
      <button type="button" onClick={showUsers} className="btn btn-light btn-lg">Users</button>
      <button type="button" onClick={showOrders} className="btn btn-light btn-lg">Orders</button>
      </div>
      <div>{drawPanel(this.state.currentPanel)}</div>
      
      
   
    </div>
    )
  }
 
};

export default AdminDashboard;



