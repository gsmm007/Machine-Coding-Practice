// components/Checkout.js
const Checkout = (() => {
    const renderCheckout = () => {
        const checkoutDiv = document.getElementById('checkout');
        checkoutDiv.innerHTML = '';

        const cartItems = Cart.getCart();
        if (cartItems.length === 0) {
            checkoutDiv.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        const totalAmount = cartItems.length * 10; // Placeholder for total amount

        checkoutDiv.innerHTML = `
            <h2>Checkout</h2>
            <p>Total: $${totalAmount}</p>
            <button id="confirm-button">Confirm Order</button>
        `;

        document.getElementById('confirm-button').addEventListener('click', () => {
            alert('Order confirmed!');
            Cart.clearCart();
            renderCheckout();
        });
    };

    return { renderCheckout };
})();
