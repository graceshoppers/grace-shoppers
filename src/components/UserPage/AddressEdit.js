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
      additionalInstruction: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {id},
      },
      userDetails: {addresses},
    } = this.props;
    const address = addresses.find(address => address.id === +id);
    const {
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      country,
      phoneNumber,
      additionalInstruction,
    } = address;
    this.setState({
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      country,
      phoneNumber,
      additionalInstruction,
    });
  }

  render() {
    const {
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zip,
      country,
      phoneNumber,
      additionalInstruction,
    } = this.state;
    return (
      <div>
        <form className="d-flex flex-column">
          Full Name: <input type="text" name="fullName" value={fullName} />
          Address Line 1:{' '}
          <input type="text" name="addressLine1" value={addressLine1} />
          Address Line 2:{' '}
          <input type="text" name="addressLine2" value={addressLine2} />
          City: <input type="text" name="city" value={city} />
          State: <input type="text" name="state" value={state} />
          Zip: <input type="text" name="zip" value={zip} />
          Country: <input type="text" name="country" value={country} />
          Phone Numner:{' '}
          <input type="text" name="phoneNumber" value={phoneNumber} />
          Additional Instructions:{' '}
          <input
            type="text"
            name="additionalInstructions"
            value={additionalInstruction}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});
export default connect(mapStateToProps)(AddressEdit);
