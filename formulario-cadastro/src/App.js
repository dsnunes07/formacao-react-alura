import { Container, Typography } from "@material-ui/core";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Register yourself now
      </Typography>
      <RegisterForm submitAction={submitForm} validateCPF={validateCPF} />
    </Container>
  );
}

function submitForm(data) {
  console.log(data);
}

function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, helperText: "CPF deve ter 11 dígitos" };
  }
  return { valid: true, helperText: "" };
}

export default App;
