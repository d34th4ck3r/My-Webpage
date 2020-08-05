import React from "react"
import Layout from "../components/layout"
import { auto } from "@popperjs/core"


export default function BlogPost({data}) {
  const post = data.markdownRemark
  return (
    <Layout
    headerData={
      <div>
        <div className="clearfix mx-5">
          <h1 className="page-title">
            {post.frontmatter.title}
          </h1>
        </div>
      </div>
    }
    >
      <div dangerouslySetInnerHTML={{__html: post.html}} style={{
        margin: "0 auto",
        maxWidth: "700px",
      }} className="my-5"></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
