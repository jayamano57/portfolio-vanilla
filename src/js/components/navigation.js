import { navBtn } from "../elements.js";

export const toggleNav = () => {
  navBtn.classList.toggle("open");
};

export const scrollToSection = (e) => {
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
    case "welcome":
      y = currentY + elCoords.y - 10;
      break;
    case "projects":
      y = currentY + elCoords.y - 10;
      break;
    case "contact-form":
      y = currentY + elCoords.y - 50;
      break;
    default:
      return;
  }
  window.scroll({
    top: y,
    left: 0,
    behavior: "smooth",
  });
};
