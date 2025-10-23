const API_URL = "http://localhost:3000/api/perfumes";

let perfumes = [];

async function fetchPerfumes() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.forEach(perfume => {
            perfumes.push(perfume);
        })

    } catch (error) {
        console.error(error);
    }
}

const perfumeElement = document.getElementById("perfumes");
perfumeElement.innerHTML = ``;

function renderPerfumes() {
  perfumes.forEach(perfume => {
    perfumeElement.innerHTML += `
    <div class="perfume-card-2">
      <div class="perfume-image-container">
        <img class="perfume-image" src="./backend/${perfume.imagefilepath}" alt="Perfume">
      </div>
      <div class="perfume-card-content">
        <p class="perfume-name">${perfume.name}</p>
        <p class="perfume-brand">${perfume.brand}</p>
        <p class="perfume-description">${perfume.description}</p>
      </div>
    </div>
    `;
  })
}



fetchPerfumes()
  .then(() => {
    console.log(perfumes);
  })
  .then(() => {
    renderPerfumes();
  })
  .catch(error => {
    console.error(error);
});