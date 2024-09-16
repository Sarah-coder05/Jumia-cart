const cartItems = [
    { name: 'Nokia C31 - Charcoal', price: 81994, quantity: 1 },
    { name: 'Nokia C31 - Mint', price: 82990, quantity: 1 },
    { name: 'S24 Ultra 4G', price: 207690, quantity: 1 },
    { name: 'Axa Mansard Jumia Protect', price: 16683, quantity: 1 }
];

// Function to calculate total price
function calculateTotal() {
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    document.querySelector('.total-amount').textContent = `₦ ${totalPrice}`;
    document.querySelector('.checkout-btn').textContent = `CHECKOUT (₦ ${totalPrice})`;
}

// Function to update the quantity of an item
function updateQuantity(index, operation) {
    if (operation === 'add') {
        cartItems[index].quantity += 1;
    } else if (operation === 'subtract' && cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    }
    renderCart();  // Re-render the cart to reflect the updated quantity and total
}

// Function to render the cart items dynamically
function renderCart() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = `
        <h2>Cart (${cartItems.length})</h2>
        ${cartItems.map((item, index) => `
            <div class="cart-item">
                <img src="./Asset/1 (1).jpg" alt="Product Image" class="product-image">
                <div class="product-details">
                    <h3>${item.name}</h3>
                    <p class="product-description">4G LTE - Great performance</p>
                    <p class="price">₦ ${item.price}</p>
                    <button class="remove-btn" onclick="removeItem(${index})">REMOVE</button>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 'subtract')">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 'add')">+</button>
                </div>
            </div>
        `).join('')}`;
    calculateTotal();
}

// Function to remove item from cart
function removeItem(index) {
    cartItems.splice(index, 1);
    renderCart();  // Re-render the cart after item removal
}

// Initial rendering of cart items
renderCart();
