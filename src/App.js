import logo from './logo.svg';
import './App.css';
import { Button , Navbar , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Button>chercher</Button>
      <>
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Container>
      <Navbar.Brand>Brand text</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="https://www.combustible.ca/wp-content/uploads/2020/02/pouvoir-visuel-images-site-web.jpg"
        width="400"
        height="500"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://www.conseilsmarketing.com/wp-content/uploads/2019/10/Depositphotos_83874728_xl-2015-800x500.jpg"
          width="400"
          height="500"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
<footer>
<h1>RYADH LAABIDI</h1>
</footer>
    </div>
  );
}

export default App;
