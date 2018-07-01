module.exports = {
  siteMetadata: {
    title: `netBloggen`,
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
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify'
  ],
}