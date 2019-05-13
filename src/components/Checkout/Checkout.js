import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import CartItem from '../Cart/CartItem';
import parseCost from '../../shared/parse-cost';
import CartList from '../Cart/CartList';

class Checkout extends Component {
  render(){
    const {cart} = this.props;
    return (
      <div className="container">
        <div className="panel panel-info">
          <h3 className="panel-heading">Shipping Address</h3>
          <div className="panel-body">
            <div className="form-group">
              <label>Address Line 1</label>
              <input type="text" className="form-control mb-2"/>
              <label>Address Line 2</label>
              <input type="text" className="form-control mb-2"/>
              <label>City</label>
              <input type="text" className="form-control mb-2"/>
              <label>State</label>
              <input type="text" className="form-control mb-2"/>
              <label>Zip Code</label>
              <input type="text" className="form-control mb-2"/>
              <label>Country</label>
              <input type="text" className="form-control mb-2"/>
              <label>Phone Number</label>
              <input type="text" className="form-control mb-2"/>
            </div>
          </div>
        </div>

        <div className="panel panel-info">
          <h3 className="panel-heading">Payment Method</h3>
          <div className="panel-body">
            <div className="form-group">
                <label>Card Number</label>
                <input type="text" className="form-control mb-2"/>
                <label>Name on card</label>
                <input type="text" className="form-control mb-2"/>
                <label>Expiration date</label>
                <input type="text" className="form-control mb-2"/>
              </div>
          </div>
        </div>
          <CartList cart={cart}/>
        <button type="submit" className="btn btn-success mt-2 mb-2" onClick={() => this.props.history.push('/thank_you')}>Checkout</button>
      </div>
    );
  };
}

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(Checkout);
