import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.relativePath)
  ), [ data, src ])

  return (
    <Img
      fluid={match.node.childImageSharp.fluid}
      {...props}
    />
  )
}

export default Image
