function createEmptyCartVisual() {
  const preloader = document.createElement("div");
  preloader.className = "preloader";
  preloader.style.opacity = "1";

  const svgSun = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgSun.setAttribute("version", "1.1");
  svgSun.setAttribute("id", "sun");
  svgSun.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgSun.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svgSun.setAttribute("x", "0px");
  svgSun.setAttribute("y", "0px");
  svgSun.setAttribute("width", "10px");
  svgSun.setAttribute("height", "10px");
  svgSun.setAttribute("viewBox", "0 0 10 10");
  svgSun.setAttribute("enable-background", "new 0 0 10 10");
  svgSun.setAttribute("xml:space", "preserve");
  svgSun.style.opacity = "1";
  svgSun.style.marginLeft = "0px";
  svgSun.style.marginTop = "0px";
  const sunPaths = [
    {
      fill: "none",
      d: "M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z",
    },
    {
      fill: "none",
      d: "M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z",
    },
    {
      fill: "none",
      d: "M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z",
    },
    {
      fill: "none",
      d: "M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z",
    },
    {
      fill: "none",
      d: "M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z",
    },
    {
      fill: "none",
      d: "M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z",
    },
    {
      fill: "none",
      d: "M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z",
    },
    {
      fill: "none",
      d: "M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z",
    },
    {
      fill: "none",
      d: "M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z",
    },
    {
      fill: "none",
      d: "M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z",
    },
    {
      fill: "none",
      d: "M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z",
    },
    {
      fill: "none",
      d: "M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z",
    },
    {
      fill: "none",
      d: "M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z",
    },
  ];
  sunPaths.forEach((pathData) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", pathData.fill);
    path.setAttribute("d", pathData.d);
    svgSun.appendChild(path);
  });
  preloader.appendChild(svgSun);

  const svgCloud = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgCloud.setAttribute("version", "1.1");
  svgCloud.setAttribute("id", "cloud");
  svgCloud.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgCloud.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
  svgCloud.setAttribute("x", "0px");
  svgCloud.setAttribute("y", "0px");
  svgCloud.setAttribute("width", "10px");
  svgCloud.setAttribute("height", "10px");
  svgCloud.setAttribute("viewBox", "0 0 10 10");
  svgCloud.setAttribute("enable-background", "new 0 0 10 10");
  svgCloud.setAttribute("xml:space", "preserve");
  const pathCloud = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pathCloud.setAttribute("fill", "none");
  pathCloud.setAttribute(
    "d",
    "M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"
  );
  svgCloud.appendChild(pathCloud);
  preloader.appendChild(svgCloud);

  const divRain = document.createElement("div");
  divRain.className = "rain";
  for (let i = 0; i < 10; i++) {
    const span = document.createElement("span");
    span.className = "drop";
    divRain.appendChild(span);
  }
  preloader.appendChild(divRain);

  const divText = document.createElement("div");
  divText.className = "text";
  divText.textContent = "Your shopping cart is empty";
  preloader.appendChild(divText);

  return preloader;
}

import { fetchProductById } from "./api/api.js";

