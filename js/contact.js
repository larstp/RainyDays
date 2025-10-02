function insertContactContent() {
  const main = document.createElement("main");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact us!";
  main.appendChild(h1);

  const contactContainer = document.createElement("section");
  contactContainer.className = "contact-container";

  const contactSection = document.createElement("section");
  contactSection.className = "contact";
  const form = document.createElement("form");
  form.method = "post";
  const fieldset = document.createElement("div");
  fieldset.className = "contact__fieldset";

  const sec1 = document.createElement("section");
  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Full Name*";
  sec1.appendChild(labelName);
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  inputName.name = "name";
  sec1.appendChild(inputName);

  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "Email*";
  sec1.appendChild(labelEmail);
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.name = "email";
  sec1.appendChild(inputEmail);

  const labelPhone = document.createElement("label");
  labelPhone.setAttribute("for", "email");
  labelPhone.textContent = "Phone number";
  sec1.appendChild(labelPhone);
  const inputPhone = document.createElement("input");
  inputPhone.type = "phone";
  inputPhone.id = "phone";
  inputPhone.name = "phone";
  sec1.appendChild(inputPhone);
  fieldset.appendChild(sec1);

  const sec2 = document.createElement("section");
  const divMsg = document.createElement("div");
  divMsg.className = "contact__fieldset_message";
  const labelMsg = document.createElement("label");
  labelMsg.setAttribute("for", "message");
  labelMsg.textContent = "Message";
  divMsg.appendChild(labelMsg);
  const textarea = document.createElement("textarea");
  textarea.name = "message";
  textarea.id = "message";
  textarea.rows = 15;
  textarea.cols = 40;
  divMsg.appendChild(textarea);
  sec2.appendChild(divMsg);
  fieldset.appendChild(sec2);

  const sec3 = document.createElement("section");
  const divCheck = document.createElement("div");
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.name = "newsletter";
  inputCheck.id = "newsletter";
  inputCheck.value = "newsletter";
  divCheck.appendChild(inputCheck);
  const labelCheck = document.createElement("label");
  labelCheck.setAttribute("for", "newsletter");
  labelCheck.textContent = "Sign up for our newsletter";
  divCheck.appendChild(labelCheck);
  sec3.appendChild(divCheck);
  fieldset.appendChild(sec3);

  const sec4 = document.createElement("section");
  sec4.className = "cta__send";
  const aSend = document.createElement("a");
  aSend.href = "placeholders/back.html";
  aSend.className = "cta";
  aSend.textContent = "Send";
  sec4.appendChild(aSend);
  fieldset.appendChild(sec4);

  form.appendChild(fieldset);
  contactSection.appendChild(form);
  contactContainer.appendChild(contactSection);

  const contactText1 = document.createElement("section");
  contactText1.className = "contact-text";
  const p1 = document.createElement("p");
  p1.textContent = "Have a question about our products?";
  contactText1.appendChild(p1);
  const p2 = document.createElement("p");
  p2.textContent = "Need help with shipping or returns?";
  contactText1.appendChild(p2);
  const p3 = document.createElement("p");
  p3.textContent =
    "Interested in collaborating with us or have a brilliant product idea? We’re here to help! Our friendly and knowledgeable team is always ready to assist you.";
  contactText1.appendChild(p3);
  const p4 = document.createElement("p");
  p4.textContent =
    "Whether you’re a seasoned customer or a curious newcomer, feel free to reach out anytime!";
  contactText1.appendChild(p4);
  const img = document.createElement("img");
  img.src = "../images/unsplash/contact picture.webp";
  img.alt = "Picture of the whole team jumping for joy";
  img.className = "contact-image";
  contactText1.appendChild(img);
  contactContainer.appendChild(contactText1);

  main.appendChild(contactContainer);

  const contactText2 = document.createElement("section");
  contactText2.className = "contact-text";
  const p5 = document.createElement("p");
  p5.textContent =
    "If you prefer a more hands-on experience, why not visit one of our fantastic flagship stores?";
  contactText2.appendChild(p5);
  const p6 = document.createElement("p");
  p6.className = "contact-text-desktop";
  p6.textContent =
    "Our store associates are passionate about our products and can help you find the perfect item. You can browse our latest collections, try on different styles, and get expert advice. We look forward to welcoming you in-store!";
  contactText2.appendChild(p6);
  main.appendChild(contactText2);

  const contactMaps = document.createElement("section");
  contactMaps.className = "contact-maps";

  const maps = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26182.097799695686!2d-0.12383256841631934!3d51.50781237090624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1736859468947!5m2!1sen!2sno",
      city: "London",
      address: "Rainydays LO 71 Cherry Court SOUTHAMPTON SO53 5PD UK",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19241.000652183535!2d-3.1842683111270493!3d55.95216980496092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1736859516230!5m2!1sen!2sno",
      city: "Edinburgh",
      address: "Rainydays EB 54 Castle Road STOCKBRIDGE S098 8LD UK",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17294.737642274442!2d10.754274026662795!3d59.91193526195329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1736859585148!5m2!1sen!2sno",
      city: "Oslo",
      address: "Rainydays OS Dronning Eufemias Gate 65 0120, Oslo NORGE",
    },
    {
      src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27398.709482560524!2d18.421879361467763!3d-33.922792001431596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1736859614983!5m2!1sen!2sno",
      city: "Cape Town",
      address: "129 Long St Cape Town City Centre Cape Town 8000 South Africa",
    },
  ];
  maps.forEach((map) => {
    const div = document.createElement("div");
    div.className = "map-specific";
    const iframe = document.createElement("iframe");
    iframe.style.filter = "invert(90%)";
    iframe.src = map.src;
    iframe.width = "400";
    iframe.height = "300";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    div.appendChild(iframe);
    const h2 = document.createElement("h2");
    h2.textContent = map.city;
    div.appendChild(h2);
    const p = document.createElement("p");
    p.textContent = map.address;
    div.appendChild(p);
    contactMaps.appendChild(div);
  });
  main.appendChild(contactMaps);

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
    document.addEventListener("DOMContentLoaded", insertContactContent);
  } else {
    insertContactContent();
  }
}
