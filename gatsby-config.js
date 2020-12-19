/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:"BackRoads",
    description:"Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author:"@Swann",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: false
      },
    },
  ],
}