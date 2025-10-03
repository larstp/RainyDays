# RainyDays

![RainyDays Logo](https://github.com/user-attachments/assets/eddd65a2-163d-438e-9603-a7bbc7e51c18)

### The site is available at: [larstp.github.io/RainyDays](https://larstp.github.io/RainyDays/index.html)

A modern, responsive e-commerce site for outdoor jackets, built as a course assignment for the Noroff FED1 OCT24FT HTML & CSS course as well as the JS1 course. RainyDays lets users browse products, view details, register (mocked), log in (mocked), manage a cart, and complete a mock checkout process. The site is fully static, API-driven, and designed for accessibility and performance.

## Description

RainyDays is a simulated e-commerce web application focused on outdoor apparel. The project demonstrates skills in:

- Modular JavaScript (ES6 modules)
- Responsive, DRY CSS (no frameworks)
- Dynamic cart, product, and checkout logic
- User authentication pop-ups (login/register)
- API-driven product data
- Accessibility and SEO best practices
- Deployment to GitHub Pages

The site is designed to be visually appealing, robust, and easy to maintain, with all resource paths and assets optimized for GitHub Pages hosting.

## Built With

- HTML5, CSS3
- JavaScript (ES6 modules)
- [Figma](#figma)
- GitHub Projects (planning)
- NOROFF RainyDays API

## Getting Started

### Installing

1. Clone the repo:

   ```bash
   git clone https://github.com/larstp/RainyDays.git
   ```

2. Open `index.html` in your browser (or use Live Server for local development).

Or visit the deployed site: [larstp.github.io/RainyDays](https://larstp.github.io/RainyDays/index.html)

### Running

No build steps required. All code is static and client-side. Just open the site in your browser.

## Features

- Product feed with grid and detail pages
- Add/remove products to cart, adjust quantity
- Checkout flow with shipping and payment selection
- Confirmation popup after order
- User registration and login pop-ups (with validation)
- Responsive design for desktop and mobile
- Accessibility features (labels, contrast, keyboard navigation)
- SEO meta tags and semantic HTML
- Loader overlay for async actions

## Folder Structure

- `/css/` — Stylesheets
- `/js/` — JavaScript modules
- `/documents/` — Documentation
- `/images/` — Static assets (images, icons, etc.)
- `/pages/` — HTML pages (about, contact, checkout, etc.)
- `/videos/` — Video assets

## Figma

<table>
  <tr>
    <th>Mobile Prototype</th>
    <th>Desktop Prototype</th>
  </tr>
  <tr>
    <td><a href="https://www.figma.com/proto/lPZ0ajHnzM3GMUnlWwDBlF/FED1---Design---Course-Assignment---Rainy-Days---Lars-Torp-Pettersen?node-id=442-11946&t=YwG63Lt6Q5ejZ6Vu-1">View Mobile Prototype</a></td>
    <td><a href="https://www.figma.com/proto/lPZ0ajHnzM3GMUnlWwDBlF/FED1---Design---Course-Assignment---Rainy-Days---Lars-Torp-Pettersen?node-id=150-143&t=YwG63Lt6Q5ejZ6Vu-1">View Desktop Prototype</a></td>
  </tr>
</table>

Note: Style guide was not part of this assignment, so is not included.

## API Usage

- Fetches product data from the NOROFF RainyDays API
- Uses endpoints for registration and login (mocked, as it is not needed for this assignment)

## Accessibility & SEO

- All forms have labels and validation feedback
- Visually hidden labels for screen readers
- Sufficient color contrast and focus states
- Semantic HTML structure
- Meta tags for SEO and social sharing
- Error handling

## Known Issues / Limitations

- Checkout/payment is a mockup (no real transactions)
- No persistent user address/payment storage (mocked in localStorage)
- Some images in `/images/` are unused (from Figma design)

## Credits

- Icons: [FontAwesome](https://fontawesome.com), [Iconify](https://iconify.design)
- Images: [Unsplash](https://unsplash.com), [Pixabay](https://pixabay.com)
- Loader CSS: [Pure CSS Loaders - loading.io](https://loading.io/css/)
- Code suggestions: [GitHub Copilot](https://github.com/features/copilot)

## Contact

- Author: [larstp](https://github.com/larstp)
