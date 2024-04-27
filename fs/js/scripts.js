/* When the page has laoded, run each function.
   If the mobile website is being displayed, run the typer straight away
   Else, if the website is in desktop mode, delay the typer to let the animation finish */
window.onload = function () {
  if (window.innerWidth < 600) {
    updateCopyright(); // Automatically update the copyright year
  } else {
    updateCopyright(); // Automatically update the copyright year
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