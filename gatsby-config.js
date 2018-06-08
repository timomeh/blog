module.exports = {
  siteMetadata: {
    title: 'timomeh',
    description: 'Hi, ich bin Timo Mämecke, Software-Entwickler aus Köln.',
    siteUrl: 'https://timomeh.de'
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/pages`,
        name: 'pages'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: '<!-- more -->',
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
              showCaptions: true,
              quality: 80
            }
          },
          'gatsby-remark-responsive-iframe',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '¿'
            }
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-widows'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'timomeh',
        short_name: 'timomeh',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#B7FFDE',
        display: 'minimal-ui',
        icon: 'src/static/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.html.split('<!-- more -->')[0],
                  url:
                    site.siteMetadata.siteUrl +
                    '/' +
                    edge.node.frontmatter.path,
                  guid:
                    site.siteMetadata.siteUrl +
                    '/' +
                    edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: {
                  frontmatter: { draft: { ne: true } }
                  fileAbsolutePath: { glob: "**/posts/**" }
                }
              ) {
                edges {
                  node {
                    html
                    frontmatter {
                      title
                      date
                      path
                    }
                  }
                }
              }
            }
          `,
            output: '/feed.xml'
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#FFB7F0',
        showSpinner: false
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links'
  ]
}
