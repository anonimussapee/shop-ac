const productContainer = document.getElementById('product-container');

fetch('https://ecommercebackend.fundamentos-29.repl.co')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span>Precio: $${product.price}</span>
      `;
            productContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error(error));
