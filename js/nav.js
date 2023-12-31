// Navbar
document.write(`
<div class="navbar-container">
  <nav>
    <ul class="menu">
      <li><a href="index" class="menu-link">Home</a></li>
      <li><a href="portfolio" class="menu-link">Portfolio</a></li>
      <li><a href="aboutme" class="menu-link">About</a></li>
      <li><a href="resume" class="menu-link">Resume</a></li>
      <li><a href="contact" class="menu-link">Contact</a></li>
    </ul>
  </nav>
  </div>
`);

// Gets the name of the current page (without the path) and the path of the current page
const currentPage = window.location.pathname.split("/").pop() || "index";
const menuLinks = document.querySelectorAll(".menu-link");

// Loop through all links in the menu and apply styles to the corresponding link
menuLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.style.fontWeight = "bold";
    link.style.color = "#EAA0FD";
  }
});

// Get the navigation bar container
const navbarContainer = document.querySelector(".navbar-container");
let prevScrollPos = window.pageYOffset;

// Function to handle the scroll event
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // The user is scrolling up, show the navigation bar
    navbarContainer.style.top = "0";
  } else {
    // The user is scrolling down, hide the navigation bar
    navbarContainer.style.top = `-${navbarContainer.offsetHeight}px`;
  }
  prevScrollPos = currentScrollPos;
}

// Function to handle the scroll event
function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // The user is scrolling up, show the navigation bar
    navbarContainer.classList.add("visible"); // Aplica la clase 'visible' para mostrar con animación
  } else {
    // The user is scrolling down, hide the navigation bar
    navbarContainer.classList.remove("visible"); // Quita la clase 'visible' para ocultar con animación
  }
  prevScrollPos = currentScrollPos;
}

// To animate fade in the navbar container
document.addEventListener("DOMContentLoaded", function () {
  navbarContainer.classList.add("visible");
});

// Add a listener for the scroll event
window.addEventListener("scroll", handleScroll);