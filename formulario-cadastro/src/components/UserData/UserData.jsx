import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

function UserData() {
  return (
    <form>
      <TextField id="email" label="E-mail" type="email" margin="normal" fullWidth />
      <TextField id="password" label="Password" type="password" margin="normal" fullWidth />
      <Button type="submit" variant="contained" color="primary">Entrar</Button>
    </form>
  )
}

export default UserData;
