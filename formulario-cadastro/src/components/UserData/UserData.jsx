import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

function UserData({ submitAction }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      submitAction({ email, password });
    }}>
      <TextField id="email" label="E-mail" type="email" margin="normal" fullWidth required onChange={(event) => {
        setEmail(event.target.value);
      }} />
      <TextField id="password" label="Password" type="password" margin="normal" fullWidth required onChange={(event) => {
        setPassword(event.target.value);
      }} />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}

export default UserData;
