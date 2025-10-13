export const headerHTML = `
  <div class="header-content">
    <div class="header-logo-text">
      <span>PERFUME PALACE</span>
    </div>
    <div class="navigation-menu">
      <button>Collections <img src="../images/icons/drop-down-icon.svg" alt="Drop Down Menu" class="drop-down-icon"></button>
      <button>Brands <img src="../images/icons/drop-down-icon.svg" alt="Drop Down Menu" class="drop-down-icon"></button>
      <button>Contact Us</button>
    </div>
    <div class="header-actions">
      <button class="heart-icon-button">
        <img src="../images/icons/heart-icon.svg" alt="Heart" class="heart-icon">
      </button>
      <button class="user-icon-button">
        <img src="../images/icons/user-icon.svg" alt="User" class="user-icon">
      </button>
      <button class="cart-icon-button">
        <img src="../images/icons/cart-icon.svg" alt="Cart" class="cart-icon">
      </button>
    </div>
    <button class="hamburger-menu-button">
      <img src="../images/icons/hamburger-menu-icon.svg" alt="Hamburger Menu" class="hamburger-menu-icon">
    </button>
  </div>
`;

export const footerHTML = `
  <div class="footer-content">
          <div class="company-description">
            <span class="company-description-header">PERFUME PALACE</span>
            <p class="company-description-text">The world's largest collection of authentic fragrances curated for every mood and moment.</p>
            <div class="footer-socials">
              <ul>
                <li><img src="../images/icons/instagram-icon.svg" alt="Instagram"></li>
                <li><img src="../images/icons/facebook-icon.svg" alt="Facebook"></li>
                <li><img src="../images/icons/twitter-icon.svg" alt="Twitter"></li>
                <li><img src="../images/icons/whatsapp-icon.svg" alt="Whatsapp"></li>
              </ul>
            </div>
          </div>
          <div class="footer-shop-links">
            <p class="footer-list-header footer-shop-list-header">Shop</p>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="product.html">New Arrivals</a></li>
              <li><a href="product.html">Perfumes</a></li>
              <li><a href="product.html">Fragrances</a></li>
            </ul>
          </div>
          <div class="customer-service-links">
            <p class="footer-list-header customer-service-list-header">Customer Service</p>
            <ul>
              <li><a href="product.html">Contact Us</a></li>
              <li><a href="product.html">About Us</a></li>
              <li><a href="product.html">FAQ</a></li>
              <li><a href="product.html">Shipping</a></li>
              <li><a href="product.html">Returns</a></li>
            </ul>
          </div>
        </div>
`

export function mountHeader(root = document) {
  const container = root.querySelector('.header-js');
  if (container) {
    container.innerHTML = headerHTML;
  }
}

export function mountFooter(root = document) {
  const container = root.querySelector('.footer-js');
  if (container) {
    container.innerHTML = footerHTML;
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => mountHeader());
  } else {
    mountHeader();
  }
}