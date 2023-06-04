/* API */
const productContainer = document.getElementById('product-container');

fetch('https://ecommercebackend.fundamentos-29.repl.co')
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-card');
            productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
             <div class="product-info">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price}</div>
             </div>
            <p>${product.description}</p>
                <div class="additional-info">
                    <p class="category">Categoría: ${product.category}</p>
                    <p class="quantity">Cantidad: ${product.quantity}</p>
                </div>`;
            productContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error(error));
