import React from 'react';
import PropTypes from 'prop-types';

const InputNumber = ({ label, numberValue, onChange, isSubmitting }) => {
  return (
    <label htmlFor="number-value">
      {label}
      <input
        id="number-value"
        type="number"
        className="block w-full placeholder:text-primary/20 bg-transparent px-2 py-2 rounded border-2 border-primary/30"
        min={1}
        max={30}
        value={numberValue}
        onChange={onChange}
        disabled={isSubmitting}
      />
    </label>
  );
};

InputNumber.propTypes = {
  /** The input label */
  label: PropTypes.string.isRequired,
  /** The number value */
  numberValue: PropTypes.number.isRequired,
  /** The onChange handler */
  onChange: PropTypes.func.isRequired,
  /** Determins if form elements are disabled */
  isSubmitting: PropTypes.bool.isRequired
};

export default InputNumber;
