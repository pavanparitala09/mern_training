import { addTask, getAllTasks, completeTask } from "./task.js";

function displaytasks() {
    const tasks = getAllTasks();

    if(tasks.length === 0)
        console.log("No tasks found")
    tasks.forEach( task => {
        console.log(`ID: ${task.id} | Title: ${task.title} | Priority: ${task.priority} | Due: ${task.dueDate} | Completed: ${task.completed}`)
    })
}

console.log("➕ Adding Tasks...");
console.log(addTask("Learn JavaScript Modules", "high", "2026-02-10"));
console.log(addTask("Complete Assignment", "medium", "2026-02-05"));

// 2) Display all tasks
getAllTasks();

// 3) Complete a task
console.log("✅ Completing Task ID 2...");
console.log(completeTask(2));

getAllTasks();

