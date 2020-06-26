import React from "react"
import { graphql } from "gatsby"

export default function Microsvc({data}){
  return (
    <div>
      {data.allRestApi.edges[0].node.name}<br/>
      {data.allRestApi.edges[0].node.desc}
    </div>
  )
}

export const query = graphql`
query {
  allRestApi {
    edges {
      node {
        name
        desc
      }
    }
  }
}
`