// code for generating slug for each blog post
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node, //shorthand syntax to set node property equal to variable of same name
      name: "slug",
      value: slug,
    })
  }
}

//create new page for every new post
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //2. Get markdown data
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      //3. Create new pages
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`, //dynamic based off of slug each post has
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
