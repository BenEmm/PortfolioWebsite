/* When the page has laoded, run each function.
   If the mobile website is being displayed, run the typer straight away
   Else, if the website is in desktop mode, delay the typer to let the animation finish */
window.onload = function () {
  if (window.innerWidth < 600) {
    typer(); // Run the typer without a delay
    updateCopyright(); // Automatically update the copyright year
  } else {
    setTimeout(typer, 750); // Wait for the css animation to finish before typing
    updateCopyright(); // Automatically update the copyright year
  }
}

/*
    The following allows the user to toggle the navigation menu on and off.
    1. Add a click event listener to the menuToggler element.
    2. When the menuToggler is clicked, toggle the open class on the menu element.
*/
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

// When the user clicks a link in the menu, close the menu.
menu.addEventListener('click', ev => {
  menu.classList.remove('open');
});

// Dark mode
let darkMode = localStorage.getItem('darkMode'); // Allows us to save the users preference for dark mode, stored locally.
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// Add the darkmode class to the body element and save state to local storage.
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  icon.classList.remove("fa-moon")
  icon.classList.add("fa-sun")
  localStorage.setItem('darkMode', 'on');
};

// Remove the darkmode class from the body element and save state to local storage.
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  icon.classList.remove("fa-sun")
  icon.classList.add("fa-moon")
  localStorage.setItem('darkMode', 'off');
};

// If the user has previously selected dark mode, enable it.
if (darkMode === 'on') {
  enableDarkMode();
}

// If the user clicks the dark mode toggle, do the following:
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'on') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Typing effect for the homepage heading 
let i = 0; // Current position in the message
let messageIndex = 0; // Index for selecting different messages
let messages = ['Developer & Technologist', 'Virtualisation Engineer', 'Information Security Analyst']; // List of messages to be typed
let speed = 60; // Speed of typing (in ms)
let deleteSpeed = 40; // Speed of deleting characters (in ms)
let delay = 5000; // Delay after typing before deleting (5 seconds)

function typer() {
  let message = messages[messageIndex]; // Get the current message

  if (i < message.length) { // If 'i' is less than the length of the message
    document.getElementById("typer").innerHTML = message.substring(0, i + 1) + '&nbsp;<span class="blinking-caret"></span>'; // Type the next letter, keep the non-breaking space and caret
    i++; // Increment the position in the message ('i')
    setTimeout(typer, speed); // Timeout between placing letters to give the illusion of typing
  } else {
    // Once typing is finished, wait 5 seconds, then start deleting
    setTimeout(deleter, delay);
  }
}

function deleter() {
  let message = messages[messageIndex]; // Get the current message

  if (i > 0) { // If there are still characters left to delete
    document.getElementById("typer").innerHTML = message.substring(0, i - 1) + '&nbsp;<span class="blinking-caret"></span>'; // Remove the last character, keep the non-breaking space and caret for styling
    i--; // Decrement the position in the message
    setTimeout(deleter, deleteSpeed); // Timeout between deleting characters to mimic realistic typing
  } else {
    // Once the message is fully deleted, move to the next message
    messageIndex = (messageIndex + 1) % messages.length; // Loop back to the first message if at the end
    setTimeout(typer, speed); // Start typing the next message
  }
}

// Automatically update the copyright year
function updateCopyright() {
  const copyright = document.querySelector('#copyright');
  const currentYear = new Date().getFullYear();
  copyright.innerHTML = `&copy; ${currentYear}`;
}

// Back to top handler
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.classList.add('active');
  } else {
    backToTop.classList.remove('active');
  }
});

/* Google Maps API */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.633331, lng: -1.133333 }, // Center the map on Leicester
    zoom: 13,
    mapId: '65284ab020577769', // Custom Map ID Created by me. It should have removed all the labels and other clutter... but didn't.
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });

  // Create a custom marker with an image of my avatar
  const marker = new google.maps.Marker({
    position: { lat: 52.637695866576244, lng: -1.1401517028024495 },
    map,
    title: 'Leicester, UK',
    icon: {
      url: "./img/avatar.png",
      scaledSize: new google.maps.Size(50, 50)
    },
    animation: google.maps.Animation.DROP // Drops the marker in with a bounce. No good for scrolling users, but good if clicked in nav bar.
  });

  // Add info to the custom marker
  const infoWindow = new google.maps.InfoWindow({
    content: "I'm based in Leicester, UK",
  });

  // Add an event listener to the custom marker to open the custom info window when clicked.
  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

// IT Support Banner & Hamburger Fix
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('it-banner');
  const closeBtn = document.getElementById('close-it-banner');
  const nav = document.querySelector('nav');
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const menuToggler = document.querySelector('#menu-toggler');

  if (banner) {
    document.body.classList.add('with-banner');

    // Push nav down dynamically based on banner height
    const adjustNav = () => {
      nav.style.top = banner.offsetHeight + 'px';
    };
    adjustNav();
    window.addEventListener('resize', adjustNav);

    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      nav.style.top = '0';
      document.body.classList.remove('with-banner');
      positionHamburger();
      positionDarkModeToggle();
    });
  }

  // Position hamburger below banner + nav
  const positionHamburger = () => {
    const bannerHeight = banner && banner.style.display !== 'none' ? banner.offsetHeight : 0;
    const navHeight = nav.offsetHeight;
    if (menuToggler) {
      menuToggler.style.top = bannerHeight + navHeight + 10 + 'px';
    }
  };

  // Position dark mode toggle below banner + nav
  const positionDarkModeToggle = () => {
    const bannerHeight = banner && banner.style.display !== 'none' ? banner.offsetHeight : 0;
    const navHeight = nav.offsetHeight;
    if (darkModeToggle) {
      darkModeToggle.style.top = bannerHeight + navHeight + 10 + 'px';
    }
  };

  positionHamburger();
  positionDarkModeToggle();
  window.addEventListener('resize', () => {
    positionHamburger();
    positionDarkModeToggle();
  });
});
