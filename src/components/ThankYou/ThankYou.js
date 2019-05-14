import React, {Component} from 'react'
import {fetchOrders} from '../../redux-store/actions/order-actions';
import {connect} from 'react-redux';

class ThankYou extends Component {
  constructor(){
    super();
    this.state = {
      order: {},
    }
  }
  componentDidMount(){
    const {id} = this.props;
    if(id){
      this.props.fetchOrders()
        .then(({orders}) => this.setState({order: orders.filter(order => order.id === id*1)}))
    };
  };
  render(){
    const {id} = this.props;
    const {order} = this.state;
    return(
      <div className="container">
        {
          id
          ? <div><h2>Here are your order details: </h2><h4>{JSON.stringify(order)}</h4>{console.log(order)}<h1>Your order is on its way!</h1></div>
          : <div/>
        }
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(null, mapDispatchToProps)(ThankYou);
