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
});




// parties on different array methods 

// Array Find Method 

// first indexof Methods 

// requirement---> we want to delete a item which name is item 1

// step 1  we find the index number and delete from the array

const itemDeleteName = "Item 1";
// const findIndexDeleteItem = items.indexOf(itemDeleteName);

// this method did not find the index because indexOf is work primitive data type such as string etc 

// we try findindex of method 

const findIndexDeleteItem = items.findIndex(item => item.name === itemDeleteName);
console.log("find index delete item index ---" ,  findIndexDeleteItem); // 0

// we find the index now we use splice method we delete the item 

const deleteItems = items.splice(findIndexDeleteItem , 1);
console.log("delete item---- > " , deleteItems);

const strArray = ["hello" , "world" , "how" , "are"];
console.log(strArray.indexOf("are")); // 3 (index number)
console.log(strArray.includes("are")); // true 
console.log(strArray.includes("you")); // false 
console.log(strArray.find(item=> item === "are" )); // are   
console.log(items.find(item=> item.name === "Item 2" )); // find items    {id: 2, name: 'Item 2', price: 44, rating: 1, image: 'https://via.placeholder.com/150?text=Item+2'}


// Array sort Method 

const fruits = ["apple" ,"b" ,'Apple'];
const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];
console.log("sort method --->" , fruits.sort((a,b)=> a.toLowerCase() < b.toLowerCase() ? -1 : 1));
console.log("sort methods --->" , numbersArr.sort((a,b)=> b - a));
console.log("sort methods --->" , numbersArr.sort((a,b)=> a - b));


// array reverse method 

console.log("reverse methods ---->" , fruits.reverse());
console.log("reverse methods ---->" , fruits.reverse());

console.log(items.sort((a,b)=> a.price - b.price));


















