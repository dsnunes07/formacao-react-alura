import { Container, Typography } from "@material-ui/core";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Register yourself now</Typography>
      <RegisterForm submitAction={submitForm}/>
    </Container>
  );
}

function submitForm(data) {
  console.log(data)
}

export default App;
