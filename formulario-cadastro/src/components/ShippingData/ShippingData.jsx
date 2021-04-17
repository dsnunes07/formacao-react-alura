import React from 'react'
import { TextField, Button } from '@material-ui/core'

function ShippingData() {
  return (
    <form>
      <TextField
        id="zipcode"
        label="Zipcode"
        type="number"
        variant="outlined"
        margin="normal" />
      <TextField
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal" />
      <TextField
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal" />
      <TextField
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal" />
      <TextField
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal" />
      <Button type="submit" fullWidth variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default ShippingData;