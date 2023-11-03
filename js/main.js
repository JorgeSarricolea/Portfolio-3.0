// Select all sections to animate
const sectionsLeft = document.querySelectorAll(".slide-left-right");
const sectionsRright = document.querySelectorAll(".slide-right-left");

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

// Create a new Intersection Observer with the specified options
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe each element in the "sectionsLeft" NodeList
sectionsLeft.forEach((section) => {
  observer.observe(section);
});

// Observe each element in the "sectionsRright" NodeList
sectionsRright.forEach((section) => {
  observer.observe(section);
});

document.documentElement.style.overflowX = 'hidden';