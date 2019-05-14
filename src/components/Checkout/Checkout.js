import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartList from '../Cart/CartList';
import {addOrder} from '../../redux-store/actions/order-actions';

class Checkout extends Component {
  constructor() {
    super();
    this.checkout = this.checkout.bind(this);
  }
  checkout() {
    const {cart, user} = this.props;
    const order = {
      orderitems: cart,
      userId: user.userDetails.id,
    };
    this.props
      .addOrder(order)
      .then(({newOrder}) => {
        this.props.history.push(`/thank_you/${newOrder.id}`);
      })
      .catch(e => console.log(e));
  }
  render() {
    const {cart, userDetails} = this.props;
    if (!Object.keys(userDetails).length) this.props.history.push('/login');
    return (
      <form>
        <div className="container">
          <CartList cart={cart} />
          <div className="panel panel-info">
            <h3 className="panel-heading">Shipping Address</h3>
            <div className="panel-body">
              <div className="form-group">
                <label>Address Line 1</label>
                <input type="text" className="form-control mb-2" required />
                <label>Address Line 2</label>
                <input type="text" className="form-control mb-2" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>NY</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <label>Country</label>
                <input type="text" className="form-control mb-2" required />
                <label>Phone Number</label>
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="form-control mb-2"
                  required
                />
              </div>
            </div>
          </div>

          <div className="panel panel-info">
            <h3 className="panel-heading">Payment Method</h3>
            <div className="panel-body">
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" className="form-control mb-2" required />
                <label>Name on card</label>
                <input type="text" className="form-control mb-2" required />
                <label>Expiration date</label>
                <input type="text" className="form-control mb-2" required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-success mt-2 mb-2">
            Checkout
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({cart, userDetails}) => ({cart, userDetails});
const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(addOrder(order)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
