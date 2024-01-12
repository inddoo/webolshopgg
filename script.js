const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function addToCart(productId, productName, productPrice) {
    // Retrieve the existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.productId === productId);

    if (existingProduct) {
        // If the product is already in the cart, update the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product is not in the cart, add it with quantity 1
        const newProduct = {
            productId,
            productName,
            productPrice,
            quantity: 1
        };
        cartItems.push(newProduct);
    }

    // Save the updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Provide user feedback (you can customize this part)
    alert('Product added to cart!');
}

// Other existing code...
