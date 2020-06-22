import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PersonalInfo from "../components/personal-info"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Typewriter from 'typewriter-effect';

export default function IndexPage({data}) {

  return (
    <Layout
    headerData={
      <div>
      <Img fluid={data.file.childImageSharp.fluid} style={{width: "100px"}} className="mx-auto border border-secondary rounded-circle" />
      <div className="clearfix">
        <a href="https://gautambajaj.com/" className="text-decoration-none">
        <h1 className="page-title">
        Gautam Bajaj
        </h1>
        </a>
      </div>
      <h3 className="subtitle" style={{color: `#AAA`}}>
      <Typewriter onInit={(typewriter) => {
        typewriter.typeString('Software Architect')
          .pauseFor(2500)
          .deleteChars(9)
          .typeString('Engineer')
          .pauseFor(2500)
          .typeString('ing Manager')
          .pauseFor(2500)
          .deleteAll()
          .typeString('Data Scientist')
          .pauseFor(2500)
          .start();
      }} options={{
        loop: true,
      }} />
      </h3>
      <h4 className="subtitle">
        Deep Learning & Microservices
      </h4>
    </div>
    }
    >
      <SEO title="Home" />
      <PersonalInfo />
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
