import React  from 'react'

import {Navbar,Nav} from 'react-bootstrap'


import {NavbarStyle,BarStyle} from './style'

export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
            <Nav.Link href="/home"  rel="noreferrer" id="home">
                <i>Home</i>
            </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button" onClick={changeNavbarIcon}>
              <BarStyle>
                <i className="bi bi-list icon"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/notice-of-day" rel="noreferrer" >Notice of Day</Nav.Link>
                <Nav.Link href="/search" rel="noreferrer">Search</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}

function changeNavbarIcon() {
    let iconButton = document.querySelector(".icon")

   if(iconButton.classList.contains("bi-list")){
        iconButton.classList.remove("bi-list")
        iconButton.classList.add("bi-x")
   }else{
    iconButton.classList.add("bi-list")
    iconButton.classList.remove("bi-x")
   }
}