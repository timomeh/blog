module.exports = {
  siteMetadata: {
    title: 'timomeh'
  },
  plugins: [
    'gatsby-plugin-glamor',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    'gatsby-transformer-remark'
  ]
}
