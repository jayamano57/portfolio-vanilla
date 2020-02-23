// ======== ELEMENTS ========
import * as elements from "./elements.js";
console.log(elements);
const navBtn = document.querySelector(".navigation");
const arrowBtn = document.querySelectorAll(".arrow-btn");
const leftArrowBtn = document.querySelector(".left-arrow-btn");
const rightArrowBtn = document.querySelector(".right-arrow-btn");
const card = document.querySelector(".project-card");
const carousel = document.querySelector(".carousel");
const pageDotsContainer = document.querySelector(".page-dots");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const videoEl = modal.querySelector(".video");
const technologiesContainerEl = modal.querySelector(".modal-technologies");
const descriptionEl = modal.querySelector(".modal-details");
const navLink = document.querySelectorAll(".nav-link");

// ======== DATA ========
const data = {
  projects: [
    {
      title: "Personal Site",
      name: "personal",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/personal-site.png",
      technologies: [
        { url: "./media/tech-imgs/html-css-js.png", name: "html | js | css" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/babel.png", name: "babel" },
        { url: "./media/tech-imgs/webpack.png", name: "webpack" }
      ],
      shortDescription: "A short description for my personal site goes here",
      description: "personal site description",
      gitHub: "https://github.com/jayamano57/jayamano-2"
    },
    {
      title: "Sellers Place",
      name: "sellers",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/sp-logo.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/bootstrap.png", name: "Bootstrap" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/ms_sql.png", name: "sql server" }
      ],
      shortDescription: "A short description for sellers place goes here",
      description: "sellers place description"
    },
    {
      title: "McMacro",
      name: "mcmacro",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/sass.png", name: "Sass" },
        { url: "./media/tech-imgs/material-ui.png", name: "Material UI" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/jquery.png", name: "jQuery" },
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
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/yelp.png", name: "Yelp API" },
        { url: "", name: "Material Kit" }
      ],
      shortDescription: "A short description for my foodr goes here",
      description: "foodr app description"
    }
  ]
};

// ======== COMPONENTS ========

// NAVIGATION

const toggleNav = () => {
  navBtn.classList.toggle("open");
};

const scrollToSection = e => {
  const section = e.currentTarget.dataset.section;
  const sectionHeaderEl = document.querySelector(`.${section}`)
    .firstElementChild;
  const currentY = window.pageYOffset;
  const elCoords = sectionHeaderEl.getBoundingClientRect();
  let y;

  switch (section) {
    case "header":
      y = 0;
      break;
    case "about-me":
      y = currentY + elCoords.y - 140;
      break;
    case "projects":
      y = currentY + elCoords.y - 50;
      break;
    case "contact-form":
      y = currentY + elCoords.y - 30;
      break;
    default:
      return;
  }
  window.scroll({
    top: y,
    left: 0,
    behavior: "smooth"
  });
};

// PROJECTS

const carouselWidth = carousel.offsetWidth;
const cardCount = data.projects.length;
const pageCount = Math.ceil(cardCount / 3);
let slideNumber = 1;
let offset = 0;
const maxX = -(Math.floor(cardCount / 3) * carouselWidth);

const renderProjects = () => {
  let projectNum = 1;
  data.projects.map((project, index) => {
    carousel.innerHTML += `
    <div class="project-card project-${projectNum++} ${
      index > 2 ? "hidden" : ""
    }" data-name="${project.name}">
    <figure>
      <img
        class="project-img"
        src="${project.screenshot}"
        alt="placeholder image"
      />
      <figcaption>${project.title}</figcaption>
    </figure>
    <div class="project-description-short">
      ${project.shortDescription}
    </div>
    <button class="more-info-btn">MORE INFO &rarr;</button>
  </div>
`;
  });

  initPageDots();
};