async function insertCartMainContent() {
  const main = document.createElement("main");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.createElement("div");
  cartContainer.id = "cart-container";

  const summaryContainer = document.createElement("div");
  summaryContainer.className = "cart-summary";

  if (cart.length === 0) {
    main.appendChild(createEmptyCartVisual());
  } else {
    const productPromises = cart.map((id) => fetchProductById(id));
    const products = await Promise.all(productPromises);

    const ul = document.createElement("ul");
    const idCounts = {};
    cart.forEach((id) => {
      idCounts[id] = (idCounts[id] || 0) + 1;
    });
    const renderedIds = new Set();
    products.forEach((product) => {
      if (renderedIds.has(product.id)) return;
      renderedIds.add(product.id);
      const quantity = idCounts[product.id] || 1;

      const li = document.createElement("li");
      li.className = "cart-item";
      li.style.position = "relative";

      if (product.image && product.image.url) {
        const img = document.createElement("img");
        img.src = product.image.url;
        img.alt = product.image.alt || product.title;
        img.className = "cart-item-image";
        li.appendChild(img);
      }

      const infoCol = document.createElement("div");
      infoCol.className = "cart-item-info";

      const title = document.createElement("div");
      title.textContent = product.title;
      title.className = "cart-item-title";
      infoCol.appendChild(title);

      if (product.tags) {
        const tags = document.createElement("div");
        tags.textContent = Array.isArray(product.tags)
          ? product.tags.join(", ")
          : product.tags;
        tags.className = "cart-item-tags";
        infoCol.appendChild(tags);
      }

      const priceRow = document.createElement("div");
      priceRow.className = "cart-item-prices";
      if (product.onSale && product.discountedPrice < product.price) {
        const oldPrice = document.createElement("span");
        oldPrice.textContent = `$${product.price}`;
        oldPrice.className = "cart-item-old-price";
        priceRow.appendChild(oldPrice);
        const discounted = document.createElement("span");
        discounted.textContent = `$${product.discountedPrice}`;
        discounted.className = "cart-item-discounted-price";
        priceRow.appendChild(discounted);
      } else {
        const price = document.createElement("span");
        price.textContent = `$${product.price}`;
        price.className = "cart-item-price";
        priceRow.appendChild(price);
      }
      infoCol.appendChild(priceRow);

      li.appendChild(infoCol);

      const qtyContainer = document.createElement("div");
      qtyContainer.className = "cart-item-qty-container";

      const minusBtn = document.createElement("button");
      minusBtn.className = "cart-item-qty-btn cart-item-qty-minus";
      minusBtn.textContent = "-";
      minusBtn.onclick = function (e) {
        e.preventDefault();
        let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
        const idx = cartArr.indexOf(product.id);
        if (idx !== -1 && idCounts[product.id] > 1) {
          cartArr.splice(idx, 1);
          localStorage.setItem("cart", JSON.stringify(cartArr));
          main.remove();
          insertCartMainContent();
        }
      };
      qtyContainer.appendChild(minusBtn);

      const qtyCount = document.createElement("span");
      qtyCount.className = "cart-item-qty-count";
      qtyCount.textContent = quantity;
      qtyContainer.appendChild(qtyCount);

      const plusBtn = document.createElement("button");
      plusBtn.className = "cart-item-qty-btn cart-item-qty-plus";
      plusBtn.textContent = "+";
      plusBtn.onclick = function (e) {
        e.preventDefault();
        let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
        cartArr.push(product.id);
        localStorage.setItem("cart", JSON.stringify(cartArr));
        main.remove();
        insertCartMainContent();
      };
      qtyContainer.appendChild(plusBtn);

      li.appendChild(qtyContainer);

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "cart-item-delete";
      deleteBtn.title = "Remove from cart";
      deleteBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#5e2c07"/><path d="M7 7L13 13M13 7L7 13" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`;
      deleteBtn.onclick = function (e) {
        e.preventDefault();
        let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
        cartArr = cartArr.filter((id) => id !== product.id);
        localStorage.setItem("cart", JSON.stringify(cartArr));
        main.remove();
        insertCartMainContent();
      };
      li.appendChild(deleteBtn);

      ul.appendChild(li);
    });
    cartContainer.appendChild(ul);

    const summaryTitle = document.createElement("h2");
    summaryTitle.textContent = "Summary";
    summaryContainer.appendChild(summaryTitle);

    let priceBeforeDiscount = 0;
    let totalDiscount = 0;
    let total = 0;
    const idCountsSummary = {};
    cart.forEach((id) => {
      idCountsSummary[id] = (idCountsSummary[id] || 0) + 1;
    });
    const summaryIds = new Set();
    products.forEach((product) => {
      if (summaryIds.has(product.id)) return;
      summaryIds.add(product.id);
      const qty = idCountsSummary[product.id] || 1;
      const original = product.price * qty;
      const discounted =
        product.onSale && product.discountedPrice < product.price
          ? product.discountedPrice * qty
          : product.price * qty;
      priceBeforeDiscount += product.price * qty;
      total += discounted;
      totalDiscount +=
        (product.price -
          (product.onSale && product.discountedPrice < product.price
            ? product.discountedPrice
            : product.price)) *
        qty;
    });

    const priceDiv = document.createElement("div");
    priceDiv.textContent = `Price: $${priceBeforeDiscount.toFixed(2)}`;
    priceDiv.className = "cart-summary-price";
    summaryContainer.appendChild(priceDiv);

    const discountDiv = document.createElement("div");
    discountDiv.textContent = `Discount: -$${totalDiscount.toFixed(2)}`;
    discountDiv.className = "cart-summary-discount";
    summaryContainer.appendChild(discountDiv);

    const separator = document.createElement("div");
    separator.className = "cart-summary-separator";
    summaryContainer.appendChild(separator);

    const totalDiv = document.createElement("div");
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    totalDiv.className = "cart-summary-total";
    summaryContainer.appendChild(totalDiv);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Go to Checkout";
    checkoutBtn.className = "cta";
    checkoutBtn.onclick = function (e) {
      e.preventDefault();

      const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
      if (isLoggedIn) {
        window.location.href = "checkout.html";
      } else {
        const loginOverlay = document.getElementById("log-in-overlay");
        if (loginOverlay) {
          loginOverlay.classList.remove("hidden");
        } else if (typeof window.openLoginOverlay === "function") {
          window.openLoginOverlay();
        } else {
          const loginBtn = document.querySelector(
            "[data-login-btn], .login-btn, #login-btn"
          );
          if (loginBtn) {
            loginBtn.click();
          } else {
            let errorBox = document.createElement("div");
            errorBox.textContent = "Please log in to proceed to checkout.";
            errorBox.className = "cart-error-popup";
            document.body.appendChild(errorBox);
            setTimeout(() => {
              errorBox.classList.add("hide");
              setTimeout(() => errorBox.remove(), 400);
            }, 2500);
          }
        }
      }
    };
    summaryContainer.appendChild(checkoutBtn);

    const flexWrap = document.createElement("div");
    flexWrap.className = "cart-main-flex";
    flexWrap.appendChild(cartContainer);
    flexWrap.appendChild(summaryContainer);
    main.appendChild(flexWrap);
  }

  const body = document.body;
  const firstScript = body.querySelector("script");
  if (firstScript) {
    body.insertBefore(main, firstScript);
  } else {
    body.appendChild(main);
  }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertCartMainContent);
  } else {
    insertCartMainContent();
  }
}
