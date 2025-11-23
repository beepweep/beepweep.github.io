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
