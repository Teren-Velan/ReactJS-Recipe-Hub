import logo from './logo.svg';
import './App.css';
import MainHome from "./components/Home/home-components/Main-Home"
import American from './cuisine-components/American'
import Asian from "./cuisine-components/Asian"
import Caribbean from "./cuisine-components/Caribbean"
import French from "./cuisine-components/French"
import Indian from "./cuisine-components/Indian"
import Italian from "./cuisine-components/Italian"
import Japanese from "./cuisine-components/Japanese"
import Mexican from "./cuisine-components/Mexican"
import MiddleEastern from "./cuisine-components/MiddleEastern"
import Nordic from "./cuisine-components/Nordic"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  
} from "react-router-dom";

import { Navbar, Nav , NavDropdown } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      {/* <MainHome/> */}

      <Router>
        <Navbar  fluid collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#home">Taste The World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Cuisine" id="collasible-nav-dropdown">

      <Nav.Link className="nav-link" href="/American">American</Nav.Link>
      <Nav.Link className="nav-link" href="/Asian">Asian</Nav.Link>
      <Nav.Link className="nav-link" href="/Caribbean">Caribbean</Nav.Link>
      <Nav.Link className="nav-link" href="/French">French</Nav.Link>
      <Nav.Link className="nav-link" href="/Indian">Indian</Nav.Link>
      <Nav.Link className="nav-link" href="/Italian">Italian</Nav.Link>
      <Nav.Link className="nav-link" href="/Japanese">Japanese</Nav.Link>
      <Nav.Link className="nav-link" href="/Mexican">Mexican</Nav.Link>
      <Nav.Link className="nav-link" href="/MiddleEastern">Middle Eastern</Nav.Link>
      <Nav.Link className="nav-link" href="/Nordic">Nordic</Nav.Link>
      </NavDropdown>

      {/* <NavDropdown title="Diet" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Balanced</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">High-Fiber</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">High-Protein</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Low-Carbs</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Low-Fats</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Gluten-Free</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Keto</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Paleo</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Pescatarian</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Vegetarian</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Vegan</NavDropdown.Item>
      </NavDropdown> */}
      
      {/* <NavDropdown title="Meals" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Breakfast</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">Lunch</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Dinner</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Snacks</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Teatime</NavDropdown.Item>
      </NavDropdown> */}

      <Nav.Link to="#deets">My Cookbook</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Switch>
    <Route path="/American">
      <American/>
    </Route>
    <Route path="/Asian">
      <Asian/>
    </Route>
    <Route path="/Caribbean">
      <Caribbean/>
    </Route>
    <Route path="/French">
      <French/>
    </Route>
    <Route path="/Indian">
      <Indian/>
    </Route>
    <Route path="/Italian">
      <Italian/>
    </Route>
    <Route path="/Japanese">
      <Japanese/>
    </Route>
    <Route path="/Mexican">
      <Mexican/>
    </Route>
    <Route path="/MiddleEastern">
      <MiddleEastern/>
    </Route>
    <Route path="/Nordic">
      <Nordic/>
    </Route>

    




    </Switch>
    















      </Router>

    </div>
  );
}

export default App;
