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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-remove-serviceworker`,
  ],
}
