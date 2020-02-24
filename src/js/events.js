import {
  navBtn,
  arrowBtn,
  modal,
  closeModalBtn,
  navLink,
  sendContactBtn
} from "./elements.js";
import { toggleNav, scrollToSection } from "./components/navigation.js";
import {
  carouselScroll,
  openModal,
  closeModal
} from "./components/projects.js";
import { sendMessage } from "./components/contact.js";

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
sendContactBtn.addEventListener("click", sendMessage);
