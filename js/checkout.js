const preloader = document.querySelector(".preloader");
const cartContainer = document.getElementById("cart-container");

function displayCartItems() {
  preloader.style.display = "block";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    preloader.style.display = "none"; // Hide the preloader
    cartContainer.innerHTML = "<p>Your cart is empty :(</p>";
    return;
  }

  const cartList = document.createElement("ul");
  let totalPrice = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.title} - $${item.price}`;
    cartList.appendChild(listItem);

    totalPrice += parseFloat(item.price);
  });

  cartContainer.appendChild(cartList);

  const totalPriceElement = document.createElement("p");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  totalPriceElement.style.fontWeight = "bold";
  cartContainer.appendChild(totalPriceElement);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const clearCartButton = document.createElement("button");
  clearCartButton.textContent = "Empty Cart";
  clearCartButton.className = "cart-button";
  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    displayCartItems();
  });
  buttonContainer.appendChild(clearCartButton);

  const checkoutButton = document.createElement("button");
  checkoutButton.textContent = "Proceed to Checkout";
  checkoutButton.className = "cart-button";
  checkoutButton.addEventListener("click", () => {
    window.location.href = "/checkout/confirmation/index.html"; // Redirect to confirmation page
  });
  buttonContainer.appendChild(checkoutButton);

  cartContainer.appendChild(buttonContainer);

  preloader.style.display = "none"; // Hide the preloader
}

displayCartItems();
