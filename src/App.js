import React, {useState} from 'react'
import './App.css';
import MainHome from "./components/Home/home-components/Main-Home"
import SearchPage from './components/Home/home-components/Top-Home-Components/SearchPage';
import MyCookbook from "../src/MyCookbook-component/MyCookbook"
import OveralDisplay from './cuisine-components/OveralDisplay'
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom";
import { Navbar, Nav , NavDropdown } from "react-bootstrap";



function App() {

  const [search,setSearch] = useState("")
  const [book, setBook] = useState([])
  
  return (
    <div className="App">

    <Router>
        <Navbar className="mt-4 ml-5 position-absolute" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Taste The World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavLink  style={{color: "#000" , fontSize: "25px" , fontFamily:'Calistoga' , margin: "5px 20px"}}  to="/">Home</NavLink>

      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Cuisine" id="collasible-nav-dropdown">
        <NavLink  className="nav-link" to="/American">American</NavLink>
        <NavLink className="nav-link" to="/Asian">Asian</NavLink>
        <NavLink className="nav-link" to="/Caribbean">Caribbean</NavLink>
        <NavLink className="nav-link" to="/French">French</NavLink>
        <NavLink className="nav-link" to="/Indian">Indian</NavLink>
        <NavLink className="nav-link" to="/Italian">Italian</NavLink>
        <NavLink className="nav-link" to="/Japanese">Japanese</NavLink>
        <NavLink className="nav-link" to="/Mexican">Mexican</NavLink>
        <NavLink className="nav-link" to="/Mediterranean">Mediterranean</NavLink>
        <NavLink className="nav-link" to="/Nordic">Nordic</NavLink>
      </NavDropdown>

      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Diet" id="collasible-nav-dropdown">
        <NavLink className="nav-link" to="/High-Protein">High-Protein</NavLink>
        <NavLink className="nav-link" to="/Gluten-Free">Gluten-Free</NavLink>
        <NavLink className="nav-link" to="/Keto">Keto</NavLink>
        <NavLink className="nav-link" to="/Paleo">Paleo</NavLink>
        <NavLink className="nav-link" to="/Pescatarian">Pescatarian</NavLink>
        <NavLink className="nav-link" to="/Vegetarian">Vegetarian</NavLink>
        <NavLink className="nav-link" to="/Vegan">Vegan</NavLink>
      </NavDropdown>
      
      <NavDropdown style={{color: "#000" , fontSize: "20px"}}  title="Meals" id="collasible-nav-dropdown">
        <NavLink className="nav-link"  to="/Breakfast">Breakfast</NavLink>
        <NavLink className="nav-link"  to="/Lunch">Lunch</NavLink>
        <NavLink className="nav-link"  to="/Dinner">Dinner</NavLink>
        <NavLink className="nav-link"  to="/Snacks">Snacks</NavLink>
        <NavLink className="nav-link"  to="/Teatime">Teatime</NavLink>
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
          <MyCookbook book = {book} removeFromBook = {setBook} />
        </Route>
        <Route path="/searchpage" exact>
          <SearchPage book={book} setBook = {setBook}/>
        </Route>
        <Route path="/:name" exact>
          <OveralDisplay book={book} setBook = {setBook}  />
        </Route>
      </Switch>
    </Router>

    

    </div>
  );
}

export default App;
