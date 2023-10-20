// Bars Menu
document.write(`
<div class="menu-container">
  <div class="bars-menu">
    <span class="line1-bars-menu"></span>
    <span class="line2-bars-menu"></span>
    <span class="line3-bars-menu"></span>
  </div>
</div>
`);

document.addEventListener("DOMContentLoaded", function () {

  // Function to animate the lines of the mobile menu
  const barsMenu = document.querySelector(".bars-menu");
  const line1BarsMenu = document.querySelector(".line1-bars-menu");
  const line2BarsMenu = document.querySelector(".line2-bars-menu");
  const line3BarsMenu = document.querySelector(".line3-bars-menu");
  const itemsMobile = document.querySelector(".items-mobile");
  const navbar = document.querySelector("#navbar");

  barsMenu.addEventListener("click", function () {
    line1BarsMenu.classList.toggle("activeline1-bars-menu");
    line2BarsMenu.classList.toggle("activeline2-bars-menu");
    line3BarsMenu.classList.toggle("activeline3-bars-menu");
    itemsMobile.classList.toggle("activeitems-mobile");
    navbar.classList.toggle("activenavbar");
  });
});
