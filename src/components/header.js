import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => {

  const data = useStaticQuery(
    graphql`
    query {
        file(relativePath: { eq: "budsandblooms-icon.png" }) {
            childImageSharp {
                fixed (width: 90) {
                    ...GatsbyImageSharpFixed
                }
            }
        }

    }`
  )

  return (
  <header>

    <div
      style={{
        maxWidth: 960,
        padding: `1.3rem 1.0875rem`,
      }}
    >
      <Img fixed={data.file.childImageSharp.fixed} />
      <h1 className="site-heading link-no-style">
          {siteTitle}
      </h1>
    </div>
  </header>
)
}

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }

  Header.defaultProps = {
    siteTitle: ``,
  }

export default Header
