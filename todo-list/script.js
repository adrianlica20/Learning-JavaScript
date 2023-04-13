const allTasks = document.querySelector('#all-tasks-container');
const addTaskBtn = document.querySelector('#add-task-btn');
const confirmTaskBtn = document.querySelector('.confirm-task-btn');
let taskName = document.querySelector('.task-name');
let tasksNumber = document.querySelector('#tasks-number');


// Removes the modal and opens the task input
addTaskBtn.addEventListener('click', () => {
    taskName.value = "";
    modal.classList.remove("hiddenM");
    overlay.classList.remove("hiddenM");
})

// Add new task to the list
confirmTaskBtn.addEventListener('click', createTasks);

// Index number used for the label and input id
let idx = 1;

function createTasks(){
    let newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('task', 'flex', 'justify-between', 'items-center');

    let taskText = document.createElement('label');
    taskText.innerText = taskName.value;
    taskText.setAttribute('for', `task-${idx}`)

    // Add click event listener to taskText
    taskText.addEventListener('click', () => {
        taskText.classList.toggle('line-through');
        taskText.classList.toggle('text-gray-300');
    });

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `task-${idx}`);

    tasksNumber.innerText = idx;

    newTaskContainer.appendChild(taskText);
    newTaskContainer.appendChild(checkbox);
    allTasks.appendChild(newTaskContainer);

    idx++;
}


// MODAL CLOSING SCRIPT
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

confirmTaskBtn.addEventListener('click', closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.add("hiddenM");
    overlay.classList.add("hiddenM");
};

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hiddenM")) {
        closeModal();
    }
});