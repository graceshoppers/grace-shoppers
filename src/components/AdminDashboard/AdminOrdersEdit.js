import React from "react";
import { connect } from "react-redux";
import { editOrder } from "../../redux-store/actions/order-actions";

class AdminOrdersEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      edittable: false
    };
  }

  makeEdittable = () => {
    this.setState(prevState => ({ edittable: !prevState.edittable }));
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { editOrder } = this.props;
    const orderToEdit = {
      id: this.props.order.id,
      status: event.target.status.value
    };

    await this.props.editOrder(orderToEdit);
    this.setState(prevState => ({ edittable: !prevState.edittable }));
  };

  render() {
    const { status } = this.props.order;

    if (this.state.edittable) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-2">
              <select
                className="form-control"
                name="status"
                defaultValue={status}
              >
                <option value="Processing">Processing</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
              </select>
            </div>

            <div className="col-1">
              <button
                className="btn btn-outline-secondary btn-sm"
                type="submit"
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="save_icon.png"
                />
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div className="row">
          <div className="col-2">
            <h3>{status}</h3>
          </div>
          <div className="col-1">
            <img src="edit_icon.png" onClick={this.makeEdittable} />
          </div>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { editOrder }
)(AdminOrdersEdit);
