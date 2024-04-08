import React from "react"
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import SEO from "../components/seo"

const shortcodes = { Link }

export default function BlogPost({data , children}) {
  const post = data.mdx
  return (
    <Layout
    headerData={
      <div>
        <div className="clearfix mx-5">
          <h1 style={{
            margin: "0 auto",
            maxWidth: "1000px",
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.frontmatter.title}
          </h1>
          <div style={{
            color: `#AAA`,
            fontFamily: "Julius Sans One, sans-serif",
          }}>
            {post.frontmatter.updated_at}
        </div>
        </div>
      </div>
    }
    >
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div style={{
        maxWidth: "800px",
        fontFamily: "Noto Serif TC, serif",
        fontSize: "18px",
        }} className="my-5 mx-3 mx-md-auto">
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        updated_at
      }
      excerpt(pruneLength: 400)
    }
  }
`
