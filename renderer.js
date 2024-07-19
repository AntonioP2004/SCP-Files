// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Get references to the buttons and title bar in the title bar
  const minimizeButton = document.getElementById('minimize');
  const maximizeButton = document.getElementById('maximize');
  const closeButton = document.getElementById('close');
  const titleBar = document.getElementById('title-bar');

  // Add event listeners to the buttons
  minimizeButton.addEventListener('click', () => {
    window.electron.minimize();
  });

  maximizeButton.addEventListener('click', () => {
    window.electron.maximize();
  });

  closeButton.addEventListener('click', () => {
    window.electron.close();
  });

  // Show the title bar when the mouse is within 75 pixels of the top
  document.body.addEventListener('mousemove', (e) => {
    if (e.clientY < 75) {
      titleBar.style.top = '0';
    } else {
      titleBar.style.top = '-30px';
    }
  });

  // Prevent title bar from hiding when mouse is over it
  titleBar.addEventListener('mouseenter', () => {
    titleBar.style.top = '0';
  });

  titleBar.addEventListener('mouseleave', (event) => {
    if (event.clientY > 75) {
      titleBar.style.top = '-30px';
    }
  });
});

document.addEventListener('mousemove', function(event) {
  const slideTab = document.getElementById('slideTab');
  const mouseX = event.clientX;

  if (mouseX < 220) {
    slideTab.classList.add('open');
  } else {
    slideTab.classList.remove('open');
  }
});