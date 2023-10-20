document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll(".circle");

  // Create the image object array
  const alternateImages = [
    { url: "assets/icons/nodejs-icon.png", state: false },
    { url: "assets/icons/typescript-icon.png", state: false },
    { url: "assets/icons/reactjs-icon.png", state: false },
    { url: "assets/icons/javascript-icon.png", state: false },
    { url: "assets/icons/html-icon.png", state: false },
    { url: "assets/icons/css-icon.png", state: false },
    { url: "assets/icons/express-icon.png", state: false },
    { url: "assets/icons/nextjs-icon.png", state: false },
    { url: "assets/icons/mysql-icon.png", state: false },
    { url: "assets/icons/python-icon.png", state: false },
    { url: "assets/icons/php-icon.png", state: false },
    { url: "assets/icons/java-icon.png", state: false },
    { url: "assets/icons/jquery-icon.png", state: false },
    { url: "assets/icons/jest-icon.png", state: false },
    { url: "assets/icons/bubbleio-icon.png", state: false },
    { url: "assets/icons/git-icon.png", state: false },
    { url: "assets/icons/postman-icon.png", state: false },
    { url: "assets/icons/vscode-icon.png", state: false },
    { url: "assets/icons/tailwindcss-icon.png", state: false },
    { url: "assets/icons/boostrap-icon.png", state: false },
    { url: "assets/icons/figma-icon.png", state: false },
    { url: "assets/icons/illustrator-icon.png", state: false },
    { url: "assets/icons/premiere-icon.png", state: false },
    { url: "assets/icons/photoshop-icon.png", state: false },
    { url: "assets/icons/trello-icon.png", state: false },
    { url: "assets/icons/miro-icon.png", state: false },
    { url: "assets/icons/notion-icon.png", state: false },
  ];

  let currentIndex = 0;
  let intervalId;
  let isClickLocked = false;

  // Function to change the circle image with a fade-in animation
  function changeCircleImageWithAnimation(circle) {
    circle.style.opacity = 0;

    setTimeout(() => {
      const currentImage = alternateImages[currentIndex];
      circle.src = currentImage.url;
      currentImage.state = true; // Mark the image as used
      circle.style.opacity = 1;

      currentIndex = (currentIndex + 1) % alternateImages.length; // Cycle the index
    }, 300);
  }

  // Function to change the image when clicked
  function changeImageOnClick(circle) {
    if (isClickLocked) {
      return; // If the click is blocked, do nothing
    }

    if (intervalId) {
      clearInterval(intervalId); // Clear the interval for automatic changes
    }

    isClickLocked = true; // Lock the click temporarily
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * alternateImages.length);
    } while (alternateImages[randomIndex].state);

    const currentImage = alternateImages[randomIndex];
    circle.style.opacity = 0;
    setTimeout(() => {
      circle.src = currentImage.url;
      currentImage.state = true;
      circle.style.opacity = 1;
      setTimeout(() => {
        isClickLocked = false; // Unlock click after 1.5 second
      }, 1500);
      intervalId = setInterval(() => {
        circles.forEach((circle) => {
          changeCircleImageWithAnimation(circle);
        });
        alternateImages.forEach((image) => {
          image.state = false;
        });
      }, 3000); // Restart the automatic image change interval
    }, 500);
  }

  // Attach event listeners to each circle for manual image change
  circles.forEach((circle) => {
    changeCircleImageWithAnimation(circle);
    circle.addEventListener("click", () => {
      changeImageOnClick(circle);
    });
  });

  // Set an interval for automatic image changes
  intervalId = setInterval(() => {
    circles.forEach((circle) => {
      changeCircleImageWithAnimation(circle);
    });
    alternateImages.forEach((image) => {
      image.state = false; // Reset the state of all images
    });
  }, 3000); // Change images every 3 seconds
});

// Typing effect
var typingEffect = new Typed(".multiText", {
  strings: ["Jorge Sarricolea", "a Fullstack Developer", "a UX/UI Designer", "a Graphic Designer"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 80,
  backDelay: 250,
});

