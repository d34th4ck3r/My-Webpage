import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function IndexPage({data}) {
  return (
    <Layout
    headerData={
      <div>
      <a href="#profile-pic">
        <Img fluid={data.file.childImageSharp.fluid} style={{width: "100px"}} className="mx-auto border border-secondary rounded-circle" />
      </a>
      <div class="clearfix">
        <a href="https://gautambajaj.com/" class="text-decoration-none">
        <h1 class="page-title">
        Gautam Bajaj
        </h1>
        </a>
      </div>
      <h3 class="subtitle">
        Software Architect<br />
      </h3>
      <h4 class="subtitle">
        Deep Learning & Microservices
      </h4>
    </div>
    }
    >
      <SEO title="Home" />
      <div style={{color: "white"}} >
      <h1>bodyChisaldren</h1>
      </div>
    </Layout>
  )
}


export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`
