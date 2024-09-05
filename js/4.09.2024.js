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
const tasks = [];

addTsk.addEventListener("click", function () {
    const taskText = newTask.value.trim();
    if (taskText) {
        tasks.push(taskText);
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


list.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        // Delete button logic
        const li = event.target.parentElement;
        const taskText = li.querySelector('span').textContent;
        
        tasks.splice(tasks.indexOf(taskText), 1); 
        li.remove(); 
    } else if (event.target.classList.contains("edit")) {
        // Edit button logic
        const li = event.target.parentElement;
        const taskText = li.querySelector('span').textContent;
        const newTaskText = prompt("Edit Task:", taskText);
        if (newTaskText && newTaskText.trim() !== '') {
            const index = tasks.indexOf(taskText);
            tasks[index] = newTaskText.trim(); 
            li.querySelector('span').textContent = newTaskText.trim(); 
        }
    }
});


tasks.forEach(addTaskToList);



