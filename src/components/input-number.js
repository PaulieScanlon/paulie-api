import React from 'react'
import PropTypes from 'prop-types'
import { Input, Label } from 'theme-ui'

const InputNumber = ({ label, numberValue, onChange }) => {
  return (
    <Label htmlFor="number-value">
      {label}
      <Input
        id="number-value"
        type="number"
        min={1}
        max={30}
        value={numberValue}
        onChange={onChange}
      />
    </Label>
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
