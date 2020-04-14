module.exports = {
  siteMetadata: {
    title: `Breadcast Podcast`,
    description: `Based in Phnom Penh, Cambodia.`,
    author: `Masaya Shida`,
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
