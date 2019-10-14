import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (

  <Layout pageInfo={{ pageName: "Events" }}>
    <SEO title="Home" keywords={[`intergenerational`, `parents`, `children`, 'penarth', 'barry']} />
    <Container className="text-left">

      <Row>
        <Col md="8">
           
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <span>
                {node.frontmatter.date}
              </span>
              <Link to={node.fields.slug}>
              <h3 class="para-heading">
                {node.frontmatter.title}{" "}
              </h3>
              <p class="para-text">{node.excerpt}</p>
              </Link>
            </div>
            ))}

        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "event"}}}) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "Do MMMM YYYY")
              }
              fields {
                slug
              }
              excerpt
            }
        }
    }
}`

export default IndexPage
