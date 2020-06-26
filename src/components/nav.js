import React from "react"
import { Link } from "gatsby"
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { SlideDown } from "react-slidedown";


export function MyDropdown(props) {
  return (
    <SlideDown className={'testing'} transitionOnAppear={false}>
      {props.open ? props.children : null}
    </SlideDown>
  )
}

export default function NavigationBar() {

  return (
    <Navbar className="px-0 py-0" expand="lg" style={{
      borderBottom: `1px solid white`,
      borderColor: `rgb(111,111,111)`,
    }}>
      <Link className="navbar-brand button px-5" style={{
        color: `white`,
        fontFamily: `Cinzel, serif`,
        letterSpacing: `0.25rem`,
      }} href="/">
        GAUTAM BAJAJ
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="button" >
        <FontAwesomeIcon
          icon={faBars}
          style={{color:`#AAA`, fontSize:`30px`}}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link main button px-5" to={'/writing'} style={{color: `white`}}>
              WRITING
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link main button px-5" to={'/projects'} style={{color: `white`}}>
              PROJECTS
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}