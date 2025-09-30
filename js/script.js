const container = document.querySelector(".container");
const API_URL = "https://v2.api.noroff.dev/rainy-days";

async function fetchAndCreateProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const products = data.data;

    renderProducts(products);

    const buttons = document.querySelectorAll(".filter-buttons button");

    function setActiveButton(activeButton) {
      buttons.forEach((button) => button.classList.remove("active"));
      buttons;
      activeButton.classList.add("active");
    }

    document.getElementById("filter-both").addEventListener("click", (e) => {
      renderProducts(products);
      setActiveButton(e.target);
    });

    document.getElementById("filter-male").addEventListener("click", (e) => {
      const filteredProducts = products.filter(
        (product) => product.gender === "Male"
      );
      renderProducts(filteredProducts);
      setActiveButton(e.target);
    });

    document.getElementById("filter-female").addEventListener("click", (e) => {
      const filteredProducts = products.filter(
        (product) => product.gender === "Female"
      );
      renderProducts(filteredProducts);
      setActiveButton(e.target);
    });
  } catch (error) {
    console.error("Error fetching featured items:", error);
    container.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const content = document.createElement("div");
    const title = document.createElement("h2");
    const info = document.createElement("div");
    const priceContainer = document.createElement("div");
    const price = document.createElement("span");
    const anchor = document.createElement("a");

    card.className = "card";
    image.className = "card-image";
    content.className = "card-content";
    title.className = "card-title";
    info.className = "card-info";
    priceContainer.className = "card-price-container";
    price.className = "card-price";
    anchor.className = "card";

    image.src = product.image.url;
    image.alt = product.image.alt;
    title.textContent = product.title;
    price.textContent = `$${product.price}`;
    anchor.href = `products/index.html?id=${product.id}`;

    info.textContent = `${product.gender} | ${product.baseColor}`;

    if (product.onSale) {
      const discountedPrice = document.createElement("span");
      discountedPrice.textContent = `$${product.discountedPrice}`;
      discountedPrice.className = "card-discounted-price";

      price.classList.add("line-through");

      priceContainer.appendChild(price);
      priceContainer.appendChild(discountedPrice);
    } else {
      priceContainer.appendChild(price);
    }

    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(priceContainer);
    card.appendChild(image);
    card.appendChild(content);
    anchor.appendChild(card);

    container.appendChild(anchor);
  });
}

fetchAndCreateProducts();