const carouselScroll = e => {
  switch (e.currentTarget.dataset.direction) {
    case "right":
      slideNumber += 1;
      if (offset !== maxX) {
        offset -= carouselWidth;
      }
      break;
    case "left":
      slideNumber -= 1;
      if (offset !== 0) {
        offset += carouselWidth;
      }
      break;
    default:
      return;
  }
  carousel.style.transform = `translateX(${offset}px)`;
  updateCardVisibility();
  showOrHideArrowBtn();
  updatePageDots();
};
const updateCardVisibility = () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(project => {
    project.classList.add("hidden");
  });
  for (let i = 0; i < cardCount; i++) {
    cards[slideNumber * 3 - 3] &&
      document
        .querySelectorAll(".project-card")
        [slideNumber * 3 - 3].classList.remove("hidden");
    cards[slideNumber * 3 - 2] &&
      document
        .querySelectorAll(".project-card")
        [slideNumber * 3 - 2].classList.remove("hidden");
    cards[slideNumber * 3 - 1] &&
      document
        .querySelectorAll(".project-card")
        [slideNumber * 3 - 1].classList.remove("hidden");
  }
};
const showOrHideArrowBtn = () => {
  if (slideNumber === pageCount) {
    rightArrowBtn.style.visibility = "hidden";
    leftArrowBtn.style.visibility = "visible";
  } else if (slideNumber === 1) {
    rightArrowBtn.style.visibility = "visible";
    leftArrowBtn.style.visibility = "hidden";
  } else {
    rightArrowBtn.style.visibility = "visible";
    leftArrowBtn.style.visibility = "visible";
  }
};

const updatePageDots = () => {
  for (let i = 0; i < pageCount; i++) {
    pageDotsContainer.children[i].classList.remove("active");
  }
  pageDotsContainer.children[slideNumber - 1].classList.add("active");
};

const initPageDots = () => {
  for (let i = 0; i < pageCount; i++) {
    pageDotsContainer.innerHTML += "<span></span>";
  }
  pageDotsContainer.children[0].classList.add("active");
};

const openModal = e => {
  clearModal();
  const project = e.currentTarget.offsetParent.dataset.name;
  populateModal(project);
  modal.classList.add("open");
};

const clearModal = () => {
  technologiesContainerEl.innerHTML = "";
  videoEl.innerHTML = "";
  descriptionEl.innerHTML = "";
};

const populateModal = projectName => {
  const index = data.projects.findIndex(project => {
    return project.name === projectName;
  });
  let { demo, technologies, description, screenshot, gitHub } = data.projects[
    index
  ];

  // If a project video demo exists, add it, otherwise, use a screenshot
  demo
    ? (videoEl.innerHTML = `<iframe 
  src="${demo}">
  </iframe>`)
    : (videoEl.style.cssText = `background-image: url("${screenshot}"); background-size: cover`);

  // Append technology icons
  technologies.forEach(technology => {
    technologiesContainerEl.innerHTML += `<div class="technology" data-tech-name="${
      technology.name
    }">${
      technology.url
        ? `<img src="${technology.url}" alt="${technology.name} img"/><div class="technology-label">${technology.name}</div>`
        : `<div class="technology-label no-img">${technology.name}</div>`
    }</div>`;
  });

  // Append project description
  descriptionEl.textContent = description;

  // Add GitHub link if necessary
  gitHub &&
    descriptionEl.insertAdjacentHTML(
      "beforeend",
      `<a class="github-link" href="${gitHub}" target="_blank"><i class="fab fa-github" aria-hidden="true"></i> View on GitHub</a>`
    );
};

const closeModal = e => {
  if (e.target === e.currentTarget || e.currentTarget === closeModalBtn) {
    modal.classList.remove("open");
  }
};

renderProjects();

// ======== EVENTS ========
elements.navBtn.addEventListener("click", toggleNav);
arrowBtn.forEach(arrow => {
  arrow.addEventListener("click", carouselScroll);
});
document.querySelectorAll(".more-info-btn").forEach(item => {
  item.addEventListener("click", openModal);
});
modal.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
navLink.forEach(item => {
  item.addEventListener("click", scrollToSection);
});
