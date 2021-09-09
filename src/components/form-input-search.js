import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Button, Input, Text, IconButton, Label } from 'theme-ui'

import Icon from '../components/icon'

const FormInputSearch = ({
  searchValue,
  numberValue,
  inputPlaceholder,
  onSubmit,
  onSearchChange,
  onNumberChange,
  onClear,
  isSubmitting,
}) => {
  return (
    <Grid
      as="form"
      variant="forms"
      onSubmit={onSubmit}
      sx={{
        gridTemplateColumns: ['auto', '1fr auto'],
        gap: numberValue ? 3 : 2,
      }}
    >
      <Grid
        sx={{
          gridTemplateColumns: ['1fr auto'],
          gap: [numberValue ? 2 : 0, 2],
        }}
      >
        <Label htmlFor="input-value">
          Search
          <Box
            sx={{
              position: 'relative',
            }}
          >
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
            <Input
              id="input-value"
              type="text"
              placeholder={inputPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              sx={{
                pl: '24px',
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
        {numberValue ? (
          <Label htmlFor="number-value">
            Results
            <Input
              id="number-value"
              type="number"
              min={1}
              max={30}
              value={numberValue}
              onChange={onNumberChange}
            />
          </Label>
        ) : null}
      </Grid>
      <Button disabled={isSubmitting || !searchValue} type="submit">
        Submit
      </Button>
    </Grid>
  )
}

FormInputSearch.propTypes = {
  /** The search value */
  searchValue: PropTypes.string.isRequired,
  /** The number value */
  numberValue: PropTypes.number,
  /** The input placeholder */
  inputPlaceholder: PropTypes.string.isRequired,
  /** The onSubmit handler */
  onSubmit: PropTypes.func.isRequired,
  /** The onSearchChange handler */
  onSearchChange: PropTypes.func.isRequired,
  /** The onNumberChange handler */
  onNumberChange: PropTypes.func,
  /** The onClear handler */
  onClear: PropTypes.func.isRequired,
  /** The status of the form */
  isSubmitting: PropTypes.bool.isRequired,
}

export default FormInputSearch
