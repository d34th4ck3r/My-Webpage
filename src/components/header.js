import React from "react"

export default function Header({children}) {

  return (
    <header
      style={{
        backgroundColor: `#111`,
        borderBottom: `1px solid white`,
        borderColor: `rgb(111,111,111)`,
      }}
      class="text-center align-center py-5"
    >
      {children}
    </header>
  )
}
