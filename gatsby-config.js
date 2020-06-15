module.exports = {
  siteMetadata: {
    title: `TOTALCROSS`,
    description: `Open Source GUI Creator For Embedded, Mobile... Everything!!`,
    author: `NATHALIE RISBAKK AND VICTORIA INGRID`,
  },
  plugins: [
    "gatsby-theme-docz",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/imgs/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "1234567",
        respectDNT: true,
        productionOnly: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Pacifico",
            "Poppins:300,500,700,800",
            "Roboto:100,200,300,400,500",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1858160,
        sv: 6,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
