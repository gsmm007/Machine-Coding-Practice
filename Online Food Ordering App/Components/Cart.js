// components/Cart.js
const Cart = (() => {
    let cart = [];

    const renderCart = () => {
        const cartDiv = document.getElementById('cart');
        cartDiv.innerHTML = '';
        if (cart.length === 0) {
            cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.textContent = item;
                cartDiv.appendChild(cartItem);
            });
        }
    };

    const addToCart = (item) => {
        cart.push(item);
        renderCart();
    };

    return { addToCart };
})();
