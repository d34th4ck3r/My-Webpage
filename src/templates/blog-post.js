import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { ReactTinyLink } from 'react-tiny-link'

const shortcodes = { Link, ReactTinyLink } // Provide common components here


export default function BlogPost({data}) {
  const post = data.mdx
  return (
    <Layout
    headerData={
      <div>
        <div className="clearfix mx-5">
          <h1 style={{
            margin: "0 auto",
            maxWidth: "900px",
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.frontmatter.title}
          </h1>
          <div style={{
            color: `#AAA`,
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.parent.modifiedTime}
        </div>
        </div>
      </div>
    }
    >
      <div style={{
        margin: "0 auto",
        maxWidth: "700px",
        fontFamily: "Noto Serif TC, serif",
        fontSize: "18px",
        }} className="my-5">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      timeToRead
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`
