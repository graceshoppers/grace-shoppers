import React, {Component} from 'react';
import {connect} from 'react-redux';

import './UserPage.css';

class AddressEdit extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phoneNumber: '',
      additionalInstructions: '',
    };
  }

  componentDidMount() {
    const {
      match: {params},
      userDetails: {addresses},
    } = this.props;

    console.log(+params.id === 24);
    const address = addresses.find(id => id === params.id*1);
    console.log(address)
  }

  render() {
    return (
      <div>
        <form className="d-flex flex-column">
          Full Name: <input type="text" name="fullName" />
          Address Line 1: <input type="text" name="addressLine1" />
          Address Line 2: <input type="text" name="addressLine2" />
          City: <input type="text" name="city" />
          State: <input type="text" name="state" />
          Zip: <input type="text" name="zip" />
          Country: <input type="text" name="country" />
          Phone Numner: <input type="text" name="phoneNumber" />
          Additional Instructions:{' '}
          <input type="text" name="additionalInstructions" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => userDetails;
export default connect(mapStateToProps)(AddressEdit);
