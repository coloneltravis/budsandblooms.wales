require("dotenv").config({
  path: '.env.development',
});

module.exports = {
  siteMetadata: {
    title: `Buds and Blooms Intergenerational Groups`,
    description: `A non-profit group for all generations in care homes and day centres.`,
    author: `Jake Bourne`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/src/content`,
        },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `budsandblooms-intergenerational-groups`,
        short_name: `buds-and-blooms-wales`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.BUDSANDBLOOMS_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "250378776",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 100,
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "budsandblooms.wales",
      }
    },
  ],
}
