// Select all Add-to-Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Array to hold cart items
let cart = [];

// Add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product-item');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('.price').textContent;

        // Create a product object
        const product = { id: productId, name: productName, price: productPrice };

        // Add to cart
        cart.push(product);

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Notify user
        alert(`${productName} has been added to your cart!`);
    });
});
