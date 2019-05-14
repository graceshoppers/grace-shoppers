import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateUserDetails} from '../../redux-store/actions/auth-actions';

import './UserPage.css';

class AddressEdit extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
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
      match: {params},
      userDetails: {addresses},
    } = this.props;
    if (addresses) {
      const address = addresses.find(add => add.id === +params.id);
      const {
        id,
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
        id,
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
  }

  handleChange = evt => {
    evt.preventDefault();
    this.setState({[evt.target.name]: evt.target.value});
  };

  handleCancel = evt => {
    evt.preventDefault();
    this.props.history.push('/userpage/profile');
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const updateAddress = {...this.state};
    axios
      .put(`/api/addresses/${updateAddress.id}`, updateAddress)
      .then(() => this.props.updateUserDetails(this.props.userDetails.id))
      .then(() => this.props.history.push('/userpage/profile'))
      .catch(e => console.log(`Error updating address:\n${e}`));
  };

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(JSON.stringify(prevProps.userDetails)) !==
      JSON.stringify(JSON.stringify(this.props.userDetails))
    ) {
      const {
        match: {params},
        userDetails: {addresses},
      } = this.props;
      const address = addresses.find(add => add.id === +params.id);
      const {
        id,
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
        id,
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
  }

  render() {
    if (!this.props.userDetails.addresses) return <div />;
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
        <form
          className="container d-flex flex-column justify-content-center"
          style={{width: '70vw'}}
          onSubmit={this.handleSubmit}
        >
          <div className="container d-flex flex-column justify-content-center">
            Full Name:{' '}
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
            Address Line 1:{' '}
            <input
              type="text"
              name="addressLine1"
              value={addressLine1}
              onChange={this.handleChange}
            />
            Address Line 2:{' '}
            <input
              type="text"
              name="addressLine2"
              value={addressLine2}
              onChange={this.handleChange}
            />
            City:{' '}
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
            />
            State:{' '}
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
            />
            Zip:{' '}
            <input
              type="text"
              name="zip"
              value={zip}
              onChange={this.handleChange}
            />
            Country:{' '}
            <input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
            />
            Phone Numner:{' '}
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
            />
            Additional Instructions:{' '}
            <input
              type="text"
              name="additionalInstructions"
              value={additionalInstruction}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="container">
            <button type="submit">Confirm</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});
const mapDispatchToProps = dispatch => ({
  updateUserDetails: id => dispatch(updateUserDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEdit);
