import React from 'react'
import PropTypes from 'prop-types'
import { Label, Text, Input, IconButton, Box } from 'theme-ui'

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
    <Label htmlFor="input-value">
      {label}
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {showSymbol ? (
          <Text
            variant="small"
            sx={{
              position: 'absolute',
              top: '48%',
              left: 2,
              transform: 'translateY(-50%)',
              color: 'lighten',
            }}
          >
            @
          </Text>
        ) : null}
        <Input
          id="input-value"
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onChange}
          sx={{
            pl: showSymbol ? '24px' : '8px',
          }}
        />
        <IconButton
          onClick={onClear}
          type="button"
          sx={{
            position: 'absolute',
            top: '50%',
            right: 2,
            transform: 'translateY(-50%)',
          }}
        >
          <Icon path="clear" />
        </IconButton>
      </Box>
    </Label>
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
