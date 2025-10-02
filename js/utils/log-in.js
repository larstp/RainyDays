document.addEventListener("DOMContentLoaded", function () {
  const userLinks = Array.from(document.querySelectorAll("a.user-login-link"));
  userLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showLoginPopup();
    });
  });

  function showLoginPopup() {
    window.showLoginPopup = showLoginPopup;
    const overlay = document.createElement("div");
    overlay.className = "login-modal-overlay";

    const modal = document.createElement("div");
    modal.className = "login-modal-box";

    const left = document.createElement("div");
    left.className = "login-modal-left";
    const img = document.createElement("img");
    img.src = "/images/unsplash/login-left.webp";
    img.alt = "Login visual";
    left.appendChild(img);

    const right = document.createElement("div");
    right.className = "login-modal-right";

    const logo = document.createElement("img");
    logo.src = "/images/logos/RainyDays_Logo.png";
    logo.alt = "RainyDays logo";
    logo.className = "login-modal-logo";
    right.appendChild(logo);

    const h1 = document.createElement("h1");
    h1.textContent = "Log In";
    right.appendChild(h1);

    const form = document.createElement("form");
    form.className = "login-modal-form";

    const emailInput = document.createElement("input");
    emailInput.type = "text";
    emailInput.id = "login-email";
    emailInput.name = "login-email";
    emailInput.autocomplete = "username";
    emailInput.placeholder = "E-Mail / Username";
    form.appendChild(emailInput);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "login-password";
    passwordInput.name = "login-password";
    passwordInput.autocomplete = "current-password";
    passwordInput.placeholder = "Password";
    form.appendChild(passwordInput);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.className = "pop-up-cta";
    submitBtn.textContent = "Log In";
    form.appendChild(submitBtn);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = form.querySelector("#login-email").value.trim();
      const password = form.querySelector("#login-password").value.trim();
      if (username && password) {
        localStorage.setItem("rainydays_logged_in", "true");
        localStorage.setItem("rainydays_username", username);
        overlay.remove();
      } else {
        form.querySelector("#login-email").style.borderColor = username
          ? "#e8e8e8"
          : "red";
        form.querySelector("#login-password").style.borderColor = password
          ? "#e8e8e8"
          : "red";
      }
    });
    right.appendChild(form);

    const forgot = document.createElement("p");
    forgot.textContent = "I forgot my password";
    forgot.className = "login-modal-forgot";
    right.appendChild(forgot);

    const sep = document.createElement("div");
    sep.className = "login-modal-separator";
    right.appendChild(sep);

    const noAccount = document.createElement("p");
    noAccount.textContent = "Don't have an account?";
    right.appendChild(noAccount);

    const signUp = document.createElement("button");
    signUp.type = "button";
    signUp.textContent = "Sign up";
    signUp.className = "pop-up-cta";
    signUp.style.marginTop = "0";
    right.appendChild(signUp);

    signUp.addEventListener("click", function () {
      overlay.remove();
      if (window.showRegisterPopup) {
        window.showRegisterPopup();
      }
    });

    modal.appendChild(left);
    modal.appendChild(right);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
    document.addEventListener("keydown", function escListener(e) {
      if (e.key === "Escape") {
        overlay.remove();
        document.removeEventListener("keydown", escListener);
      }
    });
  }
});
