import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"

export default ({ data }) => {
  const pack = data.contentfulResourcePacks

  return (
    <Layout pageInfo={{ pageName: pack.resourceTitle }}>

    <Container>
      <Row>
        <Col>
          <div class="para-text" dangerouslySetInnerHTML={{ __html: pack.instructions.childMarkdownRemark.html }} />
        </Col>
      </Row>
    </Container>

    <Container>
      {pack.activities != null && pack.activities.map(( activity ) => (      
        <div>
        <Row>
          <Col><h3>{activity.activityTitle} </h3> </Col>
        </Row>
        <Row>
          <Col md={8}>
            <div class="para-text" dangerouslySetInnerHTML={{ __html: activity.activityDescription.childMarkdownRemark.html }} />
          </Col>
          <Col md={4}>
              <img src={activity.activityImage.fluid.src} alt={activity.activityTitle} />
          </Col>
        </Row>
        </div>
      ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulResourcePacks(slug: {eq: $slug})
    {
      resourceTitle
      instructions {
        childMarkdownRemark {
          html
        }
      }
      activities {
        activityTitle
        activityDescription {
          childMarkdownRemark {
            html
          }
        }
        activityImage {
          fluid (maxWidth: 200) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }`
