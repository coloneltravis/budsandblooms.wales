import React from "react"
import { graphql } from "gatsby"
import { Img } from "gatsby-image"
import { Row, Col, Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (

    <Layout pageInfo={{ pageName: "" }}>
      <Container fluid>
        <SEO title="Home" keywords={[`intergenerational`, `parents`, `children`]} />

        <Row>
        <Col xs md />
          <Col xs md>       
            <img src={data.contentfulAsset.fluid.src} alt={data.contentfulAsset.title} />
          </Col>
          <Col xs md/>
        </Row>

      </Container>
    </Layout>

  )}

export const query = graphql`
    query {
      contentfulAsset(file: {fileName: {eq: "BudsAndBlooms_Teddy.jpeg"}}) {
        file {
          url
        }
        title
        fluid (maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }`

export default IndexPage
