import React from 'react';
import PropTypes from 'prop-types';

const InputSearch = ({ label, searchValue, searchPlaceholder, onChange, onClear, showSymbol = true }) => {
  return (
    <label htmlFor="input-value">
      {label}
      <div className="relative">
        {showSymbol ? <small className="absolute top-2.5 left-3">@</small> : null}
        <input
          id="input-value"
          type="text"
          className={`block w-full placeholder:text-primary/20 bg-transparent ${
            showSymbol ? 'px-6' : 'px-2'
          } py-2 rounded border-2 border-primary/30`}
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onChange}
        />
        <button onClick={onClear} type="button" className="absolute top-2.5 right-4 cursor-pointer">
          x
        </button>
      </div>
    </label>
  );
};

InputSearch.propTypes = {
  /** The input label */
  label: PropTypes.string.isRequired,
  /** The search value */
  searchValue: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  /** The input placeholder */
  searchPlaceholder: PropTypes.string.isRequired,
  /** The onChange handler */
  onChange: PropTypes.func.isRequired,
  /** The onClear handler */
  onClear: PropTypes.func.isRequired,
  /** Determins if the @ symbol is visible */
  showSymbol: PropTypes.bool
};

export default InputSearch;
