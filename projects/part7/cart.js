// Simple Cart System
let cartItems = [];
let cartCount = 0;
let cartTotal = 0;

// Save cart to a global variable that persists
function saveCart() {
    window.name = JSON.stringify({ items: cartItems, count: cartCount, total: cartTotal });
}

// Load cart from global variable
function loadCart() {
    if (window.name) {
        try {
            const saved = JSON.parse(window.name);
            cartItems = saved.items || [];
            cartCount = saved.count || 0;
            cartTotal = saved.total || 0;
        } catch (e) {
            cartItems = [];
            cartCount = 0;
            cartTotal = 0;
        }
    }
}

// Update cart display in header
function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    const cartLink = document.getElementById('cart-link');

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    if (cartTotalElement) {
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }

    // For older cart links without spans
    if (cartLink && !cartCountElement) {
        cartLink.textContent = `Cart (${cartCount}) - $${cartTotal.toFixed(2)}`;
    }
}

// Add item to cart
function addToCart(name, price) {
    cartItems.push({ name: name, price: parseFloat(price) });
    cartCount++;
    cartTotal += parseFloat(price);
    saveCart();
    updateCartDisplay();
    
    // Show added message
    alert(`${name} added to cart!`);
}

// Remove item from cart
function removeFromCart(index) {
    const removedItem = cartItems[index];
    cartTotal -= removedItem.price;
    cartCount--;
    cartItems.splice(index, 1);
    saveCart();
    updateCartDisplay();
    showCartPage();
}

// Show cart page content
function showCartPage() {
    const cartSection = document.querySelector('.featured');
    
    if (!cartSection) return;
    
    if (cartItems.length === 0) {
        cartSection.innerHTML = `
            <h2>Your Cart</h2>
            <p style="text-align: center; padding: 2rem;">Your cart is empty</p>
            <div style="text-align: center;">
                <a href="index.html"><button style="padding: 0.8rem 1.5rem; background: var(--color-highlight); color: white; border: none; border-radius: 4px; cursor: pointer;">Continue Shopping</button></a>
            </div>
        `;
        return;
    }

    let cartHTML = `<h2>Your Cart</h2>
        <div style="overflow-x: auto;">
            <table border="1" cellpadding="10" cellspacing="0" style="margin: auto; background: var(--color-card-bg); color: var(--color-text); min-width: 500px; border-color: var(--color-border);">
                <tr style="background: var(--color-header-bg);">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>`;
    
    cartItems.forEach((item, index) => {
        cartHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>
                        <button onclick="removeFromCart(${index})" 
                                style="background: #dc3545; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: bold;">
                            Remove
                        </button>
                    </td>
                </tr>`;
    });
    
    cartHTML += `
            </table>
        </div>
        <p style="text-align: center; font-weight: bold; margin-top: 20px; font-size: 1.3rem;">
            Total: $${cartTotal.toFixed(2)}
        </p>
        <div style="text-align: center; margin-top: 20px;">
            <a href="checkout.html">
                <button style="background: var(--color-highlight); color: white; border: none; padding: 1rem 2rem; border-radius: 4px; cursor: pointer; font-size: 1.1rem; font-weight: bold;">
                    Proceed to Checkout
                </button>
            </a>
        </div>`;
    
    cartSection.innerHTML = cartHTML;
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load cart first
    loadCart();
    updateCartDisplay();
    
    // Add to cart buttons
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            addToCart(name, price);
        });
    });

    // If on cart page, show cart items
    if (window.location.href.includes('cart.html')) {
        showCartPage();
    }
});