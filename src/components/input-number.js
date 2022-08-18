import React from 'react'
import PropTypes from 'prop-types'

const InputNumber = ({ label, numberValue, onChange }) => {
  return (
    <label htmlFor="number-value">
      {label}
      <input
        id="number-value"
        type="number"
        min={1}
        max={30}
        value={numberValue}
        onChange={onChange}
      />
    </label>
  )
}

InputNumber.propTypes = {
  /** The input label */
  label: PropTypes.string.isRequired,
  /** The number value */
  numberValue: PropTypes.number.isRequired,
  /** The onChange handler */
  onChange: PropTypes.func.isRequired,
}

export default InputNumber
