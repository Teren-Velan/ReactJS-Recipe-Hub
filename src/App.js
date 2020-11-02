import logo from './logo.svg';
import './App.css';
import MainHome from "./components/Home/home-components/Main-Home"
import MyCookbook from "../src/MyCookbook-component/MyCookbook"
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

import Balanced from "./diet-components/Balanced"
import HighFiber from "./diet-components/HighFiber"
import GlutenFree from "./diet-components/GlutenFree"
import HighProtein from "./diet-components/HighProtein"
import Keto from "./diet-components/Keto"
import LowCarbs from "./diet-components/LowCarbs"
import LowFats from "./diet-components/LowFats"
import Paleo from "./diet-components/Paleo"
import Pescatarian from "./diet-components/Pescatarian"
import Vegetarian from "./diet-components/Vegetarian"
import Vegan from "./diet-components/Vegan"

import Breakfast from "./meal-components/Breakfast"
import Lunch from "./meal-components/Lunch"
import Dinner from "./meal-components/Dinner"
import Snacks from "./meal-components/Snacks"
import Teatime from "./meal-components/Teatime"

import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom";
import { Navbar, Nav , NavDropdown } from "react-bootstrap";


function App() {
  return (
    <div className="App">

    <Router>
        <Navbar className="mt-4 ml-5 position-absolute" collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#home">Taste The World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>

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

      <NavDropdown title="Diet" id="collasible-nav-dropdown">
        <Nav.Link className="nav-link" href="/Balanced">Balanced</Nav.Link>
        <Nav.Link className="nav-link" href="/HighFiber">High-Fiber</Nav.Link>
        <Nav.Link className="nav-link" href="/HighProtein">High-Protein</Nav.Link>
        <Nav.Link className="nav-link" href="/LowCarbs">Low-Carbs</Nav.Link>
        <Nav.Link className="nav-link" href="/LowFats">Low-Fats</Nav.Link>
        <Nav.Link className="nav-link" href="/GlutenFree">Gluten-Free</Nav.Link>
        <Nav.Link className="nav-link" href="/Keto">Keto</Nav.Link>
        <Nav.Link className="nav-link" href="/Paleo">Paleo</Nav.Link>
        <Nav.Link className="nav-link" href="/Pescatarian">Pescatarian</Nav.Link>
        <Nav.Link className="nav-link" href="/Vegetarian">Vegetarian</Nav.Link>
        <Nav.Link className="nav-link" href="/Vegan">Vegan</Nav.Link>
      </NavDropdown>
      
      <NavDropdown title="Meals" id="collasible-nav-dropdown">
        <Nav.Link className="nav-link"  href="/Breakfast">Breakfast</Nav.Link>
        <Nav.Link className="nav-link"  href="/Lunch">Lunch</Nav.Link>
        <Nav.Link className="nav-link"  href="/Dinner">Dinner</Nav.Link>
        <Nav.Link className="nav-link"  href="/Snacks">Snacks</Nav.Link>
        <Nav.Link className="nav-link"  href="/Teatime">Teatime</Nav.Link>
      </NavDropdown>

      <NavLink to="/mycookbook">My Cookbook</NavLink>

      </Nav>
      </Navbar.Collapse>
    </Navbar>

      <Switch>
        <Route path="/" exact>
          <MainHome/>
        </Route>
        <Route path="/mycookbook" exact>
          <MyCookbook/>
        </Route>

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


        <Route path="/Balanced">
          <Balanced/>
        </Route>
        <Route path="/GlutenFree">
          <GlutenFree/>
        </Route>
        <Route path="/HighFiber">
          <HighFiber/>
        </Route>
        <Route path="/HighProtein">
          <HighProtein/>
        </Route>
        <Route path="/Keto">
          <Keto/>
        </Route>
        <Route path="/LowCarbs">
          <LowCarbs/>
        </Route>
        <Route path="/LowFats">
          <LowFats/>
        </Route>
        <Route path="/Paleo">
          <Paleo/>
        </Route>
        <Route path="/Pescatarian">
          <Pescatarian/>
        </Route>
        <Route path="/Vegan">
          <Vegan/>
        </Route>
        <Route path="/Vegetarian">
          <Vegetarian/>
        </Route>

        <Route path="/Breakfast">
          <Breakfast/>
        </Route>
        <Route path="/Lunch">
          <Lunch/>
        </Route>
        <Route path="/Dinner">
          <Dinner/>
        </Route>
        <Route path="/Snacks">
          <Snacks/>
        </Route>
        <Route path="/Teatime">
          <Teatime/>
        </Route>




      </Switch>
    </Router>

    </div>
  );
}

export default App;
