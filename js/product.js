import { fetchProductById } from "../js/api/api.js";
const container = document.querySelector(".product-container");
const preloader = document.querySelector(".preloader");

async function fetchAndCreateProduct() {
  try {
    preloader.style.display = "block";

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
      container.textContent = "No product ID provided.";
      return;
    }

    const product = await fetchProductById(id);
    const onSale = Boolean(product.onSale);

    preloader.style.display = "none";

    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const titleContainer = document.createElement("div");
    titleContainer.className = "product-title-container";
    const title = document.createElement("h1");
    title.className = "product-title";
    title.textContent = product.title;
    titleContainer.appendChild(title);
    productDiv.appendChild(titleContainer);

    const flexRow = document.createElement("div");
    flexRow.className = "product-flex-row";

    const imageCol = document.createElement("div");
    imageCol.className = "product-image-col";
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image.url;
    image.alt = product.image.alt;
    imageCol.appendChild(image);

    const infoCol = document.createElement("div");
    infoCol.className = "product-info-col";
    const description = document.createElement("h2");
    description.className = "product-description";
    description.textContent = product.description;
    const gender = document.createElement("p");
    gender.className = "product-gender";
    const sizes = document.createElement("p");
    sizes.className = "product-sizes";
    const baseColor = document.createElement("p");
    baseColor.className = "product-base-color";
    const pricesRow = document.createElement("div");
    pricesRow.className = "product-prices-row";
    const price = document.createElement("h3");
    price.className = "product-price";
    const discountedPrice = document.createElement("h3");
    discountedPrice.className = "product-discounted-price";
    const tags = document.createElement("p");
    tags.className = "product-tags";
    const addToCartButton = document.createElement("button");
    addToCartButton.className = "cta";
    price.textContent = `$${product.price}`;
    discountedPrice.textContent = `$${product.discountedPrice}`;
    sizes.textContent = `Available Sizes: ${product.sizes.join(", ")}`;
    baseColor.textContent = `Color: ${product.baseColor}`;
    tags.textContent = `Category: ${product.tags.join(", ")}`;
    addToCartButton.textContent = "Add to Cart";

    addToCartButton.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product.id);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart!");
    });

    infoCol.appendChild(description);
    if (onSale) {
      price.classList.add("line-through");
      pricesRow.appendChild(price);
      pricesRow.appendChild(discountedPrice);
    } else {
      pricesRow.appendChild(price);
    }
    infoCol.appendChild(pricesRow);
    infoCol.appendChild(sizes);
    infoCol.appendChild(baseColor);
    infoCol.appendChild(tags);
    infoCol.appendChild(addToCartButton);

    flexRow.appendChild(imageCol);
    flexRow.appendChild(infoCol);
    productDiv.appendChild(flexRow);

    container.innerHTML = "";
    container.appendChild(productDiv);
  } catch (error) {
    console.error("Error fetching product:", error);
    container.innerHTML = `<p>Oops! Couldn't find that product. Please try again later.</p>`;
  }
}

fetchAndCreateProduct();
