'use strict'

module.exports = {
  siteMetadata: {
    title: 'Jose Peleteiro',
    description: 'Personal space of Jose Peleteiro.',
    keywords: 'jose, peleteiro, vcard, contatos, contacts, email, whatsapp',
    siteUrl: 'https://peleteiro.net',
    author: {
      name: 'Jose Peleteiro',
      url: 'https://peleteiro.net',
      email: 'jose@peleteiro.net',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `root`,
              path: `${__dirname}/src/root`,
            },
          },
          {
            resolve: 'gatsby-plugin-copy-files-enhanced',
            options: {
              source: `${__dirname}/src/root`,
              destination: '/',
              purge: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
}
