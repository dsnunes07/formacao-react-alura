import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function ShippingData({ submitAction }) {
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState();
  const [addressState, setAddressState] = useState('');
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      submitAction({ zipcode, address, number, addressState, city })
    }}>
      <TextField
        value={zipcode}
        id="zipcode"
        label="Zipcode"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setZipcode(event.target.value)
        }}/>
      <TextField
        value={address}
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setAddress(event.target.value);
        }}/>
      <TextField
        value={number}
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setNumber(event.target.value)
        }}/>
      <TextField
        value={addressState}
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setAddressState(event.target.value);
        }} />
      <TextField
        value={city}
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setCity(event.target.value);
        }} />
      <Button type="submit" fullWidth variant="contained" color="primary">Cadastrar</Button>
    </form>
  )
}

export default ShippingData;