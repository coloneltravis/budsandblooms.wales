import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcePacksPage = ({data}) => {
  return (

  <Layout pageInfo={{ pageName: "Resource Packs" }}>
    <SEO title="Home" keywords={[`intergenerational`, `resource packs`, `instructions`, 'craft', 'happy']} />
    <Container className="text-left">

      <Row>
        <Col>
            {data.allContentfulResourcePacks.edges.map(({ node }) => (
            <div>
                <Link className="para-heading" to={"/" + node.slug}>
                <span class="resource">
                  {node.resourceTitle}
                </span> 
                <span class="information">
                  {node.sessionDate}
                </span>
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
      allContentfulResourcePacks(sort: {fields: sortOrder, order: ASC}, filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            resourceTitle
            sortOrder
            slug
            sessionDate(formatString: "MMMM YYYY")
          }
        }
      }
    }`


export default ResourcePacksPage

