module.exports = {
  siteMetadata: {
    title: `netBloggen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog_posts`,
        name: 'blog_posts',
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify'
  ],
}