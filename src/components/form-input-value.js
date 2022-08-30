import React from 'react';
import PropTypes from 'prop-types';

import Loading from './loading';

const FormInputValue = ({ productValue, numberValue, onSubmit, onSelectChange, onNumberChange, isSubmitting }) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1fr-auto-auto gap-4 items-end text-text text">
      <label htmlFor="number-value" className="flex flex-col">
        Product
        <select
          value={productValue}
          onChange={onSelectChange}
          className="min-h-[40px] placeholder:text-primary/20 cursor-pointer bg-transparent p-2 rounded border-2 border-primary/30"
        >
          <option value="prod_KAgqqzBEBmuYkT">mdx-embed</option>
          <option value="prod_KBkjqz2EoA4xXU">paulie.dev</option>
        </select>
      </label>

      <label className="flex flex-col">
        Amount
        <input
          id="number-value"
          type="number"
          min={1}
          max={100}
          value={numberValue}
          onChange={onNumberChange}
          className="placeholder:text-primary/20 bg-transparent p-2 rounded border-2 border-primary/30"
        />
      </label>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? <Loading /> : 'Submit'}
      </button>
    </form>
  );
};

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
  isSubmitting: PropTypes.bool.isRequired
};

export default FormInputValue;
