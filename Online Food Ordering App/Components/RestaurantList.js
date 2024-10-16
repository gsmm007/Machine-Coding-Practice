// components/RestaurantList.js
const RestaurantList = (restaurants, addToCart) => {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    restaurants.forEach(restaurant => {
        const card = RestaurantCard(restaurant, addToCart);
        restaurantList.appendChild(card);
    });
};
