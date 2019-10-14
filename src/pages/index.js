import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (

  <Layout pageInfo={{ pageName: "Blog" }}>
    <SEO title="Home" keywords={[`intergenerational`, `parents`, `children`]} />
    <Container className="text-left">

      <Row className="justify-content-center my-3">
        <Col md="8">
           
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
              <h3 className="para-heading">
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p className="para-text">{node.excerpt}</p>
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
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "post"}}}) {
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
