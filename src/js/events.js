import { navBtn, arrowBtn, modal, closeModalBtn, navLink } from "./elements.js";
import { toggleNav, scrollToSection } from "./components/navigation.js";
import {
  carouselScroll,
  openModal,
  closeModal
} from "./components/projects.js";

navBtn.addEventListener("click", toggleNav);
arrowBtn.forEach(arrow => {
  arrow.addEventListener("click", carouselScroll);
});
modal.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
navLink.forEach(item => {
  item.addEventListener("click", scrollToSection);
});
document.querySelectorAll(".more-info-btn").forEach(item => {
  item.addEventListener("click", openModal);
});
