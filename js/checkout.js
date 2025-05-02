const container = document.querySelector(".product-container");
const preloader = document.querySelector(".preloader");
const API_URL = "https://v2.api.noroff.dev/rainy-days";
const cartContainer = document.getElementById("cart-container");

function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const cartList = document.createElement("ul");

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.title} - $${item.price}`;
    cartList.appendChild(listItem);
  });

  cartContainer.appendChild(cartList);

  const clearCartButton = document.createElement("button");
  clearCartButton.textContent = "Empty Cart";
  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    displayCartItems();
  });

  cartContainer.appendChild(clearCartButton);
}

displayCartItems();
