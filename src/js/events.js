navBtn.addEventListener("click", toggleNav);
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
