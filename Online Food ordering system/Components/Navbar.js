export class Navbar {
    constructor(app) {
        this.app = app;
        this.element = document.createElement('nav');
        this.element.className = 'navbar';
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.element.innerHTML = `
            <div class="navbar-left">
                <h1 class="logo">Foodie</h1>
                <input type="text" id="search" placeholder="Search for restaurants..." />
            </div>
            <div class="navbar-right">
                <select id="filter">
                    <option value="all">All</option>
                    <option value="fastfood">Fast Food</option>
                    <option value="italian">Italian</option>
                    <option value="chinese">Chinese</option>
                </select>
                <select id="sort">
                    <option value="name">Sort by Name</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="eta">Sort by ETA</option>
                </select>
                <button id="show-favorites">Show Favorites</button>
            </div>
        `;
        document.getElementById('navbar').appendChild(this.element);
    }

    setupEventListeners() {
        document.getElementById('search').addEventListener('input', this.debounce(this.app.searchRestaurants.bind(this.app), 300));
        document.getElementById('filter').addEventListener('change', this.app.filterRestaurants.bind(this.app));
        document.getElementById('sort').addEventListener('change', this.app.sortRestaurants.bind(this.app));
        document.getElementById('show-favorites').addEventListener('click', this.app.toggleFavorites.bind(this.app));
    }

    debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }
}
