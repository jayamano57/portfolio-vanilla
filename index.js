// ======== ELEMENTS ========
const navBtn = document.querySelector(".navigation");
const leftArrowBtn = document.querySelector(".left-arrow-btn");
const rightArrowBtn = document.querySelector(".right-arrow-btn");
const card = document.querySelector(".project-card");
const carousel = document.querySelector(".carousel");
const pageDotsContainer = document.querySelector(".page-dots");
const moreInfoBtn = document.querySelectorAll(".more-info-btn");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const videoEl = modal.querySelector(".video");
const technologiesContainerEl = modal.querySelector(".modal-technologies");
const descriptionEl = modal.querySelector(".modal-details");
const navLink = document.querySelectorAll(".nav-link");

// ======== DATA ========
const data = {
  projects: {
    personal: {
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/html-css-js.png", name: "html | js | css" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/babel.png", name: "babel" },
        { url: "./media/tech-imgs/webpack.png", name: "webpack" }
      ],
      description: "personal site description"
    },
    sellers: {
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/bootstrap.png", name: "Bootstrap" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/ms_sql.png", name: "sql server" }
      ],
      description: "sellers place description"
    },
    mcmacro: {
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/material-ui.png", name: "Material UI" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/jquery.png", name: "jQuery" },
        { url: "", name: "Cheerio.js" }
      ],
      description: "mcmacro app description"
    },
    foodr: {
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      screenshot: "./media/placeholder-img.png",
      technologies: [
        { url: "./media/tech-imgs/React-01.png", name: "React.js" },
        { url: "./media/tech-imgs/nodejs.png", name: "node.js" },
        { url: "./media/tech-imgs/expressjs-icon.png", name: "express.js" },
        { url: "./media/tech-imgs/yelp.png", name: "Yelp API" },
        { url: "", name: "Material Kit" }
      ],
      description: "foodr app description"
    }
  }
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
const cardStyle = card.currentStyle || window.getComputedStyle(card);
const cardCount = carousel.querySelectorAll(".project-card").length;
const pageCount = Math.ceil(cardCount / 3);
let slideNumber = 1;
let offset = 0;
const maxX = -(Math.floor(cardCount / 3) * carouselWidth);

const scrollProjectsRight = e => {
  slideNumber += 1;
  showOrHideArrowBtn();
  updatePageDots();
  if (offset !== maxX) {
    offset -= carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
};
const scrollProjectsLeft = e => {
  slideNumber -= 1;
  showOrHideArrowBtn();
  updatePageDots();
  if (offset !== 0) {
    offset += carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
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
  const project = e.currentTarget.offsetParent.dataset.name;
  populateModal(project);
  modal.classList.add("open");
};

const populateModal = project => {
  let { demo, technologies, description, screenshot } = data.projects[project];

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
};

const closeModal = e => {
  if (e.target === e.currentTarget || e.currentTarget === closeModalBtn) {
    technologiesContainerEl.innerHTML = "";
    videoEl.innerHTML = "";
    descriptionEl.innerHTML = "";
    modal.classList.remove("open");
  }
};

initPageDots();

// ======== EVENTS ========
navBtn.addEventListener("click", toggleNav);
leftArrowBtn.addEventListener("click", scrollProjectsLeft);
rightArrowBtn.addEventListener("click", scrollProjectsRight);
moreInfoBtn.forEach(item => {
  item.addEventListener("click", openModal);
});
modal.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
navLink.forEach(item => {
  item.addEventListener("click", scrollToSection);
});
