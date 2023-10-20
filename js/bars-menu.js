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

// Nav Options Menu
document.write(`
<nav id="navbar" class="navbar">
  <ul class="items-mobile">
    <li ><a class="mobile-link" href="index.html" target="_blank">Home</a></li>
    <li ><a class="mobile-link" href="#" target="_blank">Portfolio</a></li>
    <li ><a class="mobile-link" href="#" target="_blank">About</a></li>
    <li ><a class="mobile-link" href="#" target="_blank">Resume</a></li>
    <li ><a class="mobile-link" href="#" target="_blank">Contact</a></li>
  </ul>
</nav>
`);

document.addEventListener("DOMContentLoaded", function () {

  // Function to animate the lines of the mobile menu
  const barsMenu = document.querySelector(".bars-menu");
  const menuContainer = document.querySelector(".menu-container");
  const line1BarsMenu = document.querySelector(".line1-bars-menu");
  const line2BarsMenu = document.querySelector(".line2-bars-menu");
  const line3BarsMenu = document.querySelector(".line3-bars-menu");
  const navbar = document.querySelector("#navbar");

  barsMenu.addEventListener("click", function () {
    menuContainer.classList.toggle("active-menu-container");
    line1BarsMenu.classList.toggle("activeline1-bars-menu");
    line2BarsMenu.classList.toggle("activeline2-bars-menu");
    line3BarsMenu.classList.toggle("activeline3-bars-menu");
    navbar.classList.toggle("activenavbar");
  });

  // Gets the name of the current page (without the path) and the path of the current page
  const linkMobile = document.querySelectorAll(".mobile-link");
  const currentPage = window.location.pathname.split("/").pop();

  // Loop through all links in the menu and apply styles to the corresponding link
  linkMobile.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.style.fontWeight = "bold";
      link.style.color = "#EAA0FD";
    }
  });
});
