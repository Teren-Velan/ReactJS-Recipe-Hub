import React, {useState , useEffect} from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import MainHome from "./components/Home/home-components/Main-Home"
import SearchPage from './components/Home/home-components/Top-Home-Components/SearchPage';
import MyCookbook from "../src/MyCookbook-component/MyCookbook"
import OveralDisplay from './cuisine-components/OveralDisplay'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom";
import { Navbar, Nav , NavDropdown } from "react-bootstrap";



function App() {

  const [search,setSearch] = useState("")

  
  return (
    <div className="App">

    <Router>
        <Navbar className="mt-4 ml-5 position-absolute" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Taste The World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link  style={{color: "#000" , fontSize: "22px"}}  href="/">Home</Nav.Link>

      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Cuisine" id="collasible-nav-dropdown">
        <Nav.Link className="nav-link" href="/American">American</Nav.Link>
        <Nav.Link className="nav-link" href="/Asian">Asian</Nav.Link>
        <Nav.Link className="nav-link" href="/Caribbean">Caribbean</Nav.Link>
        <Nav.Link className="nav-link" href="/French">French</Nav.Link>
        <Nav.Link className="nav-link" href="/Indian">Indian</Nav.Link>
        <Nav.Link className="nav-link" href="/Italian">Italian</Nav.Link>
        <Nav.Link className="nav-link" href="/Japanese">Japanese</Nav.Link>
        <Nav.Link className="nav-link" href="/Mexican">Mexican</Nav.Link>
        <Nav.Link className="nav-link" href="/Mediterranean">Mediterranean</Nav.Link>
        <Nav.Link className="nav-link" href="/Nordic">Nordic</Nav.Link>
      </NavDropdown>

      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Diet" id="collasible-nav-dropdown">
        <Nav.Link className="nav-link" href="/HighProtein">High-Protein</Nav.Link>
        <Nav.Link className="nav-link" href="/Gluten-Free">Gluten-Free</Nav.Link>
        <Nav.Link className="nav-link" href="/Keto">Keto</Nav.Link>
        <Nav.Link className="nav-link" href="/Paleo">Paleo</Nav.Link>
        <Nav.Link className="nav-link" href="/Pescatarian">Pescatarian</Nav.Link>
        <Nav.Link className="nav-link" href="/Vegetarian">Vegetarian</Nav.Link>
        <Nav.Link className="nav-link" href="/Vegan">Vegan</Nav.Link>
      </NavDropdown>
      
      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Meals" id="collasible-nav-dropdown">
        <Nav.Link className="nav-link"  href="/Breakfast">Breakfast</Nav.Link>
        <Nav.Link className="nav-link"  href="/Lunch">Lunch</Nav.Link>
        <Nav.Link className="nav-link"  href="/Dinner">Dinner</Nav.Link>
        <Nav.Link className="nav-link"  href="/Snacks">Snacks</Nav.Link>
        <Nav.Link className="nav-link"  href="/Teatime">Teatime</Nav.Link>
      </NavDropdown>

      <NavLink style={{ textDecoration: 'none' , color: "#000" , fontSize: "22px" , fontFamily:'Calistoga'}} className="mt-2 ml-3 mycookbook" to="/mycookbook">My Cookbook</NavLink>

      </Nav>
      </Navbar.Collapse>
    </Navbar>

      <Switch>
        <Route path="/" exact>
          <MainHome search = {search} setSearch={setSearch}/>
        </Route>
        <Route path="/mycookbook" exact>
          <MyCookbook/>
        </Route>
        <Route path="/searchpage" exact>
          <SearchPage/>
        </Route>
        <Route path="/:name" exact>
          <OveralDisplay/>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
