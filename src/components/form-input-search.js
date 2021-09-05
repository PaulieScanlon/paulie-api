import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Button, Input, Text, IconButton } from 'theme-ui'

import Icon from '../components/icon'

const FormInputSearch = ({
  inputValue,
  inputPlaceholder,
  onSubmit,
  onChange,
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
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Text
          variant="small"
          sx={{
            position: 'absolute',
            top: '50%',
            left: 2,
            transform: 'translateY(-52%)',
            color: 'lighten',
          }}
        >
          @
        </Text>
        <Input
          type="text"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={onChange}
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
      <Button disabled={isSubmitting || !inputValue} type="submit">
        Submit
      </Button>
    </Grid>
  )
}

FormInputSearch.propTypes = {
  /** The input value */
  inputValue: PropTypes.string.isRequired,
  /** The input placeholder */
  inputPlaceholder: PropTypes.string.isRequired,
  /** The onSubmit handler */
  onSubmit: PropTypes.func.isRequired,
  /** The onChange handler */
  onChange: PropTypes.func.isRequired,
  /** The onClear handler */
  onClear: PropTypes.func.isRequired,
  /** The status of the form */
  isSubmitting: PropTypes.bool.isRequired,
}

export default FormInputSearch
