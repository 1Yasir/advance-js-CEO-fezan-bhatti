// #1 Event Bubbling  && // Event Capturing OR  "event trickling"

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const button = document.getElementById("button");

parent.addEventListener("click", function (event) {
    console.log("parent Clicked....");

})
child.addEventListener("click", function (event) {
    console.log("child Clicked....");

}, true)

button.addEventListener("click", function (event) {
    console.log("button Clicked....");
    // event.stopPropagation(); 
})


// Event Delegation 

const newTask = document.getElementById("newTask");
const addTsk = document.getElementById("addTsk");
const list = document.getElementById("list");

addTsk.addEventListener("click", function () {
    const taskText = newTask.value.trim();
    if (taskText) {
        newTask.value = "";
        addTaskToList(taskText);

    }
});



function addTaskToList(taskText) {
    const li = document.createElement('li');

    li.className = 'mb-3';
    li.innerHTML = `
        <span>${taskText}</span> 
        <button class="delete">Delete</button> 
        <button class="edit">Edit</button>
    `;
    list.appendChild(li);

}


list.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        // Delete button logic
        const li = event.target.parentElement;
        li.remove();
    } else if (event.target.classList.contains("edit")) {
        // Edit button logic
        const li = event.target.parentElement;
        const taskText = li.querySelector('span').textContent;
        const newTaskText = prompt("Edit Task:", taskText);
        if (newTaskText && newTaskText.trim() !== '') {
            li.querySelector('span').textContent = newTaskText.trim();
        }
    }
});



// Javascript DOM Manipulation to improve performance

// a--->  Use selector instead nested elements

// BAD
// let menu = document.querySelector('header > nav > ul.menu');

// GOOD
let menu = document.querySelector('.menu');


// Avoid DOM manipulations inside loops

const numbers = document.querySelector(".numbers");

// BAD 

// for(let i = 0; i < 10; i++){
//     numbers.textContent  += i;
// }

// Good  

let numbersText = "";

for(let i = 0; i < 10; i++){
numbersText += i;

}

numbers.textContent  = numbersText;


// Don't use DOM values inside loops

// BAD

// let nodes = document.querySelectorAll('.menu-items');
// for (let i = 0; i < node.length; i++) { ... }

// GOOD

// let nodes = document.querySelectorAll('.menu-items');
// const size = nodes.length;
// for (let i = 0; i < size; i++) { ... }


// JavaScript Array Search

const fruits = ["Apple", "Orange", "Apple", "Mango",NaN];
// let position = fruits.indexOf(NaN);
let position = fruits.includes(NaN);  // include method is better than indexOf because include method detect NaN
console.log(position);









