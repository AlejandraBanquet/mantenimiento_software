// Función para cargar los productos del carrito
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = ''; // Limpiar contenido anterior

    let totalAmount = 0;

    cart.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product';
        productItem.innerHTML = `
            <img src="${product.image}" class="product-image" alt="${product.name}">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">Precio: $${product.price}</div>
                <div class="product-quantity">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <input type="text" value="${product.quantity}" readonly>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(productItem);
        totalAmount += product.price * product.quantity;
    });

    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Función para actualizar la cantidad de productos
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart.splice(index, 1); // Eliminar producto si la cantidad es menor a 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

// Función para realizar el pago
function checkout() {
    alert('Pedido realizado con éxito');
    localStorage.removeItem('cart');
    loadCart();
}

// Cargar los productos del carrito al cargar la página
window.onload = loadCart;
