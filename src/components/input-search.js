import React from 'react'
import PropTypes from 'prop-types'

import Icon from './icon'

const InputSearch = ({
  label,
  searchValue,
  searchPlaceholder,
  onChange,
  onClear,
  showSymbol = true,
}) => {
  return (
    <label htmlFor="input-value">
      {label}
      <div>
        {showSymbol ? <small>@</small> : null}
        <input
          id="input-value"
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onChange}
        />
        <button onClick={onClear} type="button">
          <Icon path="clear" />
        </button>
      </div>
    </label>
  )
}

InputSearch.propTypes = {
  /** The input label */
  label: PropTypes.string.isRequired,
  /** The search value */
  searchValue: PropTypes.string.isRequired,
  /** The input placeholder */
  searchPlaceholder: PropTypes.string.isRequired,
  /** The onChange handler */
  onChange: PropTypes.func.isRequired,
  /** The onClear handler */
  onClear: PropTypes.func.isRequired,
  /** Determins if the @ symbol is visible */
  showSymbol: PropTypes.bool,
}

export default InputSearch
