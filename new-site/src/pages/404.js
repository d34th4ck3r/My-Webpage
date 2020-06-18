import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
      margin: `0 auto`,
      maxWidth: `700px`,
    }}
    >
      <h1>404</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
