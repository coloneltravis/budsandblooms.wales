import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SensoryPlayPage = ({data}) => {
  return (

  <Layout pageInfo={{ pageName: "Sensory Play" }}>
    <SEO title="Home" keywords={[`intergenerational`, `sensory play ideas`, `senses`, 'motor skills', 'happy']} />
    <Container className="text-left">

      <Row>
        <Col>
            {data.allContentfulSensoryPlay.edges.map(({ node }) => (
            <div>
                <Link className="para-heading" to={"/" + node.slug}>
                <span class="resource">
                  {node.sensoryPlayTitle}
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
      allContentfulSensoryPlay(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            sensoryPlayTitle
            slug
          }
        }
      }
    }`


export default SensoryPlayPage

