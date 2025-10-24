const API_URL = "http://localhost:3000/api/Perfumes";

async function fetchProducts() {
    const response = await fetch(API_URL);
    return await response.json();
}

function renderProducts(products) {
  const perfumesCardsElement = document.getElementById("perfume-cards");
  perfumesCardsElement.innerHTML = ``;
  products.forEach(product => {
    perfumesCardsElement.innerHTML += `
    <div class="perfume-card">
            <button class="perfume-heart">
              <img src="./images/icons/heart-icon.svg" alt="Heart" class="perfume-heart-icon">
            </button>
            <div class="perfume-image-container">
            <img src="${product.imagefilepath}" alt="Perfume" class="perfume-image">
            </div>
            <div class="perfume-card-content">
            <p class="perfume-brand">${product.brand}</p>
            <p class="perfume-name">${product.name}</p>
            <p class="perfume-price">$${product.price}</p>
            </div>
          </div>`
  })
}

fetchProducts()
  .then( products => {
  renderProducts(products);
});