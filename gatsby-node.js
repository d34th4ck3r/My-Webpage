/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const readingTime = require(`reading-time`)
const {createFilePath} =  require(`gatsby-source-filesystem`)
const path = require(`path`)
// const {execa} = require('execa')
const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const { createNodeField } = actions

  if(node.internal.type === `Mdx`){

    const slug = createFilePath({node, getNode})
    // const { stdout } = execa.sync('git', [
    //   'log',
    //   '-1',
    //   '--pretty=format:%aI',
    //   '--',
    //   node.fileAbsolutePath
    // ])
    const { stdout } = "2024-03-31T18:30:50+09:00"

    createNodeField({
      node,
      name: `slug`,
      value: `/writing` + slug,
    })
    createNodeField({
      node,
      name: `lastUpdated`,
      value: new Date(stdout),
    })
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }


  console.log("IS THIS GETTING PRINTED?")
  // Create blog post pages.
  const posts = result.data.allMdx.nodes
  console.log(posts[0].frontmatter.slug) 

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: '/writing' + node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if(stage === "build-html"){
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: `${process.env.PWD}` + '/node_modules/react-tiny-link/',
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }