/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {ne: ""}}}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              category
              date
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
    })

    const resultContentful = await graphql(`
    {
      allContentfulResourcePacks(sort: {fields: sortOrder, order: ASC}, filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            resourceTitle
            sortOrder
            slug
            sessionDate
            internal {
              type
            }
            instructions {
              childMarkdownRemark {
                internal {
                  type
                }
                html
              }
            }
          }
        }
      }
    }
    `)
    resultContentful.data.allContentfulResourcePacks.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/resource-pack.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.slug,
        },
      })
    })


    const resultSensory = await graphql(`
    {
      allContentfulSensoryPlay {
        edges {
          node {
            slug
            sensoryPlayTitle
            itemsNeeded {
              childMarkdownRemark {
                internal {
                  type
                }
                html
              }
            }
            instructions {
              childMarkdownRemark {
                internal {
                  type
                }
                html
              }
            }
          }
        }
      }
    }
    `)
    resultSensory.data.allContentfulSensoryPlay.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/sensory-play.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
    })


  }
