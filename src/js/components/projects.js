import { data } from "../data.js";

import {
  carousel,
  rightArrowBtn,
  leftArrowBtn,
  closeModalBtn,
  pageDotsContainer,
  modal,
  technologiesContainerEl,
  videoEl,
  descriptionEl
} from "../elements.js";

const carouselWidth = carousel.offsetWidth;
const cardCount = data.projects.length;
const pageCount = Math.ceil(cardCount / 3);
let slideNumber = 1;
let offset = 0;
const maxX = -(Math.floor(cardCount / 3) * carouselWidth);

export const renderProjects = () => {
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

export const carouselScroll = e => {
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

export const updateCardVisibility = () => {
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

export const showOrHideArrowBtn = () => {
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

export const updatePageDots = () => {
  for (let i = 0; i < pageCount; i++) {
    pageDotsContainer.children[i].classList.remove("active");
  }
  pageDotsContainer.children[slideNumber - 1].classList.add("active");
};

export const initPageDots = () => {
  for (let i = 0; i < pageCount; i++) {
    pageDotsContainer.innerHTML += "<span></span>";
  }
  pageDotsContainer.children[0].classList.add("active");
};

export const openModal = e => {
  clearModal();
  const project = e.currentTarget.offsetParent.dataset.name;
  populateModal(project);
  modal.classList.add("open");
};

export const clearModal = () => {
  technologiesContainerEl.innerHTML = "";
  videoEl.innerHTML = "";
  descriptionEl.innerHTML = "";
};

export const populateModal = projectName => {
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

export const closeModal = e => {
  if (e.target === e.currentTarget || e.currentTarget === closeModalBtn) {
    modal.classList.remove("open");
  }
};

renderProjects();
