// services/restaurantService.js
const restaurantService = (() => {
    const restaurants = [
        { name: "Vegan Bistro", rating: 4.5, type: "vegan" },
        { name: "The Burger Place", rating: 4.2, type: "non-vegan" },
        { name: "Green Salad Cafe", rating: 4.7, type: "vegan" },
        { name: "Pizza Paradise", rating: 4.0, type: "non-vegan" },
        { name: "Healthy Eats", rating: 4.8, type: "vegan" },
        { name: "Steak House", rating: 4.6, type: "non-vegan" }
    ];

    return {
        getRestaurants: () => restaurants
    };
})();
