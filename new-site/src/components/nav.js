import React from "react"
import { Nav, Navbar } from 'react-bootstrap'
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

export default class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

  const show = (this.state.menu) ? "show" : "" ;
  return (
      <Navbar className="px-0 py-0" expand="lg" style={{
        borderBottom: `1px solid white`,
        borderColor: `rgb(111,111,111)`,
      }}>
        <a className="navbar-brand button px-5" style={{
          color: `white`,
          fontFamily: `Cinzel, serif`,
          letterSpacing: `0.25rem`,
        }} href="#brand">
          GAUTAM BAJAJ
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="button" >
          <FontAwesomeIcon
            icon={faBars}
            style={{color:`#AAA`, fontSize:`30px`}}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link main button px-5" href="#writing" style={{color: `white`}}>WRITING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main button px-5" href="#projects" style={{color: `white`}}>PROJECTS</a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}