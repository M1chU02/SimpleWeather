function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function hasAcceptedCookies() {
  return document.cookie.includes("cookiesAccepted=true");
}

function hideCookieConsent() {
  const cookieConsent = document.getElementById("cookie-consent");
  cookieConsent.style.display = "none";
}

function handleAcceptClick() {
  setCookie("cookiesAccepted", "true", 365);
  hideCookieConsent();
}

function initCookieConsent() {
  if (!hasAcceptedCookies()) {
    const acceptButton = document.getElementById("accept-cookies");
    acceptButton.addEventListener("click", handleAcceptClick);
  } else {
    hideCookieConsent();
  }
}

window.addEventListener("load", initCookieConsent);
