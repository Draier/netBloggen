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
            description
            date
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
        component: postTemplate,
      })
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    }
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/search/)) {
    page.matchPath = "/search/:path";

    // Update the page.
    createPage(page);
  }
};
