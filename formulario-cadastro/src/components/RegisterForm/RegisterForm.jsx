import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, Switch } from "@material-ui/core";

function RegisterForm(props) {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [cpf, setcpf] = useState();
  const [novidades, setnovidades] = useState(true);
  const [promotions, setpromotions] = useState(true);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.submitAction({
          name,
          lastname,
          cpf,
          novidades,
          promotions,
        });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let inputName = event.target.value;
          setName(inputName);
        }}
        label="Name"
        variant="outlined"
        id="name"
        margin="normal"
        fullWidth={true}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        id="lastName"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <TextField
        label="CPF"
        value={cpf}
        variant="outlined"
        id="taxpayerRegistry"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          const cpf = event.target.value;
          setcpf(cpf);
        }}
      />
      <FormControlLabel
        control={
          <Switch
            color="primary"
            name="promotions"
            checked={promotions}
            onChange={(event) => {
              setpromotions(event.target.checked);
            }}
          />
        }
        label="Promotions?"
      />
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            name="novidades"
            checked={novidades}
            onChange={(event) => {
              setnovidades(event.target.checked);
            }}
          ></Switch>
        }
        label="Novidades"
      ></FormControlLabel>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
