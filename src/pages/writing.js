import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

export default function WritingPage() {
  return (
    <Layout
    headerData={
      <div>
        <div className="clearfix">
          <Link to={'/writing'} className="text-decoration-none">
            <h1 className="page-title">
              Writing
            </h1>
          </Link>
        </div>
        <h4 className="subtitle" style={{color: `#AAA`}}>
          Wanna start a discussion? <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%61%69%6C%40%67%61%75%74%61%6D%62%61%6A%61%6A%2E%63%6F%6D"  target="_blank" rel="noopener noreferrer">
          Email me.
          </a>
        </h4>
      </div>
    }
    >
      <SEO title="Writing" />
      <div className="m-auto">
        <h1>Work In Progress</h1>
        <p>I plan to update this place with a list of articles I have written</p>
      </div>
    </Layout>
  )
}