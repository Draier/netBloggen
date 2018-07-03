module.exports = {
  siteMetadata: {
    title: `netBlogg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog_posts`,
        name: 'blog_posts',
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
            resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
            options: {
                // Fields to index
                fields: [
                    'title',
                    'tags',
                ],
                // How to resolve each field's value for a supported node type
                resolvers: {
                    // For any node of type MarkdownRemark, list how to resolve the fields' values
                    MarkdownRemark: {
                        title: node => node.frontmatter.title,
                        tags: node => node.frontmatter.tags,
                    },
                },
            },
        },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify'
  ],
}