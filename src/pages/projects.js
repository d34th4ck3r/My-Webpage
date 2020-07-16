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
        width: `750px`
      }}>
        {data.github.viewer.repositories.nodes.map( (node) => (
        <div className="my-3">
        { node.languages.nodes && node.description ?
        <div>
          <div className="clearfix mx-auto">
            <div className="float-left">
              <a href={node.url}>
                <h5 style={{
                  color: `#AAA`
                }}>
                  {node.name}
                </h5>
              </a>
            </div>
            <div className="float-right my-1" style={{
              fontSize: `10px`,
              color: `#999`
            }}>
              {node.languages.nodes.map( (language) => (
                <span className="mx-2">{language.name}</span>
              ))}
            </div>
          </div>
          <div>
            {node.description}
          </div>
          <hr style={{
            backgroundColor: `white`,
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