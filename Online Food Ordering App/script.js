// script.js


const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sortby');
const filterSelect = document.getElementById('filter');


// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function filterAndSortRestaurants() {
    const restaurants = restaurantService.getRestaurants();
    let filteredRestaurants = restaurants;

    // Filter
    const filterValue = filterSelect.value;
    if (filterValue !== 'all') {
        filteredRestaurants = filteredRestaurants.filter(r => r.type === filterValue);
    }

    // Search
    const searchValue = searchInput.value.toLowerCase();
    if (searchValue) {
        filteredRestaurants = filteredRestaurants.filter(r => r.name.toLowerCase().includes(searchValue));
    }

    // Sort
    const sortValue = sortSelect.value;
    filteredRestaurants.sort((a, b) => {
        if (sortValue === 'name') {
            return a.name.localeCompare(b.name);
        } else {
            return b.rating - a.rating; // Sort by rating descending
        }
    });

    RestaurantList(filteredRestaurants, Cart.addToCart);
}

// Event listeners
const debouncedFilterAndSort = debounce(filterAndSortRestaurants, 300);
searchInput.addEventListener('input', debouncedFilterAndSort);
sortSelect.addEventListener('change', filterAndSortRestaurants);
filterSelect.addEventListener('change', filterAndSortRestaurants);

// Initial render
filterAndSortRestaurants();



// script.js
// script.js
