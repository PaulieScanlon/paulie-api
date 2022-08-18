import React from 'react'
import PropTypes from 'prop-types'

const FormInputValue = ({
  productValue,
  numberValue,
  onSubmit,
  onSelectChange,
  onNumberChange,
  isSubmitting,
}) => {
  return (
    <form>
      <label htmlFor="number-value">
        Product
        <select value={productValue} onChange={onSelectChange}>
          <option value="prod_KAgqqzBEBmuYkT">mdx-embed</option>
          <option value="prod_KBkjqz2EoA4xXU">paulie.dev</option>
        </select>
      </label>

      <label>
        Amount
        <input
          id="number-value"
          type="number"
          min={1}
          max={100}
          value={numberValue}
          onChange={onNumberChange}
        />
      </label>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  )
}

FormInputValue.propTypes = {
  /** The product value */
  productValue: PropTypes.string.isRequired,
  /** The number value */
  numberValue: PropTypes.number,
  /** The onSubmit handler */
  onSubmit: PropTypes.func.isRequired,
  /** The onSelectChange handler */
  onSelectChange: PropTypes.func.isRequired,
  /** The onNumberChange handler */
  onNumberChange: PropTypes.func,
  /** The status of the form */
  isSubmitting: PropTypes.bool.isRequired,
}

export default FormInputValue
