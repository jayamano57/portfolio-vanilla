import htmlCssJsImg from "../media/html-css-js.png";
import personalSiteImg from "../media/personal-site.png";
import nodejsImg from "../media/nodejs.png";
import expressjsImg from "../media/expressjs-icon.png";
import babelImg from "../media/babel.png";
import webpackImg from "../media/webpack.png";
import spLogo from "../media/sp-logo.png";
import reactImg from "../media/React-01.png";
import bootstrapImg from "../media/bootstrap.png";
import mssqlImg from "../media/ms_sql.png";
import placeholderImg from "../media/placeholder-img.png";
import sassImg from "../media/sass.png";
import materialUIImg from "../media/material-ui.png";
import jqueryImg from "../media/jquery.png";
import yelpImg from "../media/yelp.png";

export const data = {
  projects: [
    {
      title: "Personal Site",
      name: "personal",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: personalSiteImg,
      technologies: [
        {
          url: htmlCssJsImg,
          name: "html | js | css"
        },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: babelImg, name: "babel" },
        { url: webpackImg, name: "webpack" }
      ],
      shortDescription: "A short description for my personal site goes here",
      description: "personal site description",
      gitHub: "https://github.com/jayamano57/jayamano-2"
    },
    {
      title: "Sellers Place",
      name: "sellers",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: spLogo,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: bootstrapImg, name: "Bootstrap" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: mssqlImg, name: "sql server" }
      ],
      shortDescription: "A short description for sellers place goes here",
      description: "sellers place description"
    },
    {
      title: "McMacro",
      name: "mcmacro",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: placeholderImg,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: sassImg, name: "Sass" },
        { url: materialUIImg, name: "Material UI" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: jqueryImg, name: "jQuery" },
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
      screenshot: placeholderImg,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: yelpImg, name: "Yelp API" },
        { url: "", name: "Material Kit" }
      ],
      shortDescription: "A short description for my foodr goes here",
      description: "foodr app description"
    }
  ]
};
