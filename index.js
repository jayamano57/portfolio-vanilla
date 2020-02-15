// ======== ELEMENTS ========
const navBtn = document.querySelector(".navigation");
const leftArrowBtn = document.querySelector(".left-arrow-btn");
const rightArrowBtn = document.querySelector(".right-arrow-btn");

// ======== COMPONENTS ========

// NAVIGATION

const toggleNav = () => {
  navBtn.classList.toggle("open");
};

// PROJECTS

const scrollProjectsRight = e => {
  console.log("right");
};
const scrollProjectsLeft = e => {
  console.log("left");
};

// ======== EVENTS ========
navBtn.addEventListener("click", toggleNav);
leftArrowBtn.addEventListener("click", scrollProjectsLeft);
rightArrowBtn.addEventListener("click", scrollProjectsRight);
