import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css"; // Ensure you have this file for custom styles if needed

export default function Header({isDarkMode, setIsDarkMode}) {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };



  // Choose image based on theme
  const logoSrc = isDarkMode
    ? "../assets/moon.png" // Dark mode image
    : "../assets/sun.png"; // Light mode image


  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: isDarkMode && '#ffffff'}}/>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end align-items-center pr-5"
        >
          <Nav className="ml-auto" >
            <Nav.Link href="#link1" className="nav-links-fonts" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}>
              Home
            </Nav.Link>
            <Nav.Link href="#link2" className="nav-links-fonts nav-ps" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}> 
              About
            </Nav.Link>
            <Nav.Link href="#link3" className="nav-links-fonts nav-ps" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#link4" className="nav-links-fonts nav-ps" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}>
              Projects
            </Nav.Link>
            <Nav.Link href="#link5" className="nav-links-fonts nav-ps" style={{ color: isDarkMode ? '#ffffff' : '#000000'}}>
              Contact
            </Nav.Link>
            <Nav.Link href="#link5" className="ps-git-5">
            { isDarkMode ? <img src={"../assets/d1.svg"}/> : <i className="fa-brands fa-github x-large"></i>}

              
            
            
            
            </Nav.Link>
            <Nav.Link href="#link5">
            { isDarkMode ? <img src={"../assets/d2.svg"}/> : <i className="fa-brands fa-twitter x-large"></i>}


            </Nav.Link>
            <Nav.Link href="#link5">
            { isDarkMode ? <img src={"../assets/d3.svg"}/> :  <i className="fa-brands fa-linkedin x-large"></i>}
           
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#home">
          <img
            src={logoSrc} // Dynamic image source
            alt="Brand Logo"
            className="d-inline-block align-top"
            style={{ maxHeight: "26px", width: "26px" }} // Adjust based on your needs
            onClick={toggleTheme}
            
          />
          {isDarkMode }
        </Navbar.Brand>
   
      </Container>
    </Navbar>
  );
}
