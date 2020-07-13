module.exports = {
  siteMetadata: {
    title: `Gautam Bajaj`,
    description: `Gautam's internet corner.`,
    author: `@d34th4ck3r`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gautam-bajaj-home-page`,
        short_name: `gautam-bajaj`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: "<token-goes-here>",
        variables: {},
        graphQLQuery: `
        {
          user(login: "d34th4ck3r") {
            id
            repositories(last: 100, orderBy: {direction: DESC, field: CREATED_AT}) {
              edges {
                node {
                  description
                  projectsUrl
                  createdAt
                  name
                  object(expression: "master:README.md") {
                    ... on Blob {
                      text
                    }
                  }
                  languages(last: 100) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `
      }
    },
  ],
}
