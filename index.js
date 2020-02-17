// ======== ELEMENTS ========
const navBtn = document.querySelector(".navigation");
const leftArrowBtn = document.querySelector(".left-arrow-btn");
const rightArrowBtn = document.querySelector(".right-arrow-btn");
const card = document.querySelector(".project-card");
const carousel = document.querySelector(".carousel");
const pageDotsContainer = document.querySelector(".page-dots");
const moreInfoBtn = document.querySelectorAll(".more-info-btn");

// ======== COMPONENTS ========

// NAVIGATION

const toggleNav = () => {
  navBtn.classList.toggle("open");
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

const viewMoreInfoModal = e => {
  createGhostCard(e.target.parentElement.parentElement);
  const card = e.target.parentElement.parentElement;
  card.classList.add("back");
};

const createGhostCard = e => {
  const card = e;
  const ghost = document.createElement("div");
  ghost.classList.add("ghost-card");
  carousel.insertBefore(ghost, card);
};

initPageDots();

// ======== EVENTS ========
navBtn.addEventListener("click", toggleNav);
leftArrowBtn.addEventListener("click", scrollProjectsLeft);
rightArrowBtn.addEventListener("click", scrollProjectsRight);
moreInfoBtn.forEach(item => {
  item.addEventListener("click", viewMoreInfoModal);
});
