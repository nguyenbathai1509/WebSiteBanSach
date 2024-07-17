document.addEventListener("DOMContentLoaded", function () {
   const slider = document.querySelector(".slider");
   let counter = 1;

   setInterval(() => {
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(${-counter * 100}%)`;

      counter++;

      if (counter === 4) {
         setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = "translateX(-100%)";
            counter = 1;
         }, 800);
      }
   }, 3000);
});

const collapseMenuItemsBtns = document.querySelectorAll(
   ".left-sidebar .collapse-menu-item"
);
collapseMenuItemsBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
      btn.parentElement.nextElementSibling.classList.toggle("active");
      btn.parentElement.classList.toggle("active");
   });
});


