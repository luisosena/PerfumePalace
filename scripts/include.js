function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');

  elements.forEach(element => {
    const file = element.getAttribute('data-include');

    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to load file: ${file}`);
          return response.text();
        })
        .then(data => {
          element.innerHTML = data;
        })
        /*
        .catch(error => {
          console.error('Error fetching file:', error);
        });
        */
        .catch(error => {
        console.error(error);
        element.innerHTML = `<p>Error loading file ${file}</p>`;
        })
    }
  })

}

document.addEventListener('DOMContentLoaded', includeHTML);