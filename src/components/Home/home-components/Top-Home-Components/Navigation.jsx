import React from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
// import "../css/images"

function Navigation() {
  return (
    <div className= "Navigation">
        <Navbar  fluid collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Navbar.Brand href="#home">Taste The World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

      <NavDropdown title="Cuisine" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.2">American</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Asian</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Caribbean</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">French</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Indian</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Italian</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Japanese</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Mexican</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Middle Eastern</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Nordic</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Diet" id="collasible-nav-dropdown">
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
      </NavDropdown>
      
      <NavDropdown title="Meals" id="collasible-nav-dropdown">
        <NavDropdown.Item to="#action/3.1">Breakfast</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.2">Lunch</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Dinner</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Snacks</NavDropdown.Item>
        <NavDropdown.Item to="#action/3.3">Teatime</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link to="#deets">My Cookbook</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Navigation
