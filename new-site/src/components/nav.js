import React from "react"
import { Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavigationBar() {
  return (
    <Nav class="navbar navbar-expand-lg px-0 py-0">
      <a class="navbar-brand button px-5" style={{
        	fontFamily: `Cinzel, serif`,
          letterSpacing: `0.25rem`,
      }} href="#brand">
        GAUTAM BAJAJ
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon">
          <FontAwesomeIcon
            icon={faBars}
            style={{color:`#AAA`, fontSize:`30px`}} 
          />
        </span>
      </button>
      <div class="collapse navbar-collapse px-0" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link main button px-5" href="#writing">WRITING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link main button px-5" href="#projects">PROJECTS</a>
          </li>
        </ul>
      </div>
	  </Nav>
  )
}