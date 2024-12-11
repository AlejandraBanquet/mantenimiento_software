// Simulación de datos de productos
const products = [
    { id: 1, name: 'Acer Aspire 3', price: 279.99, image: 'assets/products/laptop1.jpg' },
    { id: 2, name: 'Bears Studio Pro - Wireless Bluethooth', price: 199.99, image: 'assets/products/beatstudiopro.jpg' },
    { id: 3, name: 'Google Pixel 8', price: 499.00, image: 'assets/products/pixel8.jpg' },
    { id: 4, name: 'Nintendo Switch', price: 299.00, image: 'assets/products/nintendoswitch.jpg' },
    { id: 5, name: 'Apple iPhone 14', price: 418.99, image: 'assets/products/iphone.jpg' },
    { id: 6, name: 'SONY PlayStation 5 Pro', price: 699.00, image: 'assets/products/ps5pro.jpg' },
    { id: 7, name: 'Gaming PC Computadora de Escritorio', price: 1492.05, image: 'assets/products/pcgamer.jpg' },
    { id: 8, name: 'Smart TV 4K LG 55-inch', price: 496.99, image: 'assets/products/tvlg.jpg' },
    { id: 9, name: 'JBL Tune Flex - True Wireless Earbuds', price: 49.95, image: 'assets/products/jbltune.jpg' },
    { id: 10, name: 'HP 17 Laptop', price: 979.00, image: 'assets/products/laptop2.jpg' },
    { id: 11, name: 'Samsung Galaxy S24 Ultra', price: 449.99, image: 'assets/products/samsung.jpg' },
    { id: 12, name: 'Marshall Emberton II Parlante Bluethooth', price: 99.99, image: 'assets/products/marshallemberton.jpg' }
];

// Función para cargar los productos dinámicamente
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productItem = document.createElement('a');
        productItem.href = `detalle_producto.html?id=${product.id}`;
        productItem.innerHTML = `
            <div class="product-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
            </div>
        `;
        productGrid.appendChild(productItem);
    });
}

// Cargar los productos al cargar la página
window.onload = loadProducts;
