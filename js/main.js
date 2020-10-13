var selectDropdown = document.querySelectorAll("[data-select]");

selectDropdown.forEach(function(item) {
    item.addEventListener('click', function() {
        var realSelect = this.nextElement;
        if (event.target.hasAttribute('data-select-item')) {
            var itemTitle = event.target.getAttribute('data-select-item');
            this.querySelector('[data-select-title]').textContent = itemTitle;

            this.querySelector('.subtitle-dropdown').classList.toggle('hidden');

            if (realSelect) {
                realSelect.value = itemTitle;
            } 
        } else {
                this.querySelector(".subtitle-dropdown").classList.toggle('hidden');
            }
    })
});


var selectDropdownServices = document.querySelectorAll("[data-select1]");

selectDropdownServices.forEach(function(item) {
    item.addEventListener('click', function() {
        var realSelect = this.nextElement;
        if (event.target.hasAttribute('data-select-item1')) {
            var itemTitle = event.target.getAttribute('data-select-item1');
            this.querySelector('[data-select-title1]').textContent = itemTitle;

            this.querySelector('.service-card__select-dropdown').classList.toggle('hidden');

            if (realSelect) {
                realSelect.value = itemTitle;
            } 
        } else {
                this.querySelector(".service-card__select-dropdown").classList.toggle('hidden');
            }
    })
});

var searchButton = document.querySelectorAll("[data-search]");

searchButton.forEach(function(item) {
    item.addEventListener('click', function() {
        var searhInput = document.querySelector('[data-input]');
        if (searhInput !== '.hidden') {
            this.querySelector('.search-input').classList.toggle('hidden');
        } else {
            window.location.reload();
        }
    })
})

