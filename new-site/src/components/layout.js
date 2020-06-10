import React from "react"
import NavigationBar from "./nav"
import "./layout.css"
import Header from "./header"

const Layout = ({ headerData, children }) => {
  return (
    <>
      <NavigationBar />
      { headerData &&
        <Header>
          {headerData}
        </Header>
      }
      {children}
    </>
  )
}

export default Layout
