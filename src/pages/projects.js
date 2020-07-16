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
      <div className="mx-auto my-5" style={{
        width: `500px`
      }}>
        {data.github.viewer.repositories.nodes.map( (node) => (
        <div className="my-5">
        { node.languages.nodes && node.description ?
        <div>
          <div className="mx-auto">
            <a href={node.url}>
              <h5 style={{
                color: `#AAA`
              }}>
                {node.name}
              </h5>
            </a>
          </div>
          {/* <ul>
            {node.languages.nodes.map( (language) => (
              <li>#{language.name}</li>
            ))}
          </ul> */}
          <div className="my-3">
            {node.description}
          </div>
          <hr style={{
            color: `white`
          }}/>
        </div>
        : ''}

        </div>
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
      repositories(first: 20, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          languages(last: 10) {
            nodes {
              name
            }
          }
          url
          description
        }
      }
    }
  }
}`