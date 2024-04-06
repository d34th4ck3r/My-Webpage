import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function WritingPage({data}) {
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
      <SEO title="Writing" description="Articles about my epiphanies." />
      <div className="mx-3 mx-md-auto my-5" style={{
        maxWidth: "800px"
      }}>
        {data.allMdx.edges.map( ({node}) => (
          <div key={node.frontmatter.title}>
            <div className="mx-1">
              <div>
                  <Link to={node.fields.slug} className="text-decoration-none">
                    <h5 className="align-items-center">
                      {node.frontmatter.title}
                    </h5>
                  </Link>
              </div>
              <div style={{
                  fontSize: `13px`,
                  color: `#999`
              }}>
                {node.frontmatter.tags.map( (tag) => (
                  <span className="mr-2" key={tag}>
                    <u>{tag}</u>
                  </span>
              ))}
              </div>
              { node.frontmatter.thumbnail ?
                <div className="container-fluid my-2" style={{
                    fontSize: `15px`,
                    color: `#AAA`
                  }}>
                  <div className="row">
                    <div className="col-mx-auto my-1" >
                      <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} style={{width: "200px", height: "100px"}} />
                    </div>
                    <div className="col" style={{
                      maxHeight: `110px`,
                      overflow: `hidden`,
                    }}>
                      {node.excerpt}
                    </div>
                  </div>
                </div>
              :
                <div className="my-2" style={{
                  fontSize: `15px`,
                  color: `#AAA`
                }}>
                  {node.excerpt}
                </div>
              }
            </div>
            <div>
              <hr style={{
                backgroundColor: `white`,
              }}/>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query Articles {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          tags
          thumbnail {
            childImageSharp {
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        parent {
          ... on File {
            modifiedTime
            birthTime
          }
        }
        excerpt(pruneLength: 400)
        fields {
          slug
        }
      }
    }
  }
}`