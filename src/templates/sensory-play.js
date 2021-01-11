import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

export default ({ data }) => {
  const post = data.contentfulSensoryPlay
  return (
    <Layout pageInfo={{ pageName: post.sensoryPlayTitle }}>

    <h4>You will need...</h4>
    <Container>
      <Row>
        <Col>
          <div class="para-text" dangerouslySetInnerHTML={{ __html: post.itemsNeeded.childMarkdownRemark.html }} />
        </Col>
      </Row>
    </Container>

    <h4>Instructions</h4>
      <Container>
      <Row>
        <Col>
          <div class="para-text" dangerouslySetInnerHTML={{ __html: post.instructions.childMarkdownRemark.html }} />
        </Col>
      </Row>
    </Container>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulSensoryPlay(slug: {eq: $slug})
    {
      sensoryPlayTitle
      itemsNeeded {
        childMarkdownRemark {
          html
        }
      }
      instructions {
        childMarkdownRemark {
          html
        }
      }
    }
  }`
