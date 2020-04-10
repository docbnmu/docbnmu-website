require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `University Department of Chemistry`,
    siteTitleAlt: `Department of Chemistry, BNMU.`,
    siteHeadline: `University Department of Chemistry, B. N. Mandal University.`,
    siteUrl: `https://docbnmu.in`,
    siteDescription: `Bhupendra Narayan Mandal University is at the district headquarters, Madhepura. It acts as an affiliating institution and offers undergraduate, graduate and PhD programs through its constituents, affiliated colleges, and institutes in Madhepura and nearby cities.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
  },
  plugins: [
    {
    resolve: `@lekoarts/gatsby-theme-minimal-blog`,
    options: {
      navigation: [
        {
          title: `Notice`,
          slug: `/notice`,
        },
        {
          title: `Syllabus`,
          slug: `/syllabus`,
        },
        {
          title: `Faculty`,
          slug: `/faculty`,
        },
        {
          title: `Statistics`,
          slug: `/statistics`,
        },
        {
          title: `Photo Gallery`,
          slug: `/photos`,
        },
        {
          title: `Alumni Association of Chemistry`,
          slug: `/alaschem`,
        },
        {
          title: `About`,
          slug: `/about`,
        },
      ],
    },
  },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `University Department of Chemistry`,
        short_name: `Dept. of Chem.`,
        description: `University Department of Chemistry at Bhupendra Narayan Mandal University (BNMU), Madhepura`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#19212c`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
         icon: './static/logo.svg',
         cache_busting_mode: 'none'
      }
   },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
