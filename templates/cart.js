// Select elements
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Retrieve cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear the container
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Create cart item elements
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ${item.price}</p>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;

        cartItemsContainer.appendChild(itemElement);

        // Update total
        total += parseInt(item.price.replace('Rs.', ''), 10);
    });

    // Update total in the DOM
    cartTotalElement.textContent = `Rs.${total}`;
}

// Function to remove an item from the cart
function removeCartItem(itemId) {
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // Reload to update the cart page
}

// Event listener for removing items
cartItemsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const itemId = event.target.getAttribute('data-id');
        removeCartItem(itemId);
    }
});

// Render the cart items on page load
renderCartItems();
