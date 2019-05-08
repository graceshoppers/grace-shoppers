import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = props => {
  const {inputName, inputType, labelDisplayText, errors} = props;
  return (
    <div className="form-group">
      {/* Label for input group */}
      <label
        htmlFor={inputName}
        className={`${errors.length ? 'text-danger' : ''}`}
      >
        {labelDisplayText}
      </label>

      <input
        type={inputType}
        name={inputName}
        className={`form-control${errors.length ? ' is-invalid' : ''}`}
      />
      {errors.length ? renderErrors(errors) : ''}
    </div>
  );
};

const renderErrors = errors =>
  errors.map((error, i) => (
    <div key={i} className="help-block text-danger">
      ∙ {error}
    </div>
  ));

TextInputGroup.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  errors: PropTypes.array,
};

TextInputGroup.defaultProps = {
  inputType: 'text',
  errors: [],
};

export default TextInputGroup;
