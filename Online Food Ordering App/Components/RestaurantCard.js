// components/RestaurantCard.js
const RestaurantCard = (restaurant, addToCart) => {
    const card = document.createElement('div');
    card.className = 'restaurant-card';

    // Add an image for the restaurant (You can use placeholder images or actual URLs)
    card.innerHTML = `
        <img src="https://via.placeholder.com/250x150" alt="${restaurant.name}">
        <div class="restaurant-info">
            <h2 class="restaurant-name">${restaurant.name}</h2>
            <p class="restaurant-rating">⭐ ${restaurant.rating}</p>
            <p class="restaurant-type">${restaurant.type}</p>
            <button class="add-to-cart" data-name="${restaurant.name}">Add to Cart</button>
        </div>
    `;

    card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(restaurant.name));

    return card;
};
