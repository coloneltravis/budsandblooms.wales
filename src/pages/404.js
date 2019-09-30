import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageInfo={{ pageName: "Oh no! The page you requested was not found." }}>
    <SEO title="404: Not found" />
    <p>You may have mis-typed or mis-spelt part of the URL</p>
  </Layout>
)

export default NotFoundPage
