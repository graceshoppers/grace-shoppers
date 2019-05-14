import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const CartCheckout = props => {
  const {userDetails} = props;

  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          props.history.push('/checkout');
        }}
        style={{fontSize:'30px'}}
      >
        {' '}
        Checkout
      </button>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

export default connect(mapStateToProps)(CartCheckout);
