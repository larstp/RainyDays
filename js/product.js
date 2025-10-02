const container = document.querySelector(".product-container");
const preloader = document.querySelector(".preloader");
const API_URL = "https://v2.api.noroff.dev/rainy-days";

async function fetchAndCreateProduct() {
  try {
    preloader.style.display = "block";

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
      container.textContent = "No product ID provided.";
      return;
    }

    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    const product = data.data;
    const onSale = Boolean(product.onSale);

    preloader.style.display = "none";

    const productDiv = document.createElement("div");
    const image = document.createElement("img");
    const content = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("h2");
    const gender = document.createElement("p");
    const sizes = document.createElement("p");
    const baseColor = document.createElement("p");
    const price = document.createElement("h3");
    const discountedPrice = document.createElement("h3");
    const tags = document.createElement("p");
    const addToCartButton = document.createElement("button");
    const goToCartButton = document.createElement("button");
    const backButton = document.createElement("button");

    productDiv.className = "product";
    image.className = "product-image";
    content.className = "product-info";
    title.className = "product-title";
    description.className = "product-description";
    gender.className = "product-gender";
    sizes.className = "product-sizes";
    baseColor.className = "product-base-color";
    price.className = "product-price";
    discountedPrice.className = "product-discounted-price";
    tags.className = "product-tags";
    addToCartButton.className = "cta";
    goToCartButton.className = "cta-cart";
    backButton.className = "cta";

    image.src = product.image.url;
    image.alt = product.image.alt;
    title.textContent = product.title;
    price.textContent = `$${product.price}`;
    discountedPrice.textContent = `$${product.discountedPrice}`;
    description.textContent = product.description;
    sizes.textContent = `Available Sizes: ${product.sizes.join(", ")}`;
    baseColor.textContent = `Color: ${product.baseColor}`;
    tags.textContent = `Category: ${product.tags.join(", ")}`;
    addToCartButton.textContent = "Add to Cart";
    goToCartButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Go to Cart`;
    backButton.textContent = "Back to store";

    addToCartButton.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ id: product.id, title: product.title, price: product.price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to cart!");
    });

    goToCartButton.addEventListener("click", () => {
      window.location.href = "pages/cart.html";
    });

    backButton.addEventListener("click", () => {
      window.history.back();
    });

    container.appendChild(content);

    productDiv.appendChild(title);
    productDiv.appendChild(image);
    productDiv.appendChild(description);

    if (onSale) {
      productDiv.appendChild(discountedPrice);
      productDiv.appendChild(price);
      price.classList.add("line-through");
    } else {
      productDiv.appendChild(price);
    }

    productDiv.appendChild(sizes);
    productDiv.appendChild(baseColor);
    productDiv.appendChild(tags);

    productDiv.appendChild(addToCartButton);
    productDiv.appendChild(goToCartButton);
    content.appendChild(backButton);

    container.appendChild(productDiv);
  } catch (error) {
    console.error("Error fetching product:", error);
    container.innerHTML = `<p>Oops! Couldn't find that product. Please try again later.</p>`;
  }
}

fetchAndCreateProduct();
