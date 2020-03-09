import personalSiteImg from "../media/personal-site.png";

export const data = {
  projects: [
    {
      title: "Personal Site",
      name: "personal",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: personalSiteImg,
      technologies: [
        {
          url: require("../media/html-css-js.png"),
          name: "html | js | css"
        },
        { url: require("../media/nodejs.png"), name: "node.js" },
        { url: require("../media/expressjs-icon.png"), name: "express.js" },
        { url: require("../media/babel.png"), name: "babel" },
        { url: require("../media/webpack.png"), name: "webpack" }
      ],
      shortDescription: "A short description for my personal site goes here",
      description: "personal site description",
      gitHub: "https://github.com/jayamano57/jayamano-2"
    },
    {
      title: "Sellers Place",
      name: "sellers",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: require("../media/sp-logo.png"),
      technologies: [
        { url: require("../media/React-01.png"), name: "React.js" },
        { url: require("../media/bootstrap.png"), name: "Bootstrap" },
        { url: require("../media/nodejs.png"), name: "node.js" },
        { url: require("../media/expressjs-icon.png"), name: "express.js" },
        { url: require("../media/ms_sql.png"), name: "sql server" }
      ],
      shortDescription: "A short description for sellers place goes here",
      description: "sellers place description"
    },
    {
      title: "McMacro",
      name: "mcmacro",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: require("../media/placeholder-img.png"),
      technologies: [
        { url: require("../media/React-01.png"), name: "React.js" },
        { url: require("../media/sass.png"), name: "Sass" },
        { url: require("../media/material-ui.png"), name: "Material UI" },
        { url: require("../media/nodejs.png"), name: "node.js" },
        { url: require("../media/expressjs-icon.png"), name: "express.js" },
        { url: require("../media/jquery.png"), name: "jQuery" },
        { url: "", name: "Cheerio.js" }
      ],
      shortDescription: "A short description for McMacro goes here",
      description: "mcmacro app description",
      gitHub: "https://github.com/jayamano57/mcmacro"
    },
    {
      title: "Foodr",
      name: "foodr",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: require("../media/placeholder-img.png"),
      technologies: [
        { url: require("../media/React-01.png"), name: "React.js" },
        { url: require("../media/nodejs.png"), name: "node.js" },
        { url: require("../media/expressjs-icon.png"), name: "express.js" },
        { url: require("../media/yelp.png"), name: "Yelp API" },
        { url: "", name: "Material Kit" }
      ],
      shortDescription: "A short description for my foodr goes here",
      description: "foodr app description"
    }
  ]
};
