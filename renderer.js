// src/renderer.js

// Initialize Lottie animation after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // Required
      path: '../assets/animations/intro.json', // Path to the animation JSON file
      renderer: 'svg', // Render as SVG
      loop: true, // Loop the animation
      autoplay: true, // Autoplay the animation
      name: "Robot Animation", // Name for future reference
    });
  });
  