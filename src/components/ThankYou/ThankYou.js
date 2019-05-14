import React, {Component} from 'react';
import {connect} from 'react-redux';

const ThankYou = props => {
  const {firstName} = props.userDetails;
  return (
    <div className="container">
      <h1>Thank you, {firstName}!</h1>
      <br />
      <h2>Your order is on its way!</h2>
    </div>
  );
};

const mapStateToProps = ({userDetails}) => ({userDetails});

export default connect(mapStateToProps)(ThankYou);
