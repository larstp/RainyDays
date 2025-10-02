function insertAboutContent() {
  const main = document.createElement("main");

  const sectionBg = document.createElement("section");
  sectionBg.className = "mountain-background";
  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.id = "mountains-video";
  const source = document.createElement("source");
  source.src = "../videos/mountains flying.mp4";
  source.type = "video/mp4";
  video.appendChild(source);
  sectionBg.appendChild(video);
  main.appendChild(sectionBg);

  const sectionAbout = document.createElement("section");
  sectionAbout.className = "about-text";

  const h2a = document.createElement("h2");
  h2a.textContent = "Pushing the Comfort Zone";
  sectionAbout.appendChild(h2a);

  const p1 = document.createElement("p");
  p1.textContent =
    "At Rainydays, we're passionate about helping you explore the outdoors, no matter the weather. Our mission is to provide high-quality, durable rain jackets that are both stylish and functional.";
  sectionAbout.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "Whether you're hiking through a misty forest, biking through a downpour, or simply commuting to work, our jackets will keep you dry, comfortable, and ready for any adventure.";
  sectionAbout.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent =
    "Born in the heart of the Scottish Highlands, where rain is as much a part of life as the breathtaking landscapes, Rainydays was founded on a simple principle: to provide reliable, high-quality outdoor gear that can withstand the harshest weather conditions. Inspired by the rugged beauty of the Scottish Highlands, we design our jackets to be both durable and stylish, allowing you to explore the outdoors with confidence. Our mid-range jackets are designed to withstand the elements, ensuring you can embrace the outdoors with confidence. Join us in pushing the comfort zone and experience the joy of exploring, rain or shine.";
  sectionAbout.appendChild(p3);

  const h2b = document.createElement("h2");
  h2b.textContent = "A Commitment to Sustainability";
  sectionAbout.appendChild(h2b);

  const p4 = document.createElement("p");
  p4.textContent =
    "At Rainydays, we're not just focused on providing you with high-quality outdoor gear;";
  sectionAbout.appendChild(p4);

  const p5 = document.createElement("p");
  p5.textContent =
    "we're also dedicated to minimizing our environmental impact. In today's fast-paced, globalized world, we understand the urgency of efficient logistics. However, we also recognize the critical importance of environmental sustainability. That's why we’ve made a firm commitment to climate-neutral shipping. By offsetting carbon emissions from every shipment, we strive to reduce our carbon footprint and contribute to a healthier planet. Our goal is to deliver your orders promptly without compromising on our environmental responsibility. By choosing Rainydays, you're not just choosing a product; you're supporting a brand that values both performance and sustainability.";
  sectionAbout.appendChild(p5);

  const h2c = document.createElement("h2");
  h2c.textContent = "Visit Us";
  sectionAbout.appendChild(h2c);

  const p6 = document.createElement("p");
  p6.textContent = "Want to try on our jackets and get expert advice?";
  sectionAbout.appendChild(p6);

  const p7 = document.createElement("p");
  p7.textContent =
    "Come visit one of our flagship stores in Edinburgh, London, Oslo, Hong Kong, or Cape Town.";
  sectionAbout.appendChild(p7);

  const p8 = document.createElement("p");
  p8.textContent =
    "Our friendly staff is always happy to help you find the perfect jacket and even offer personalized fitting services. Or, simply stop by for a coffee and a chat about your next outdoor adventure.";
  sectionAbout.appendChild(p8);

  const aVisit = document.createElement("a");
  aVisit.href = "contact.html";
  aVisit.className = "cta visit-us-cta";
  aVisit.textContent = "Visit us";
  sectionAbout.appendChild(aVisit);

  main.appendChild(sectionAbout);

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
    document.addEventListener("DOMContentLoaded", insertAboutContent);
  } else {
    insertAboutContent();
  }
}
