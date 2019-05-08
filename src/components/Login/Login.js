import React from 'react';
import {connect} from 'react-redux';
import TextInputGroup from '../_common/TextInputGroup';

const Login = props => {
  return (
    <form>
      <TextInputGroup
        inputName="email"
        inputType="email"
        labelDisplayText="Email"
        errors={errors.email}
      />

      <TextInputGroup
        inputName="password"
        inputType="password"
        labelDisplayText="Password"
        errors={errors.password}
      />

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(
  null,
  mapDispatchToProps
)(Login);
