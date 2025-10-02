import { fetchAllProducts } from "./api/api.js";

function createEl(tag, className, props = {}, attrs = {}) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  Object.assign(el, props);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  return el;
}

function insertIndexMainContent() {
  const main = createEl("main");

  const sectionTagline = createEl("section", "tagline");
  sectionTagline.appendChild(
    createEl("img", null, {
      src: "images/logos/Pushing the comfort zone.webp",
      alt: "Pushing the comfort zone",
    })
  );
  sectionTagline.appendChild(
    createEl("h2", null, {
      textContent:
        "Explore the outdoors in style and comfort. Our durable range of outerwear are designed to keep you dry and protected, no matter the weather.",
    })
  );
  main.appendChild(sectionTagline);

  const divFilter = createEl(
    "div",
    "filter-buttons",
    {},
    { role: "group", "aria-label": "Product gender filter" }
  );
  const btnAll = createEl(
    "button",
    "cta active",
    { id: "filter-both", textContent: "All" },
    { "aria-pressed": "true" }
  );
  const btnMen = createEl(
    "button",
    "cta",
    { id: "filter-male", textContent: "Men" },
    { "aria-pressed": "false" }
  );
  const btnWomen = createEl(
    "button",
    "cta",
    { id: "filter-female", textContent: "Women" },
    { "aria-pressed": "false" }
  );
  divFilter.append(btnAll, btnMen, btnWomen);
  main.appendChild(divFilter);

  const divContainer = createEl("div", "container", { id: "container" });
  main.appendChild(divContainer);

  fetchAndCreateProducts(divContainer);

  const sectionKeep = createEl("section", "keep-browsing");
  sectionKeep.appendChild(
    createEl("h2", null, { textContent: "Keep Browsing" })
  );
  sectionKeep.appendChild(
    createEl("p", null, {
      textContent:
        "Discover more of our top of the line jackets and other hiking equipment.",
    })
  );
  sectionKeep.appendChild(
    createEl("a", "cta", {
      href: "placeholders/back.html",
      textContent: "See more",
    })
  );
  main.appendChild(sectionKeep);

  const sectionNewsletter = createEl("section", "newsletter");
  const divBanner = createEl("div", "video-banner");
  const video = createEl("video", null, {
    autoplay: true,
    loop: true,
    muted: true,
    id: "background-video",
  });
  video.appendChild(
    createEl("source", null, { src: "videos/forrest.mp4", type: "video/mp4" })
  );
  divBanner.appendChild(video);
  const divBannerContent = createEl("div", "video-banner-content");
  divBannerContent.appendChild(
    createEl("span", "subscribe-heading", {
      textContent: "Subscribe to our newsletter!",
    })
  );
  divBannerContent.appendChild(
    createEl("span", "subscribe-text", {
      textContent: "Stay up to date on all our new releases",
    })
  );
  divBannerContent.appendChild(
    createEl("img", "video-logo", {
      src: "images/logos/RainyDays_Logo.webp",
      alt: "RainyDays logo",
    })
  );
  divBannerContent.appendChild(
    createEl("img", "video-background", {
      src: "images/logos/Polygon 1.webp",
      alt: "Polygon",
    })
  );
  const subscribeBtn = createEl("button", "cta__orange", {
    type: "button",
    textContent: "Subscribe",
  });
  subscribeBtn.onclick = () => {
    window.location.href = "pop-ups/signup.html";
  };
  divBannerContent.appendChild(subscribeBtn);
  divBanner.appendChild(divBannerContent);
  sectionNewsletter.appendChild(divBanner);
  main.appendChild(sectionNewsletter);

  const sectionPets = createEl("section", "pets");
  sectionPets.appendChild(
    createEl("h2", null, {
      textContent: "Get matching gear for your four legged friend!",
    })
  );
  sectionPets.appendChild(
    createEl("img", null, {
      src: "images/unsplash/pet-clothes.webp",
      alt: "Cat with a scarf",
    })
  );
  sectionPets.appendChild(
    createEl("p", null, { textContent: "Check out our stylish pet lineup" })
  );
  sectionPets.appendChild(
    createEl("a", "cta", {
      href: "placeholders/back.html",
      textContent: "See more",
    })
  );
  main.appendChild(sectionPets);

  const divMid = createEl("div", "mid-filler");
  const sectionNewsletterDesk = createEl("section", "newsletter-desktop");
  const divBannerDesk = createEl("div", "video-banner");
  const videoDesk = createEl("video", null, {
    autoplay: true,
    loop: true,
    muted: true,
    id: "background-video",
  });
  videoDesk.appendChild(
    createEl("source", null, { src: "videos/forrest.mp4", type: "video/mp4" })
  );
  divBannerDesk.appendChild(videoDesk);
  const divBannerContentDesk = createEl("div", "video-banner-content");
  divBannerContentDesk.appendChild(
    createEl("span", "subscribe-heading", {
      textContent: "Subscribe to our newsletter!",
    })
  );
  divBannerContentDesk.appendChild(
    createEl("span", "subscribe-text", {
      textContent: "Stay up to date on all our new releases",
    })
  );
  divBannerContentDesk.appendChild(
    createEl("img", "video-logo", {
      src: "images/logos/RainyDays_Logo.webp",
      alt: "RainyDays logo",
    })
  );
  divBannerContentDesk.appendChild(
    createEl("img", "video-background", {
      src: "images/logos/Polygon 1.webp",
      alt: "Polygon",
    })
  );
  const subscribeBtnDesk = createEl("button", "cta__orange", {
    type: "button",
    textContent: "Subscribe",
  });
  subscribeBtnDesk.onclick = () => {
    window.location.href = "pop-ups/signup.html";
  };
  divBannerContentDesk.appendChild(subscribeBtnDesk);
  divBannerDesk.appendChild(divBannerContentDesk);
  sectionNewsletterDesk.appendChild(divBannerDesk);
  divMid.appendChild(sectionNewsletterDesk);
  const sectionPetsDesk = createEl("section", "pets-desktop");
  sectionPetsDesk.appendChild(
    createEl("h2", null, {
      textContent: "Get matching gear for your four legged friend!",
    })
  );
  sectionPetsDesk.appendChild(
    createEl("img", null, {
      src: "images/unsplash/pet-clothes.webp",
      alt: "Cat with a scarf",
    })
  );
  sectionPetsDesk.appendChild(
    createEl("p", null, { textContent: "Check out our stylish pet lineup" })
  );
  sectionPetsDesk.appendChild(
    createEl("a", "cta", {
      href: "placeholders/back.html",
      textContent: "See more",
    })
  );
  divMid.appendChild(sectionPetsDesk);
  main.appendChild(divMid);

  const sectionShipping = createEl("section", "shipping");
  sectionShipping.appendChild(
    createEl("h2", null, { textContent: "2-5 day climate neutral shipping" })
  );
  sectionShipping.appendChild(
    createEl("img", null, {
      src: "images/logos/international shipping.webp",
      alt: "International shipping",
    })
  );
  sectionShipping.appendChild(
    createEl("p", null, {
      textContent:
        "In today’s fast-paced, globalized world, we’re committed to delivering your goods swiftly and responsibly. We understand the urgency of modern logistics, but we also recognize the importance of environmental sustainability.",
    })
  );
  sectionShipping.appendChild(
    createEl("p", null, {
      textContent:
        "That’s why we’ve made climate-neutral shipping a cornerstone of our business. By offsetting carbon emissions from every shipment, we strive to minimize our impact on the planet without compromising on speed or reliability.",
    })
  );
  main.appendChild(sectionShipping);

  const body = document.body;
  const firstScript = body.querySelector("script");
  if (firstScript) {
    body.insertBefore(main, firstScript);
  } else {
    body.appendChild(main);
  }
}

