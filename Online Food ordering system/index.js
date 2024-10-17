/*const restaurants = [
    { id: 1, name: "Pizza Place", type: "fastfood", rating: 4.5, eta: "30 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Pizza" },
    { id: 2, name: "Italian Bistro", type: "italian", rating: 4.7, eta: "25 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Italian" },
    { id: 3, name: "Chow Mein House", type: "chinese", rating: 4.3, eta: "20 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Chinese" },
    // Add more restaurant objects as needed...
];

class RestaurantApp {
    constructor(restaurants) {
        this.restaurants = restaurants;
        this.filteredRestaurants = restaurants;
        this.showingFavorites = false;
        this.init();
    }

    init() {
        this.renderRestaurants();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('search').addEventListener('input', this.debounce(this.searchRestaurants.bind(this), 300));
        document.getElementById('filter').addEventListener('change', this.filterRestaurants.bind(this));
        document.getElementById('sort').addEventListener('change', this.sortRestaurants.bind(this));
        document.getElementById('show-favorites').addEventListener('click', this.toggleFavorites.bind(this));
    }

    debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    renderRestaurants() {
        const restaurantList = document.getElementById('restaurant-list');
        restaurantList.innerHTML = '';
        this.filteredRestaurants.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.innerHTML = `
                <img src="${restaurant.img}" alt="${restaurant.name}" />
                <h3>${restaurant.name}</h3>
                <p>Type: ${restaurant.type}</p>
                <p class="rating">Rating: ${restaurant.rating}</p>
                <p>ETA: ${restaurant.eta}</p>
                <input type="checkbox" class="checkbox" data-id="${restaurant.id}" ${restaurant.favorite ? 'checked' : ''} />
            `;
            restaurantList.appendChild(card);
        });
        this.setupFavoriteListeners();
    }

    setupFavoriteListeners() {
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', this.toggleFavorite.bind(this));
        });
    }

    toggleFavorite(event) {
        const id = parseInt(event.target.dataset.id);
        const restaurant = this.restaurants.find(r => r.id === id);
        restaurant.favorite = event.target.checked;
        this.renderRestaurants();
    }

    toggleFavorites() {
        this.showingFavorites = !this.showingFavorites;
        if (this.showingFavorites) {
            this.filteredRestaurants = this.restaurants.filter(r => r.favorite);
        } else {
            this.filteredRestaurants = this.restaurants;
        }
        this.renderRestaurants();
    }

    searchRestaurants(event) {
        const query = event.target.value.toLowerCase();
        this.filteredRestaurants = this.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(query));
        this.renderRestaurants();
    }

    filterRestaurants(event) {
        const type = event.target.value;
        this.filteredRestaurants = this.restaurants.filter(restaurant => type === 'all' || restaurant.type === type);
        this.renderRestaurants();
    }

    sortRestaurants(event) {
        const criteria = event.target.value;
        this.filteredRestaurants.sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'rating') {
                return b.rating - a.rating;
            } else if (criteria === 'eta') {
                return a.eta.localeCompare(b.eta); // Assume ETA is in comparable string format
            }
            return 0;
        });
        this.renderRestaurants();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RestaurantApp(restaurants);
});
*/

import { Navbar } from './components/Navbar.js';
import { Tags } from './components/Tags.js';
import { RestaurantCard } from './components/RestaurantCard.js';

const restaurants = [
    { id: 1, name: "Pizza Place", type: "fastfood", rating: 4.5, eta: "30 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Pizza" },
    { id: 2, name: "Italian Bistro", type: "italian", rating: 4.7, eta: "25 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Italian" },
    { id: 3, name: "Chow Mein House", type: "chinese", rating: 4.3, eta: "20 mins", favorite: false, img: "https://via.placeholder.com/220x120?text=Chinese" },
];

class RestaurantApp {
    constructor(restaurants) {
        this.restaurants = restaurants;
        this.filteredRestaurants = restaurants;
        this.showingFavorites = false;
        this.selectedTag = 'all'; // Default tag

        new Navbar(this);
        new Tags(this);
        this.renderRestaurants();
    }

    renderRestaurants() {
        const restaurantList = document.getElementById('restaurant-list');
        restaurantList.innerHTML = '';
        this.filteredRestaurants.forEach(restaurant => {
            const card = new RestaurantCard(restaurant, this).render();
            restaurantList.appendChild(card);
        });
        this.setupFavoriteListeners();
    }

    setupFavoriteListeners() {
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', this.toggleFavorite.bind(this));
        });
    }

    toggleFavorite(event) {
        const id = parseInt(event.target.dataset.id);
        const restaurant = this.restaurants.find(r => r.id === id);
        restaurant.favorite = event.target.checked;
        this.renderRestaurants();
    }

    toggleFavorites() {
        this.showingFavorites = !this.showingFavorites;
        if (this.showingFavorites) {
            this.filteredRestaurants = this.restaurants.filter(r => r.favorite);
        } else {
            this.filteredRestaurants = this.restaurants;
        }
        this.renderRestaurants();
    }

    searchRestaurants(event) {
        const query = event.target.value.toLowerCase();
        this.filteredRestaurants = this.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(query));
        this.filterByTag();
        this.renderRestaurants();
    }

    filterRestaurants(event) {
       
            const type = event.target.value;
            if(type) {
            this.filteredRestaurants = this.restaurants.filter(restaurant => type === 'all' || restaurant.type === type);

        } else {
            this.filteredRestaurants = JSON.parse(JSON.stringify(this.restaurants));

        }
        this.filterByTag();
        this.renderRestaurants();
    }

    filterByTag() {
        if (this.selectedTag !== 'all') {
            debugger;
            this.filteredRestaurants = this.filteredRestaurants.filter(restaurant => restaurant.type === this.selectedTag);
        }
    }

    sortRestaurants(event) {
        const criteria = event.target.value;
        this.filteredRestaurants.sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'rating') {
                return b.rating - a.rating;
            } else if (criteria === 'eta') {
                return a.eta.localeCompare(b.eta);
            }
            return 0;
        });
        this.renderRestaurants();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RestaurantApp(restaurants);
});
