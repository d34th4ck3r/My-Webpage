/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
  	title: `Pandas Eating Lots`,
  	description: `Testing out Gatsby`,
  	author: `gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      	name: `src`,
      	path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsybyJS`,
        short_name: `GJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
