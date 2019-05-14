import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const CartCheckout = props => {
  const {userDetails} = props;
  if (!Object.keys(userDetails).length) props.history.push('/login');

  return (
    <div className="col-md-4">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3 className="shopping-cart-title">Checkout</h3>
            <div className="black-divider-thin" style={{margin: '2em 0'}} />
          </div>
          <div className="row justify-content-md-center">
            <div className="col">
              <button
                className="btn btn-success"
                type="submit"
                onClick={() => {
                  props.history.push('/checkout');
                }}
              >
                {' '}
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

export default connect(mapStateToProps)(CartCheckout);
