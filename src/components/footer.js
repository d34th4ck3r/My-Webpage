import React from "react"

export default function Footer(){

  return (
    <footer className="mt-auto w-100" style={{
      backgroundColor: `#111`,
      color: `#444`,
      fontSize: `12px`,
      height: `30px`
    }}>
      <div className="float-left h-100 px-2 d-flex align-items-center">
        <span >© <script>document.write(new Date().getFullYear())</script> Gautam Bajaj</span>
      </div>
      <div className="float-right h-100 px-2 d-flex align-items-center">
        Inspired From: 
        <a href="https://www.ybrikman.com/" target="_blank" rel="noopener noreferrer" className="col dark-gray width-120 py-2 px-1" style={{
          color: `#444`
        }}>
          <span>	
          Yevgeniy Brikman
          </span>
        </a>
      </div>
	  </footer>
  )
}