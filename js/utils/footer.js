export function insertFooter({ rel }) {
  const footer = document.createElement("footer");

  const topFooter = document.createElement("section");
  topFooter.className = "top-footer";

  const ulLeft = document.createElement("ul");
  ulLeft.className = "footer-links-left";
  const leftLinks = [
    { text: "Shipping, Exchanges & Returns" },
    { text: "Privacy Policy" },
    { text: "Our mission" },
    { text: "Collaborators" },
  ];
  leftLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link.text;
    a.className = "footer-fake-link";
    li.appendChild(a);
    ulLeft.appendChild(li);
  });
  topFooter.appendChild(ulLeft);

  const logoImg = document.createElement("img");
  logoImg.src = rel + "images/logos/RainyDays_Logo.webp";
  logoImg.alt = "RainyDays logo";
  logoImg.className = "logo-full";
  const logoLink = document.createElement("a");
  logoLink.href = rel + "index.html";
  logoLink.appendChild(logoImg);
  topFooter.appendChild(logoLink);

  const ulRight = document.createElement("ul");
  ulRight.className = "footer-links-right";
  const rightLinks = [
    { text: "Contact", href: rel + "pages/contact.html" },
    { text: "About", href: rel + "pages/about.html" },
    { text: "Home", href: rel + "index.html" },
    { text: "Log In", href: "*", className: "user-login-link" },
  ];
  rightLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    if (link.className) a.className = link.className;
    li.appendChild(a);
    ulRight.appendChild(li);
  });
  topFooter.appendChild(ulRight);

  footer.appendChild(topFooter);

  const bottomFooter = document.createElement("section");
  bottomFooter.className = "bottom-footer";
  const socials = [
    { href: "https://www.facebook.com/", icon: "fa-facebook" },
    { href: "https://www.x.com/", icon: "fa-x-twitter" },
    { href: "https://www.reddit.com/user/", icon: "fa-reddit" },
    { href: "https://bsky.app/", icon: "fa-bluesky" },
    { href: "https://www.instagram.com/", icon: "fa-instagram" },
  ];
  socials.forEach((social) => {
    const li = document.createElement("li");
    li.className = "social-logos";
    const a = document.createElement("a");
    a.href = social.href;
    a.innerHTML = `<i class="fa-brands ${social.icon}"></i>`;
    li.appendChild(a);
    bottomFooter.appendChild(li);
  });
  footer.appendChild(bottomFooter);

  const copyright = document.createElement("div");
  copyright.className = "copyright";
  copyright.innerHTML = "Copyright &copy;";
  footer.appendChild(copyright);

  document.body.appendChild(footer);
}

if (typeof document !== "undefined") {
  const body = document.body;
  const rel = body?.dataset?.rel;
  if (rel !== undefined) {
    insertFooter({ rel });
  }
}
