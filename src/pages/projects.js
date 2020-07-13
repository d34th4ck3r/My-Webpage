import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function ProjectsPage() {
  return (
    <Layout
    headerData={
    <div>
      <div className="clearfix">
        <Link to={'/projects'} className="text-decoration-none">
          <h1 className="page-title">
            Projects
          </h1>
        </Link>
      </div>
      <h4 className="subtitle" style={{color: `#AAA`}}>
        These are my Open Source Projects.
      </h4>
    </div>
    }
    >
      <SEO title="Projects" />
      <div className="m-auto">
        <h1>Work In Progress</h1>
        <p> I plan to update this place with a list of projects I have worked on</p>
      </div>
    </Layout>
  )
}