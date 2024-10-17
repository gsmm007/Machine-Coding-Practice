export class Tags {
    constructor(app) {
        this.app = app;
        this.element = document.createElement('div');
        this.element.className = 'tags-container';
        this.render();
        this.setupTagListeners();
    }

    render() {
        const tags = ['all', 'fastfood', 'italian', 'chinese'];
        this.element.innerHTML = tags.map(tag => `
            <span class="tag" data-type="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
        `).join('');
        document.getElementById('tags').appendChild(this.element);
    }

    setupTagListeners() {
        this.element.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', this.selectTag.bind(this));
        });
    }

    selectTag(event) {
        debugger;
        const selectedType = event.target.dataset.type;
        this.app.selectedTag = selectedType;
        this.app.filterRestaurants(event);
        this.updateTagStyles();
    }

    updateTagStyles() {
        this.element.querySelectorAll('.tag').forEach(tag => {
            tag.classList.remove('selected');
        });
        const activeTag = this.element.querySelector(`.tag[data-type="${this.app.selectedTag}"]`);
        if (activeTag) {
            activeTag.classList.add('selected');
        }
    }
}
