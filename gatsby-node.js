const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/BlogPost.js');  

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate
      })
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
