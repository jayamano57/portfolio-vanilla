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
import workInProgress from "../media/work-in-progress.jpg";
import mcmacroImg from "../media/mcmacro.png";
import sassImg from "../media/sass.png";
import materialUIImg from "../media/material-ui.png";
import jqueryImg from "../media/jquery.png";
import yelpImg from "../media/yelp.png";

export const data = {
  projects: [
    {
      title: "Personal Site",
      name: "personal",
      isComplete: true,
      demo: "",
      screenshot: personalSiteImg,
      technologies: [
        {
          url: htmlCssJsImg,
          name: "html | js | css",
        },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: babelImg, name: "babel" },
        { url: webpackImg, name: "webpack" },
      ],
      shortDescription:
        "This completely vanilla site you are currently looking at. Mmm Yummy.",
      description:
        "What you see before your eyes is my personal portfolio website, made with 100% vanilla CSS, HTML, and JavaScript. No frameworks and no libraries -- well, apart from my mailer package and webpack, but you get the idea. With this project, I not only wanted to showcase my pure css/html/js abilities, but also to challenge myself by stripping me of my tools and taking me back to the very basics, with good ol' document.querySelector. As far as my backend goes, I am using node.js and express.js to handle my email sending. Nothing fancy here, just one job. Lastly, I am using Webpack to bundle my files and spit out a production ready dist folder.",
      gitHub: "https://github.com/jayamano57/jayamano-2",
    },
    {
      title: "Sellers Place",
      name: "sellers",
      isComplete: true,
      demo: "https://www.youtube.com/embed/-RCHvDogDCA",
      screenshot: spLogo,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: bootstrapImg, name: "Bootstrap" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: mssqlImg, name: "sql server" },
      ],
      shortDescription:
        "A SaaS application that enables craft vendors and event promoters to connect and engage online via a dynamic and global marketplace.",
      description:
        "Seller's Place is a SaaS application that helps event vendors and promoters to connect, but also it is also my first, real application project I've worked on. As a full-stack developer for Seller's Place, my fingerprints are all over this project as I built many of the frontend React components, as well as helped create API endpoints and Microsoft SQL Server stored procedures in the backend. As far as technologies used, we worked in React.js in the frontend, Node.js and MSSQL in the backend. As seen in the demo, some of the features I worked on in this project were the 'Invite Email' feature, the online payment service, transaction history log, product type management center, and the venue details page. The 'Invite Email' service uses SendGrid API to allow event promoters to reach out to specific vendors and send an invitation email to them directly. The online payment service utilizes Node Stripe API to ensure secure transactions. The transaction history log uses data regarding a specific user's payment history pulled from SQL database to create a paginated visual log of their transactions. Additionally, I designed and developed the MSSQL stored procedures, Node.js API endpoints, and front-end services (using Axios) to receive this data. The Product Type Management Center, was created for users to manage their product types on a single page. Editing for this page was done by an inline editing component custom designed for convenience and better UX. Lastly, the Venue Details page was built to display a targeted venue. It uses the Google Maps API and react-geocode to render a map of the venue for the user to view. Additionally, I created stored procedures in MSSQL to grab data for the six most recent events of said venue.",
    },
    {
      title: "McMacro",
      name: "mcmacro",
      isComplete: true,
      demo: "https://www.youtube.com/embed/WmFY3aNHAPM",
      screenshot: mcmacroImg,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: sassImg, name: "Sass" },
        { url: materialUIImg, name: "Material UI" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: jqueryImg, name: "jQuery" },
        { url: "", name: "Cheerio.js" },
      ],
      shortDescription:
        "Diet time! Get a list of popular restaurants and the items from each that fulfill your macronutrient needs.",
      description:
        "This is my webscraping project I built for days when I was too lazy to cook, but still wanted to reach my macronutrient goals for the day. I am using React.js as the frontend framework, Material-UI for the accordion component, and Chart.js to render the dynamic pie chart. For the data, I am using Cheerio.js in Node.js to scrape a very convinient website, fastfoodmacros.com. It's no surpise here that most of my application magic occurs in the Node.js/Express.js environemnt as I use user input data to filter through the scraped data, and return a list of restaurants and items that match the given criteria. I look forward to booting this baby up next January for my annual fitness resolution that usually lasts until March.",
      gitHub: "https://github.com/jayamano57/mcmacro",
    },
    {
      title: "Foodr",
      name: "foodr",
      isComplete: false,
      demo: "https://gifer.com/embed/J3Tm",
      screenshot: workInProgress,
      technologies: [
        { url: reactImg, name: "React.js" },
        { url: nodejsImg, name: "node.js" },
        { url: expressjsImg, name: "express.js" },
        { url: yelpImg, name: "Yelp API" },
        { url: "", name: "Material Kit" },
      ],
      shortDescription:
        "Ever hungry, but unsure what you're hungry for? Here's Foodr. Swipe left or right based on pictures of food from restaurants. No worries about failed right swipes here 😉",
      description:
        "This application was a product of an idea I had long before I had aspirations of becoming a developer. Essentially, it is Tinder, but for food. And the best part is, swiping right has a 100% match success rate.",
    },
  ],
};
