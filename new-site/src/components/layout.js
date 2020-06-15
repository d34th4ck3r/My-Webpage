import React from "react"
import NavigationBar from "./nav"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"

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
      <Footer />
    </>
  )
}

export default Layout
