// Simulación de datos de productos
const products = {
    1: { id: 1, name: 'Acer Aspire 3', price: 279.99, description: 'Laptop con Windows 11', image: 'assets/products/laptop1.jpg' },
    2: { id: 2, name: 'Bears Studio Pro', price: 199.99, description: 'Audífonos inalámbricos Bluetooth', image: 'assets/products/beatstudiopro.jpg' },
    3: { id: 3, name: 'Google Pixel 8', price: 499.00, description: 'Teléfono inteligente', image: 'assets/products/pixel8.jpg' },
    4: { id: 4, name: 'Nintendo Switch', price: 299.00, description: 'Consola de videojuegos', image: 'assets/products/nintendoswitch.jpg' },
    5: { id: 5, name: 'Apple iPhone 14', price: 418.99, description: 'Teléfono inteligente de última generación', image: 'assets/products/iphone.jpg' },
    6: { id: 6, name: 'SONY PlayStation 5 Pro', price: 699.00, description: 'Consola de videojuegos de última generación', image: 'assets/products/ps5pro.jpg' },
    7: { id: 7, name: 'Gaming PC Computadora de Escritorio', price: 1492.05, description: 'PC de alto rendimiento para juegos', image: 'assets/products/pcgamer.jpg' },
    8: { id: 8, name: 'Smart TV 4K LG 55-inch', price: 496.99, description: 'Televisor inteligente 4K de 55 pulgadas', image: 'assets/products/tvlg.jpg' },
    9: { id: 9, name: 'JBL Tune Flex - True Wireless Earbuds', price: 49.95, description: 'Auriculares inalámbricos', image: 'assets/products/jbltune.jpg' },
    10: { id: 10, name: 'HP 17 Laptop', price: 979.00, description: 'Laptop de 17 pulgadas', image: 'assets/products/laptop2.jpg' },
    11: { id: 11, name: 'Samsung Galaxy S24 Ultra', price: 449.99, description: 'Teléfono inteligente de alta gama', image: 'assets/products/samsung.jpg' },
    12: { id: 12, name: 'Marshall Emberton II Parlante Bluethooth', price: 99.99, description: 'Parlante Bluetooth portátil', image: 'assets/products/marshallemberton.jpg' }
};

// Función para cargar los detalles del producto
function loadProduct(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
        document.getElementById('add-to-cart').onclick = () => addToCart(productId);
        loadRecommendations(productId);
    } else {
        document.getElementById('product-details').innerHTML = '<p>Producto no encontrado</p>';
    }
}

// Función para agregar al carrito (simulación)
function addToCart(productId) {
    const product = products[productId];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} agregado al carrito`);
}

// Función para cargar recomendaciones
function loadRecommendations(currentProductId) {
    const recommendationsGrid = document.getElementById('recommendations-grid');
    recommendationsGrid.innerHTML = ''; // Limpiar recomendaciones anteriores

    const productIds = Object.keys(products).filter(id => id != currentProductId);
    const randomRecommendations = [];

    while (randomRecommendations.length < 3 && productIds.length > 0) {
        const randomIndex = Math.floor(Math.random() * productIds.length);
        const randomProductId = productIds.splice(randomIndex, 1)[0];
        randomRecommendations.push(products[randomProductId]);
    }

    randomRecommendations.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <a href="detalle_producto.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
            </a>
        `;
        recommendationsGrid.appendChild(productItem);
    });
}

// Obtener el ID del producto de la URL y cargar los detalles del producto
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
if (productId) {
    loadProduct(productId);
}
