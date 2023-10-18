document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class .circle
  const circles = document.querySelectorAll(".circle");

  // Define an array of alternative image paths
  const alternateImages = [
    "assets/icons/python-icon.png",
    "assets/icons/java-icon.png",
    "assets/icons/bootstrap-icon.png",
    "assets/icons/reactjs-icon.png",
    "assets/icons/typescript-icon.png",
    "assets/icons/nodejs-icon.png"
  ];

  // Function to change the image of a circle randomly with animation after .5 second
  function changeCircleImageRandomlyWithAnimation(circle) {
    // Apply a fade-out animation (hide)
    circle.style.opacity = 0;

    setTimeout(() => {
      // Generate a random index to select an alternative image
      const randomIndex = Math.floor(Math.random() * alternateImages.length);

      // Change the source (src) of the circle's image
      circle.src = alternateImages[randomIndex];

      // Apply an animation to show the circle
      circle.style.opacity = 1;
    }, 500); // After 1 second
  }

  // Add a click event to each circle
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      changeCircleImageRandomlyWithAnimation(circle);
    });

    // Initially, show each circle with a random image
    changeCircleImageRandomlyWithAnimation(circle);
  });
});

// Typing effect
var typingEffect = new Typed(".multiText", {
  strings: ["Jorge Sarricolea", "a Fullstack Developer", "a UX/UI Designer", "a Graphic Designer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 250,
});

