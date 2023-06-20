const formMessage = document.querySelector(".message")
const taskInputElt = document.getElementById("task")
const statusInputElt = document.getElementById("status")
const taskListElt = document.querySelector('.task-list')
const taskNumberElt = document.querySelector('#task-number')

const addTaskBtn = document.getElementById("add-task-btn")
const listDoneBtn = document.getElementById("list-done-btn")
const listUndoneBtn = document.getElementById("list-undone-btn")
const markDoneBtn = document.querySelector('.mark-done-btn')
const deleteBtn = document.querySelector('.delete-btn')

let allTasks = []
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(taskInputElt.value == ""){
        formMessage.textContent = "Enter a task!"
    } else {
        task = {
            'label': taskInputElt.value,
            'status': statusInputElt.value,
        }
        allTasks.push(task)
        taskNumberElt.textContent = allTasks.length
        resetForm()
        console.log(allTasks);
        taskListElt.innerHTML = allTasks.map((task) => (
            `          
            <tr>
                <td>${task.label}</td>
                <td>${task.status}</td>
                <td><button class="mark-done-btn">Mark Done</button></td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            `
        )).join("")
    }

})
listDoneBtn.addEventListener('click', () => {
    filtered_tasks = allTasks.filter((task) => task.status == "done")
    taskListElt.innerHTML = filtered_tasks.map((task) => (
        `          
        <tr>
            <td>${task.label}</td>
            <td>${task.status}</td>
            <td><button class="mark-done-btn">Mark Done</button></td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `
    )).join("")
    console.log("list done");

})

listUndoneBtn.addEventListener('click', () => {
    console.log("list undone");
    filtered_tasks = allTasks.filter((task) => task.status == "undone")
    taskListElt.innerHTML = filtered_tasks.map((task) => (
        `          
        <tr>
            <td>${task.label}</td>
            <td>${task.status}</td>
            <td><button class="mark-done-btn">Mark Done</button></td>
            <td><button class="delete-btn">Delete</button></td>
        </tr>
        `
    )).join("")
})

const resetForm = () => {
    taskInputElt.value = "";
    statusInputElt.value = "undone";
    formMessage.textContent = ""

}