const itemsName  = document.querySelector("#itemsName");
const items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: "Item " + (index + 1),
    price: Math.floor(Math.random() * 100),
    rating: Math.floor(Math.random() * 5) + 1,
    image: `https://via.placeholder.com/150?text=Item+${index + 1}`
}));

// Render items to the DOM
function renderItems(filteredItems) {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = ''; // Clear previous items

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-card';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="name">${item.name}</div>
            <div class="price">$${item.price}</div>
            <div class="rating">${item.rating} Stars</div>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Initial render of all items
renderItems(items);

// Filter function
function filterItems() {
    // Get selected price ranges
    const selectedPrices = Array.from(document.querySelectorAll('input[type="checkbox"][id^="price"]:checked'))
                                .map(checkbox => Number(checkbox.value));

                                

    // Get selected names
    const selectedNames = Array.from(document.querySelectorAll('input[type="checkbox"][id^="name"]:checked'))
                               .map(checkbox => checkbox.value);

    // Get selected ratings
    const selectedRatings = Array.from(document.querySelectorAll('input[type="checkbox"][id^="rating"]:checked'))
                                 .map(checkbox => Number(checkbox.value));

    // Filter items based on selected filters
    const filteredItems = items.filter(item => {
        // Check price range
        const priceMatches = selectedPrices.length === 0 || selectedPrices.some(price => item.price <= price);
        

        // Check name filter
        const nameMatches = selectedNames.length === 0 || selectedNames.includes(item.name);

        // Check rating filter
        const ratingMatches = selectedRatings.length === 0 || selectedRatings.some(rating => item.rating >= rating);

        return priceMatches && nameMatches && ratingMatches;
    });

    console.log(filteredItems);
    

    // Render filtered items
    renderItems(filteredItems);
}

// Add event listeners for filter changes
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
});

itemsName.addEventListener("input" , function(e){
    const filterByName = items.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    renderItems(filterByName);
})