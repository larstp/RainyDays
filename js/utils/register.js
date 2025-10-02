document.addEventListener("DOMContentLoaded", function () {
  function getSignUpLinks() {
    const mobileLinks = Array.from(
      document.querySelectorAll('a[href$="signup.html"]')
    );
    const modalLinks = Array.from(document.querySelectorAll(".sign-up__text"));
    return [...mobileLinks, ...modalLinks];
  }

  function attachSignUpListeners() {
    getSignUpLinks().forEach((link) => {
      link.removeEventListener("click", signUpHandler);
      link.addEventListener("click", signUpHandler);
    });
  }

  function signUpHandler(e) {
    e.preventDefault();
    const loginModal = document.querySelector(".login-modal-overlay");
    if (loginModal) loginModal.remove();
    showRegisterPopup();
  }

  function showRegisterPopup() {
    const overlay = document.createElement("div");
    overlay.className = "login-modal-overlay";

    const modal = document.createElement("div");
    modal.className = "login-modal-box";

    const left = document.createElement("div");
    left.className = "login-modal-left";
    const img = document.createElement("img");
    img.src = "/images/unsplash/signup-left.webp";
    img.alt = "Sign up visual";
    left.appendChild(img);

    const right = document.createElement("div");
    right.className = "login-modal-right";

    const logo = document.createElement("img");
    logo.src = "/images/logos/RainyDays_Logo.webp";
    logo.alt = "RainyDays logo";
    logo.className = "login-modal-logo";
    right.appendChild(logo);

    const h1 = document.createElement("h1");
    h1.textContent = "Sign up";
    right.appendChild(h1);

    const form = document.createElement("form");
    form.className = "login-modal-form";

    const fullnameInput = document.createElement("input");
    fullnameInput.type = "text";
    fullnameInput.id = "register-fullname";
    fullnameInput.name = "register-fullname";
    fullnameInput.autocomplete = "name";
    fullnameInput.placeholder = "Full Name";
    form.appendChild(fullnameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "register-email";
    emailInput.name = "register-email";
    emailInput.autocomplete = "email";
    emailInput.placeholder = "E-Mail";
    form.appendChild(emailInput);

    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.id = "register-username";
    usernameInput.name = "register-username";
    usernameInput.autocomplete = "username";
    usernameInput.placeholder = "Username";
    form.appendChild(usernameInput);

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "register-password";
    passwordInput.name = "register-password";
    passwordInput.autocomplete = "new-password";
    passwordInput.placeholder = "Password";
    form.appendChild(passwordInput);

    const repeatInput = document.createElement("input");
    repeatInput.type = "password";
    repeatInput.id = "register-repeat";
    repeatInput.name = "register-repeat";
    repeatInput.autocomplete = "new-password";
    repeatInput.placeholder = "Repeat password";
    form.appendChild(repeatInput);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.className = "cta";
    submitBtn.textContent = "Create account";
    form.appendChild(submitBtn);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullname = form.querySelector("#register-fullname").value.trim();
      const email = form.querySelector("#register-email").value.trim();
      const username = form.querySelector("#register-username").value.trim();
      const password = form.querySelector("#register-password").value.trim();
      const repeat = form.querySelector("#register-repeat").value.trim();
      let valid = true;
      if (!fullname) {
        form.querySelector("#register-fullname").style.borderColor = "red";
        valid = false;
      } else {
        form.querySelector("#register-fullname").style.borderColor = "#e8e8e8";
      }
      if (!email) {
        form.querySelector("#register-email").style.borderColor = "red";
        valid = false;
      } else {
        form.querySelector("#register-email").style.borderColor = "#e8e8e8";
      }
      if (!username) {
        form.querySelector("#register-username").style.borderColor = "red";
        valid = false;
      } else {
        form.querySelector("#register-username").style.borderColor = "#e8e8e8";
      }
      if (!password) {
        form.querySelector("#register-password").style.borderColor = "red";
        valid = false;
      } else {
        form.querySelector("#register-password").style.borderColor = "#e8e8e8";
      }
      if (!repeat || repeat !== password) {
        form.querySelector("#register-repeat").style.borderColor = "red";
        valid = false;
      } else {
        form.querySelector("#register-repeat").style.borderColor = "#e8e8e8";
      }
      if (valid) {
        localStorage.setItem("rainydays_registered", "true");
        localStorage.setItem("rainydays_username", username);
        overlay.remove();
      }
    });
    right.appendChild(form);

    const sep = document.createElement("div");
    sep.className = "login-modal-separator";
    right.appendChild(sep);

    const already = document.createElement("p");
    already.textContent = "Already a member?";
    right.appendChild(already);

    const logInBtn = document.createElement("button");
    logInBtn.type = "button";
    logInBtn.textContent = "Log in";
    logInBtn.className = "cta";
    logInBtn.style.marginTop = "0";
    right.appendChild(logInBtn);

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

    logInBtn.addEventListener("click", function () {
      overlay.remove();
      if (window.showLoginPopup) {
        window.showLoginPopup();
      } else {
        location.reload();
      }
    });
  }

  window.showRegisterPopup = showRegisterPopup;

  attachSignUpListeners();

  const observer = new MutationObserver(() => {
    attachSignUpListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
