import React from "react";
import Scrollspy from "react-scrollspy";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/MS.png";
import "./my-navbar.styles.css";



const MyNavbar = () => {
  return (
    <div>
      <Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle data-spy="scroll" data-target="#mainNavbar" data-offset="10" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Scrollspy
      items={ ['home', 'about', 'skills','experience', 'projects','contact'] }
      currentClassName="item--active"
      className="inner"
      style={{
        fontWeight: 300
      }}
      offset={ -50 }
      onUpdate={
        (el) => {
          console.log(el)
        }
      }
    >
      
              <Nav.Link className='link' id="navHome" href="#home">Home</Nav.Link>
              <Nav.Link className='link' id="navAbout" href="#about">About</Nav.Link>
              <Nav.Link className='link' id="navSkills" href="#skills">Skills</Nav.Link>
              <Nav.Link className='link' id="navExperience" href="#experience">Experience</Nav.Link>
              <Nav.Link className='link' id="navProjects" href="#projects">Projects</Nav.Link>
              <Nav.Link className='link' id="navContact" href="#contact">Contact</Nav.Link>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
