import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FeedbackPage = ({data}) => {
  return (

  <Layout pageInfo={{ pageName: "Feedback" }}>
    <SEO title="Home" keywords={[`intergenerational`, `testimonials`, `feedback`, 'friendly', 'happy']} />
    <Container className="text-left">

      <Row>
        <Col>
            {data.allContentfulFeedback.edges.map(({ node }) => (
            <div>
              <h3 class="para-heading">
                {node.providerName}
              </h3>

              <div class="para-text" dangerouslySetInnerHTML={{ __html: node.feedbackMarkdown.childMarkdownRemark.html }} />
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
      allContentfulFeedback(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            contentful_id
            providerName
            feedbackMarkdown {
              childMarkdownRemark {
                html
              }
            }
            feedbackAdded
          }
        }
      }
    }`


export default FeedbackPage