async function fetchAndCreateProducts(container) {
  try {
    const products = await fetchAllProducts();
    renderProducts(products, container);

    const buttons = document.querySelectorAll(".filter-buttons button");
    const filterMap = {
      "filter-both": () => products,
      "filter-male": () => products.filter((p) => p.gender === "Male"),
      "filter-female": () => products.filter((p) => p.gender === "Female"),
    };

    function setActiveButton(activeButton) {
      buttons.forEach((button) => {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      });
      activeButton.classList.add("active");
      activeButton.setAttribute("aria-pressed", "true");
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        renderProducts(filterMap[btn.id](), container);
        setActiveButton(e.target);
      });
    });
  } catch (error) {
    console.error("Error fetching featured items:", error);
    container.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

function renderProducts(products, container) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const card = createEl("div", "card");
    const image = createEl("img", "card-image", {
      src: product.image.url,
      alt: product.image.alt,
    });
    const content = createEl("div", "card-content");
    const title = createEl("h2", "card-title", { textContent: product.title });
    const info = createEl("div", "card-info", {
      textContent: `${product.gender} | ${product.baseColor}`,
    });
    const priceContainer = createEl("div", "card-price-container");
    const price = createEl("span", "card-price", {
      textContent: `$${product.price}`,
    });
    if (product.onSale) {
      const discountedPrice = createEl("span", "card-discounted-price", {
        textContent: `$${product.discountedPrice}`,
      });
      price.classList.add("line-through");
      priceContainer.append(price, discountedPrice);
    } else {
      priceContainer.appendChild(price);
    }

    const addToCartBtn = createEl("button", "cta cta-card", {
      textContent: "Add to cart",
    });
    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      addToCartBtn.textContent = "Added!";
      setTimeout(() => (addToCartBtn.textContent = "Add to cart"), 1200);
    });

    content.append(title, info, priceContainer, addToCartBtn);

    const anchor = createEl(
      "a",
      "card-link",
      { href: `pages/product.html?id=${product.id}` },
      { "aria-label": `View details for ${product.title}` }
    );
    anchor.appendChild(card);
    card.append(image, content);
    fragment.appendChild(anchor);
  });
  container.appendChild(fragment);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertIndexMainContent);
  } else {
    insertIndexMainContent();
  }
}
