import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const CartCheckout = (props) => {
  const {user} = props;
  return(
    <div className="col-md-4">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3 className="shopping-cart-title">Checkout</h3>
            <div className="black-divider-thin" style={{margin: '2em 0'}} />
          </div>
          <div className="row justify-content-md-center">
            <div className="col">
              <button className="btn btn-success" type="submit" onClick={() => {
                user.userDetails ?
                  props.history.push('/checkout')
                :
                  props.history.push('/login');
              }}> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({userDetails}) => {
  return {
    user: userDetails,
  };
};

export default connect(mapStateToProps)(CartCheckout);
