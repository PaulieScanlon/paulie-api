import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button, Input, Select, Label } from 'theme-ui'

const FormInputValue = ({
  productValue,
  numberValue,
  onSubmit,
  onSelectChange,
  onNumberChange,
  isSubmitting,
}) => {
  return (
    <Grid
      as="form"
      variant="forms"
      onSubmit={onSubmit}
      sx={{
        gridTemplateColumns: ['auto', '1fr auto'],
        gap: 2,
      }}
    >
      <Grid
        sx={{
          gridTemplateColumns: ['1fr auto'],
          gap: 2,
        }}
      >
        <Label>
          Product
          <Select value={productValue} onChange={onSelectChange}>
            <option value="prod_KAgqqzBEBmuYkT">mdx-embed</option>
            <option value="prod_KBkjqz2EoA4xXU">paulie.dev</option>
          </Select>
        </Label>
        <Label>
          Amount
          <Input
            type="number"
            min={1}
            max={30}
            value={numberValue}
            onChange={onNumberChange}
          />
        </Label>
      </Grid>
      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </Grid>
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
