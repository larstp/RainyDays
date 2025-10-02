const main = document.querySelector("main");

function displayCheckoutPage() {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    while (main.firstChild) main.removeChild(main.firstChild);

    if (cart.length === 0) {
      const emptyMsg = document.createElement("p");
      emptyMsg.textContent = "Your cart is empty.";
      main.appendChild(emptyMsg);
      return;
    }

    const formsWrapper = document.createElement("div");
    formsWrapper.className = "checkout-forms-wrapper";

    const paymentContainer = document.createElement("div");
    paymentContainer.className = "checkout-payment-container";

    const paymentHeading = document.createElement("h2");
    paymentHeading.textContent = "Choose Payment Method";
    paymentContainer.appendChild(paymentHeading);

    const paymentOptions = [
      { id: "card", label: "Credit/Debit Card" },
      { id: "paypal", label: "PayPal" },
      { id: "klarna", label: "Klarna" },
      { id: "vipps", label: "Vipps" },
    ];
    const paymentForm = document.createElement("form");
    paymentForm.className = "payment-method-form";
    paymentOptions.forEach((opt) => {
      const radioDiv = document.createElement("div");
      radioDiv.className = "payment-radio-row";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = opt.id;
      radio.name = "payment-method";
      radio.value = opt.id;
      if (opt.id === "card") radio.checked = true;
      const label = document.createElement("label");
      label.setAttribute("for", opt.id);
      label.textContent = opt.label;
      radioDiv.appendChild(radio);
      radioDiv.appendChild(label);
      paymentForm.appendChild(radioDiv);
    });
    paymentContainer.appendChild(paymentForm);

    const shippingContainer = document.createElement("div");
    shippingContainer.className = "checkout-shipping-container";

    const shippingForm = document.createElement("form");
    shippingForm.id = "checkout-form";
    shippingForm.className = "checkout-form";

    const heading = document.createElement("h2");
    heading.textContent = "Shipping Details";
    shippingForm.appendChild(heading);

    const labelName = document.createElement("label");
    labelName.setAttribute("for", "name");
    labelName.textContent = "Full Name";
    shippingForm.appendChild(labelName);
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "name";
    inputName.name = "name";
    inputName.placeholder = "John Doe";
    shippingForm.appendChild(inputName);

    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "email");
    labelEmail.textContent = "Email";
    shippingForm.appendChild(labelEmail);
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";
    inputEmail.name = "email";
    inputEmail.placeholder = "example@email.com";
    shippingForm.appendChild(inputEmail);

    const labelPhone = document.createElement("label");
    labelPhone.setAttribute("for", "phone");
    labelPhone.textContent = "Phone Number";
    shippingForm.appendChild(labelPhone);
    const inputPhone = document.createElement("input");
    inputPhone.type = "tel";
    inputPhone.id = "phone";
    inputPhone.name = "phone";
    inputPhone.placeholder = "123-456-7890";
    shippingForm.appendChild(inputPhone);

    const labelAddress = document.createElement("label");
    labelAddress.setAttribute("for", "address");
    labelAddress.textContent = "Address";
    shippingForm.appendChild(labelAddress);
    const inputAddress = document.createElement("input");
    inputAddress.type = "text";
    inputAddress.id = "address";
    inputAddress.name = "address";
    inputAddress.placeholder = "123 Main Street";
    shippingForm.appendChild(inputAddress);

    const labelCity = document.createElement("label");
    labelCity.setAttribute("for", "city");
    labelCity.textContent = "City";
    shippingForm.appendChild(labelCity);
    const inputCity = document.createElement("input");
    inputCity.type = "text";
    inputCity.id = "city";
    inputCity.name = "city";
    inputCity.placeholder = "City";
    shippingForm.appendChild(inputCity);

    const labelZip = document.createElement("label");
    labelZip.setAttribute("for", "zip");
    labelZip.textContent = "Zip Code";
    shippingForm.appendChild(labelZip);
    const inputZip = document.createElement("input");
    inputZip.type = "text";
    inputZip.id = "zip";
    inputZip.name = "zip";
    inputZip.placeholder = "12345";
    shippingForm.appendChild(inputZip);

    shippingContainer.appendChild(shippingForm);

    formsWrapper.appendChild(paymentContainer);
    formsWrapper.appendChild(shippingContainer);
    main.appendChild(formsWrapper);

    const placeOrderBtn = document.createElement("button");
    placeOrderBtn.textContent = "Place Order";
    placeOrderBtn.className = "cta";
    placeOrderBtn.type = "submit";

    const btnContainer = document.createElement("div");
    btnContainer.className = "checkout-btn-container";
    btnContainer.appendChild(placeOrderBtn);
    main.appendChild(btnContainer);

    btnContainer.addEventListener("click", (e) => {
      if (e.target === placeOrderBtn) {
        shippingForm.requestSubmit();
      }
    });
    shippingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showConfirmationPopup();
    });

    function showConfirmationPopup() {
      const existing = document.getElementById("confirmation-popup");
      if (existing) existing.remove();

      const overlay = document.createElement("div");
      overlay.id = "confirmation-popup";
      overlay.className = "confirmation-popup-overlay";

      const popup = document.createElement("div");
      popup.className = "confirmation-popup-box";

      const h1 = document.createElement("h1");
      h1.textContent = "Thank you!";
      popup.appendChild(h1);

      const p1 = document.createElement("p");
      p1.textContent =
        "Your purchase is complete, and you will receive your clothes shortly!";
      popup.appendChild(p1);

      const p2 = document.createElement("p");
      p2.textContent = "Happy hiking!";
      popup.appendChild(p2);

      const btn = document.createElement("button");
      btn.className = "cta";
      btn.textContent = "Return to Home";
      btn.onclick = function () {
        localStorage.removeItem("cart");
        window.location.href = "../../index.html";
      };
      popup.appendChild(btn);

      overlay.appendChild(popup);
      document.body.appendChild(overlay);
      if (document.body.lastElementChild !== overlay) {
        document.body.removeChild(overlay);
        document.body.appendChild(overlay);
      }
    }
  } catch (error) {
    console.error("Error displaying checkout page:", error);
    while (main.firstChild) main.removeChild(main.firstChild);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Something went wrong. Please try again later.";
    main.appendChild(errorMsg);
  }
}

displayCheckoutPage();
