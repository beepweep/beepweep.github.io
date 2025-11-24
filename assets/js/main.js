(function () {
  // Cookie Banner Logic
  const banner = document.querySelector('.cookie-banner');
  const action = banner?.querySelector('.cookie-banner__action');
  const countdown = banner?.querySelector('.cookie-banner__countdown span');

  if (!banner || !action) return;

  const storageKey = 'beepweep-cookie-ack';
  const autoDismissMs = 10000;
  let autoTimer;
  let countdownTimer;

  const hideBanner = () => {
    banner.classList.add('cookie-banner--hidden');
    setTimeout(() => {
      banner.style.display = 'none';
    }, 300);
  };

  const acceptAndHide = () => {
    window.localStorage.setItem(storageKey, 'accepted');
    hideBanner();
  };

  if (window.localStorage.getItem(storageKey) === 'accepted') {
    hideBanner();
    return;
  }

  if (countdown) {
    let remaining = autoDismissMs / 1000;
    countdown.textContent = remaining.toString();
    countdownTimer = window.setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        window.clearInterval(countdownTimer);
        remaining = 0;
      }
      countdown.textContent = remaining.toString();
    }, 1000);
  }

  autoTimer = window.setTimeout(() => {
    acceptAndHide();
  }, autoDismissMs);

  action.addEventListener('click', () => {
    window.clearTimeout(autoTimer);
    if (countdownTimer) window.clearInterval(countdownTimer);
    acceptAndHide();
  });
})();

// Theme Toggle Logic
(function () {
  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = document.querySelector('.theme-icon-sun');
  const moonIcon = document.querySelector('.theme-icon-moon');
  const storageKey = 'beepweep-theme';

  // Function to set theme
  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      document.documentElement.removeAttribute('data-theme');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
    localStorage.setItem(storageKey, theme);
  };

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Auto-detect based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  // Toggle theme on button click
  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(storageKey)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
