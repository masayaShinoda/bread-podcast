module.exports = {
  siteMetadata: {
    title: `Bread Podcast`,
    description: `Based in Phnom Penh, Cambodia.`,
    author: `Masaya Shida`,
    copyright: `Bread Design Studios`,
    parent_company_url: `https://www.breaddesignstudio.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Breadcast Podcast`,
        short_name: `Breadcast`,
        start_url: `/`,
        background_color: `#004F80`,
        theme_color: `#004F80`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/blog`, //tells gatsby to source content from filesystem, which is src dir
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
