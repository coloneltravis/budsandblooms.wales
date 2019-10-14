/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`
  )

    return (

        <Container>
          <Container fluid className="px-0 main">
            <Row noGutters className="justify-content-center">
              <Col>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Col>
            </Row>
            <Navbar pageInfo={pageInfo} />
            <Row noGutters>
              <Col>
                <Container className="mt-5">
                  <h1 className="para-heading">{pageInfo.pageName}</h1>
                  <main>{children}</main>
                </Container>
              </Col>
            </Row>
          </Container>

          <Container fluid className="px-0">
            <Row noGutters>
              <Col className="footer-col">
                <footer>
                  <span>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </span>
                </footer>
              </Col>
            </Row>
          </Container>
        </Container>
    )
  }

export default Layout
