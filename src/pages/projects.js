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
        Need help with AI or Architecture? <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6D%61%69%6C%40%67%61%75%74%61%6D%62%61%6A%61%6A%2E%63%6F%6D"  target="_blank" rel="noopener noreferrer">
        Reach out to me.
        </a>
      </h4>
    </div>
    }
    >
      <SEO title="Projects" />
      <div className="mx-auto my-5" style={{
        width: `50%`
      }}>
        {data.github.viewer.repositories.nodes.map( (node) => (
        <div className="my-3">
        { node.description ?
        <div>
          <div className="mx-1">
            <div className="mx-auto d-flex align-items-center">
              <div className="align-items-center">
                <a href={node.url} className="text-decoration-none">
                  <h5 className="align-items-center">
                    {node.name}
                  </h5>
                </a>
              </div>
              <div className="align-items-center ml-auto" style={{
                fontSize: `13px`,
                color: `#999`
              }}>
                {node.languages.nodes.map( (language) => (
                  <span className="mx-2">{language.name}</span>
                ))}
              </div>
            </div>
            <div className="my-2" style={{
                fontSize: `15px`,
                color: `#AAA`
              }}>
              {node.description}
            </div>
          </div>
          <div>
            <hr style={{
              backgroundColor: `white`,
            }}/>
          </div>
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
      repositories(first: 30, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
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