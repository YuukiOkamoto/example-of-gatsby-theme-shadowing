module.exports = {
  siteMetadata: {
    title: `テーマを使ってみる`,
    description: `テーマを使ってみる`,
    author: `Yuuki Okamoto`,
    siteUrl: `https://example-of-gatsby-theme-shadowing.netlify.com`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/it_fitness_jp`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/YuukiOkamoto`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
};
