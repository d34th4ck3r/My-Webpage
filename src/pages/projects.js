import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

export default function ProjectsPage({data}) {
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
        {data.github.viewer.repositories.nodes.map( (node) => (
          <p>
          {node? node.name : "asd"}
          </p>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query GithubQuery {
  github {
    viewer {
      name
      repositories(last: 20) {
        nodes {
          name
        }
      }
    }
  }
}
`