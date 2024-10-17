export class RestaurantCard {
    constructor(restaurant, app) {
        this.restaurant = restaurant;
        this.app = app;
    }

    render() {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <img src="${this.restaurant.img}" alt="${this.restaurant.name}" />
            <h3>${this.restaurant.name}</h3>
            <p>Type: ${this.restaurant.type}</p>
            <p class="rating">Rating: ${this.restaurant.rating}</p>
            <p>ETA: ${this.restaurant.eta}</p>
            <input type="checkbox" class="checkbox" data-id="${this.restaurant.id}" ${this.restaurant.favorite ? 'checked' : ''} />
        `;
        return card;
    }
}
