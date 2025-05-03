const preloader = document.querySelector(".preloader");
const cartContainer = document.getElementById("cart-container");

function displayCartItems() {
  preloader.style.display = "block"; //Not sure if this is how you are supposed to do a loading animation :o

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const backButton = document.createElement("button");

  if (cart.length === 0) {
    preloader.style.display = "none";
    cartContainer.innerHTML = "<p>Your cart is empty :(</p>";
    cartContainer.style.textAlign = "center";

    const backToStoreButton = document.createElement("button");
    backToStoreButton.textContent = "Back to Storefront";
    backToStoreButton.className = "cart-button";
    backToStoreButton.addEventListener("click", () => {
      window.location.href = "/index.html";
    });

    cartContainer.appendChild(backToStoreButton);
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

  const form = document.createElement("form"); //I could NOT figure out how to do this right. I know we're not supposed to use innerHTML, but I couldn't get it to work otherwise. I tried using createElement for each element, but it was a mess.
  form.id = "checkout-form";
  form.className = "checkout-form";
  form.innerHTML = `
    <h2>Shipping Details</h2>
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name" placeholder="John Doe" required />

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="example@email.com" required />

    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required />

    <label for="address">Address</label>
    <input type="text" id="address" name="address" placeholder="123 Main Street" required />

    <label for="city">City</label>
    <input type="text" id="city" name="city" placeholder="City" required />

    <label for="zip">Zip Code</label>
    <input type="text" id="zip" name="zip" placeholder="12345" required />
  `;
  cartContainer.appendChild(form);

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
    window.location.href = "/checkout/confirmation/index.html";
  }); //Not sure if this is the right way to do this..?

  buttonContainer.appendChild(checkoutButton);

  cartContainer.appendChild(buttonContainer);

  preloader.style.display = "none";
}

displayCartItems();
