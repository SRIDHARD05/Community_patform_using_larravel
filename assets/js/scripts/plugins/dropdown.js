class Dropdown {
    constructor(options) {
        this.defaults = {
            buttonSelector: '',
            items: [],
            dropdownMenuClass: 'dropdown-menu',
            onItemClick: null,
        };

        this.settings = { ...this.defaults, ...options };

        if (!this.settings.buttonSelector) {
            console.error("Error: 'buttonSelector' option is required.");
            return;
        }

        this.init();
    }

    init() {
        const button = document.querySelector(this.settings.buttonSelector);

        if (!button) {
            console.error(`Error: Button '${this.settings.buttonSelector}' not found.`);
            return;
        }

        this.dropdownMenu = document.createElement('ul');
        this.dropdownMenu.className = this.settings.dropdownMenuClass;
        this.dropdownMenu.setAttribute('aria-labelledby', button.id);

        this.settings.items.forEach((item, index) => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.className = `dropdown-item ${item.class || ''}`;
            anchor.href = item.href || '#';
            anchor.textContent = item.name;
            anchor.id = item.id || `dropdown-item-${index}`;

            if (typeof this.settings.onItemClick === 'function') {
                anchor.addEventListener('click', () => {
                    this.settings.onItemClick(item);
                    this.dropdownMenu.style.display = 'none';
                });
            }

            listItem.appendChild(anchor);
            this.dropdownMenu.appendChild(listItem);
        });

        button.parentNode.appendChild(this.dropdownMenu);

        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const isVisible = this.dropdownMenu.style.display === 'block';
            this.dropdownMenu.style.display = isVisible ? 'none' : 'block';

            if (!isVisible) {
                this.positionDropdown(button);
            } else {
                this.dropdownMenu.style.display = 'none';
            }
        });

        document.addEventListener('click', (event) => {
            if (!button.contains(event.target) && !this.dropdownMenu.contains(event.target)) {
                this.dropdownMenu.style.display = 'none';
            }
        });
    }

    positionDropdown(button) {
        const buttonRect = button.getBoundingClientRect();
        const dropdownTop = buttonRect.bottom + window.scrollY + 5;

        this.dropdownMenu.style.position = 'absolute';
        this.dropdownMenu.style.top = `${dropdownTop}px`;

        this.dropdownMenu.style.display = 'block';
        this.dropdownMenu.style.maxHeight = 'none';
        this.dropdownMenu.style.overflowY = 'visible';
    }

    getItemData(itemId) {
        const item = this.settings.items.find(i => i.id === itemId);
        return item ? item : null;
    }
}
