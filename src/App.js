import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <>
      <CssBaseline />
      <Header></Header>
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
