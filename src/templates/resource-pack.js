import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const pack = data.contentfulResourcePacks
  return (
    <Layout pageInfo={{ pageName: pack.resourceTitle }}>
      <div>
        <div class="para-text" dangerouslySetInnerHTML={{ __html: pack.instructions.childMarkdownRemark.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulResourcePacks(slug: {eq: $slug}) {
      id
      instructions {
        childMarkdownRemark {
          html
        }
      }
      resourceTitle
    }
  }
`