export function insertHeader({ page, rel }) {
  const mobileHeader = document.createElement("header");
  mobileHeader.className = "mobile";

  const hamburgerLabel = document.createElement("label");
  hamburgerLabel.setAttribute("for", "hamburger-menu");
  hamburgerLabel.innerHTML = '<i class="fa-solid fa-bars"></i>';
  mobileHeader.appendChild(hamburgerLabel);

  const hamburgerInput = document.createElement("input");
  hamburgerInput.type = "checkbox";
  hamburgerInput.id = "hamburger-menu";
  mobileHeader.appendChild(hamburgerInput);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const liHome = document.createElement("li");
  if (page === "home") liHome.className = "current";
  const aHome = document.createElement("a");
  aHome.href = rel + "index.html";
  aHome.className = "hamburger-text";
  aHome.textContent = "Home";
  liHome.appendChild(aHome);
  ul.appendChild(liHome);

  const liAbout = document.createElement("li");
  if (page === "about") liAbout.className = "current";
  const aAbout = document.createElement("a");
  aAbout.href = rel + "pages/about.html";
  aAbout.className = "hamburger-text";
  aAbout.textContent = "About";
  liAbout.appendChild(aAbout);
  ul.appendChild(liAbout);

  const liContact = document.createElement("li");
  if (page === "contact") liContact.className = "current";
  const aContact = document.createElement("a");
  aContact.href = rel + "pages/contact.html";
  aContact.className = "hamburger-text";
  aContact.textContent = "Contact";
  liContact.appendChild(aContact);
  ul.appendChild(liContact);

  const liLogin = document.createElement("li");
  const aLogin = document.createElement("a");
  aLogin.href = "#";
  aLogin.className = "cta__orange user-login-link";
  aLogin.textContent = "Log In";
  liLogin.appendChild(aLogin);
  ul.appendChild(liLogin);

  ul.appendChild(document.createElement("p"));

  const pSignUp = document.createElement("p");
  const aSignUp = document.createElement("a");
  aSignUp.href = rel + "pop-ups/signup.html";
  aSignUp.style.color = "#fff";
  aSignUp.textContent = "Not a user? Become one";
  pSignUp.appendChild(aSignUp);
  ul.appendChild(pSignUp);

  nav.appendChild(ul);
  mobileHeader.appendChild(nav);

  const logoLink = document.createElement("a");
  logoLink.href = rel + "index.html";
  const logoImg = document.createElement("img");
  logoImg.src = rel + "images/logos/RainyDays_Logo-Only.png";
  logoImg.className = "logo-only";
  logoImg.alt = "RainyDays logo";
  logoLink.appendChild(logoImg);
  mobileHeader.appendChild(logoLink);

  const cartLink = document.createElement("a");
  cartLink.href = rel + "pages/cart.html";
  cartLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
  mobileHeader.appendChild(cartLink);

  const desktopHeader = document.createElement("header");
  desktopHeader.className = "desktop";
  const navDesk = document.createElement("nav");
  const ulDesk = document.createElement("ul");

  const divLeft = document.createElement("div");
  divLeft.className = "header-left";
  const liHomeD = document.createElement("li");
  if (page === "home") liHomeD.className = "current";
  const aHomeD = document.createElement("a");
  aHomeD.href = rel + "index.html";
  aHomeD.className = "header-text";
  aHomeD.textContent = "Home";
  liHomeD.appendChild(aHomeD);
  divLeft.appendChild(liHomeD);
  const liAboutD = document.createElement("li");
  if (page === "about") liAboutD.className = "current";
  const aAboutD = document.createElement("a");
  aAboutD.href = rel + "pages/about.html";
  aAboutD.className = "header-text";
  aAboutD.textContent = "About";
  liAboutD.appendChild(aAboutD);
  divLeft.appendChild(liAboutD);
  ulDesk.appendChild(divLeft);

  const liLogo = document.createElement("li");
  const aLogo = document.createElement("a");
  aLogo.href = rel + "index.html";
  const imgLogo = document.createElement("img");
  imgLogo.src = rel + "images/logos/RainyDays_Logo-Only.png";
  imgLogo.className = "header-logo";
  imgLogo.alt = "RainyDays logo";
  aLogo.appendChild(imgLogo);
  liLogo.appendChild(aLogo);
  ulDesk.appendChild(liLogo);

  const divRight = document.createElement("div");
  divRight.className = "header-right";
  const liContactD = document.createElement("li");
  if (page === "contact") liContactD.className = "current";
  const aContactD = document.createElement("a");
  aContactD.href = rel + "pages/contact.html";
  aContactD.className = "header-text";
  aContactD.textContent = "Contact";
  liContactD.appendChild(aContactD);
  divRight.appendChild(liContactD);
  const liCartD = document.createElement("li");
  const aCartD = document.createElement("a");
  aCartD.href = rel + "pages/cart.html";
  aCartD.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
  liCartD.appendChild(aCartD);
  divRight.appendChild(liCartD);
  const liUserD = document.createElement("li");
  const aUserD = document.createElement("a");
  aUserD.href = "#";
  aUserD.className = "user-login-link";
  aUserD.innerHTML = '<i class="fa-solid fa-user"></i>';
  liUserD.appendChild(aUserD);
  divRight.appendChild(liUserD);
  ulDesk.appendChild(divRight);

  navDesk.appendChild(ulDesk);
  desktopHeader.appendChild(navDesk);

  document.body.insertBefore(desktopHeader, document.body.firstChild);
  document.body.insertBefore(mobileHeader, desktopHeader);
}
