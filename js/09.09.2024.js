const items = new Array(20).fill().map((_ , index)=>({
    id : index + 1,
    name  : `Item ${index + 1}`,
    prices :Math.floor(Math.random() * 100) + 1,
    rating : Math.floor(Math.random() * 5) + 1,
    image: `https://via.placeholder.com/150?text=Item+${index + 1}`

}));

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


function filterItems(){
    const selectedPrices =Array.from(document.querySelectorAll('input[type="checkbox"][id^="price"]:checked')).map(checkbox =>Number( checkbox.value));
    const selectedRating =Array.from(document.querySelectorAll('input[type="checkbox"][id^="rating"]:checked')).map(checkbox =>Number( checkbox.value));

   const filteredItems = items.filter(item =>{
    const priceMatches = selectedPrices.length === 0 || selectedPrices.some(price => item.prices <= price );
    const ratingMatches = selectedRating.length === 0 || selectedRating.some(rating => item.rating >= rating );
    
    
    
    return priceMatches && ratingMatches;
    
   })

   renderItems(filteredItems)
    
    
    
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox=>{
checkbox.addEventListener("change" , filterItems)
})
