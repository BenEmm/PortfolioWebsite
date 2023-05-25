
/* When the page has laoded, run each function.
   If the mobile website is being displayed, run the typer straight away
   Else, if the website is in desktop mode, delay the typer to let the animation finish */
window.onload = function () {
  if (window.innerWidth < 600) {
    typer(); // Run the typer without a delay
    getWeather(); // Get the weather for Leicester
    updateCopyright(); // Automatically update the copyright year
  } else {
    setTimeout(typer, 750); // Wait for the css animation to finish before typing
    getWeather(); // Get the weather for Leicester
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
let message = 'Developer & Technologist'; // Message to be typed
let speed = 60; // Speed of typing (in ms)

function typer() {
  if (i < message.length) { // If 'i' is less than the length of message
    document.getElementById("typer").innerHTML += message.charAt(i); // Type the next letter
    i++; // Incremement the position in the message ('i')
    setTimeout(typer, speed); // Timeout between placing letters to give the illusion of typing
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



// Weather variables
const weather = document.querySelector('.weather'); // Access the weather div in the HTML.
const description = document.querySelector('.description'); // Access the description element in the HTML.
const temp = document.querySelector('.temp'); // Access the temp element in the HTML.
const weatherImgUrl = 'http://openweathermap.org/img/wn/'; // Base URL for weather icons, the icon value is appended to this URL.

/* Get todays weather for Leicester using the Open Weather API */
function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Leicester,gb&appid=2bf01b21a176bd96433e1ed723e5cc4b&units=metric&timezone=Europe/London') // Fetch the weather for Leicester, with metric units, and the timezone set to London (for day/night image icons)
    .then(response => response.json())
    .then(data => {
      const iconValue = data['weather'][0]['icon']; // Get the icon value from the API.
      const descriptionValue = data['weather'][0]['description'].toUpperCase(); // Get the description value from the API and convert to uppercase since that looks slightly better.
      const tempValue = Math.round(data['main']['temp']) + '°C'; // Get the temp value from the API and round it to the nearest whole number then add the Celsius symbol.

      // Create the image element for the weather icon.
      const iconImg = document.createElement('img');

      // Set the source of the image element (equal to the open weather icon url + the icon value from the API)
      iconImg.src = weatherImgUrl + iconValue + '@2x.png';

      // Add alt text for the image element which includes the temp and description.
      iconImg.alt = "Todays weather is " + tempValue + ' with ' + descriptionValue + ".";

      // Insert the Weather icon as the second child of the weather div (after the title).
      weather.insertBefore(iconImg, weather.childNodes[2]);

      // Insert the description of todays weather e.g. 'Cloudy', 'Sunny' etc.
      description.innerHTML = descriptionValue;

      // Insert the todays temp.
      temp.innerHTML = tempValue;
    })

    .catch(err => console.log('Unable to get weather data: ', err)); // Log any errors to console.
}





