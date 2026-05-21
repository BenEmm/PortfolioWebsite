const body = document.body;
const banner = document.querySelector('#it-banner');
const closeBannerButton = document.querySelector('#close-it-banner');
const menu = document.querySelector('#menu');
const menuToggler = document.querySelector('#menuToggler');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeIcon = document.querySelector('#icon');
const typer = document.querySelector('#typer');
const backToTop = document.querySelector('.back-to-top');
const heroConsole = document.querySelector('.hero-console');
const profilePanel = document.querySelector('#profile-panel');
const profileOpenButton = document.querySelector('[data-profile-open]');
const profileCloseButtons = document.querySelectorAll('[data-profile-close]');

const typePhrases = [
  'IT Professional',
  'Virtualisation Engineer',
  'Information Security Analyst'
];

function updateCopyright() {
  const copyright = document.querySelector('#copyright');

  if (!copyright) {
    return;
  }

  copyright.innerHTML = `&copy; ${new Date().getFullYear()}`;
}

function setBannerState(isVisible) {
  body.classList.toggle('with-banner', isVisible);

  if (banner) {
    banner.hidden = !isVisible;
  }
}

function setupBanner() {
  const dismissed = sessionStorage.getItem('itBannerDismissed') === 'true';
  setBannerState(Boolean(banner) && !dismissed);

  closeBannerButton?.addEventListener('click', () => {
    sessionStorage.setItem('itBannerDismissed', 'true');
    setBannerState(false);
  });
}

function setupMenu() {
  menuToggler?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('open') ?? false;
    menuToggler.setAttribute('aria-expanded', String(isOpen));
    menuToggler.classList.toggle('is-open', isOpen);
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggler?.classList.remove('is-open');
      menuToggler?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu?.classList.remove('open');
      menuToggler?.classList.remove('is-open');
      menuToggler?.setAttribute('aria-expanded', 'false');
    }
  });
}

function setupActiveNavigation() {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!navLinks.length || !sections.length) {
    return;
  }

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      setActiveLink(visibleEntry.target.id);
    }
  }, {
    rootMargin: '-28% 0px -56% 0px',
    threshold: [0.12, 0.3, 0.6]
  });

  sections.forEach((section) => observer.observe(section));
  setActiveLink(sections[0].id);
}

function applyTheme(theme) {
  const isDark = theme === 'dark';

  body.classList.toggle('darkmode', isDark);
  darkModeIcon?.classList.toggle('fa-sun', isDark);
  darkModeIcon?.classList.toggle('fa-moon', !isDark);
}

function setupDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  applyTheme(savedTheme || preferredTheme);

  darkModeToggle?.addEventListener('click', () => {
    const nextTheme = body.classList.contains('darkmode') ? 'light' : 'dark';
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  });
}

function setupTyper() {
  if (!typer) {
    return;
  }

  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  function tick() {
    const phrase = typePhrases[phraseIndex];
    const visibleText = phrase.slice(0, characterIndex);
    const stableText = visibleText || '&nbsp;';
    typer.innerHTML = `<span class="typing-text">${stableText}</span><span class="blinking-caret"></span>`;

    if (!isDeleting && characterIndex < phrase.length) {
      characterIndex += 1;
      window.setTimeout(tick, 70);
      return;
    }

    if (!isDeleting && characterIndex === phrase.length) {
      isDeleting = true;
      window.setTimeout(tick, 1450);
      return;
    }

    if (isDeleting && characterIndex > 0) {
      characterIndex -= 1;
      window.setTimeout(tick, 35);
      return;
    }

    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % typePhrases.length;
    window.setTimeout(tick, 260);
  }

  tick();
}

function setupBackToTop() {
  if (!backToTop) {
    return;
  }

  const toggleBackToTop = () => {
    backToTop.classList.toggle('active', window.scrollY > 500);
  };

  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
}

function setupProfilePanel() {
  if (!profilePanel || !profileOpenButton || !profileCloseButtons.length) {
    return;
  }

  let previousFocus = null;
  let closeTimer = null;

  const openPanel = () => {
    if (closeTimer) {
      window.clearTimeout(closeTimer);
      closeTimer = null;
    }

    previousFocus = document.activeElement;
    const consoleRect = heroConsole?.getBoundingClientRect();

    if (consoleRect) {
      profilePanel.style.setProperty('--restore-x', `${consoleRect.left + consoleRect.width / 2}px`);
      profilePanel.style.setProperty('--restore-y', `${consoleRect.top + consoleRect.height / 2}px`);
      profilePanel.style.setProperty('--restore-scale-x', Math.max(consoleRect.width / window.innerWidth, 0.08));
      profilePanel.style.setProperty('--restore-scale-y', Math.max(consoleRect.height / window.innerHeight, 0.08));
    }

    profilePanel.classList.remove('profile-panel--closing');
    profilePanel.hidden = false;
    body.classList.add('modal-open');
    profileCloseButtons[0].focus();
  };

  const closePanel = () => {
    if (profilePanel.hidden || profilePanel.classList.contains('profile-panel--closing')) {
      return;
    }

    profilePanel.classList.add('profile-panel--closing');

    closeTimer = window.setTimeout(() => {
      profilePanel.hidden = true;
      profilePanel.classList.remove('profile-panel--closing');
      body.classList.remove('modal-open');
      closeTimer = null;

      if (previousFocus && typeof previousFocus.focus === 'function') {
        previousFocus.focus();
      }
    }, 580);
  };

  profileOpenButton.addEventListener('click', openPanel);
  profileCloseButtons.forEach((button) => {
    button.addEventListener('click', closePanel);
  });

  profilePanel.addEventListener('click', (event) => {
    if (event.target === profilePanel) {
      closePanel();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !profilePanel.hidden) {
      closePanel();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCopyright();
  setupBanner();
  setupMenu();
  setupActiveNavigation();
  setupDarkMode();
  setupTyper();
  setupBackToTop();
  setupProfilePanel();
});
