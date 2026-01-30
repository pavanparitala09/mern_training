import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let nextId = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  // Validate inputs
  const titleResult = validateTitle(title);
  if (!titleResult.valid) return { success: false, message: titleResult.message };

  const priorityResult = validatePriority(priority);
  if (!priorityResult.valid) return { success: false, message: priorityResult.message };

  const dueDateResult = validateDueDate(dueDate);
  if (!dueDateResult.valid) return { success: false, message: dueDateResult.message };

// Create a new task object
  const newTask = {
    id: nextId++,
    title: title.trim(),
    priority: priority.trim().toLowerCase(),
    dueDate: new Date(dueDate).toISOString(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

// Add task into array
  tasks.push(newTask);
  return { success: true, message:"task added successfully"};
}
// Get all the tasks
function getAllTasks() {
  return tasks;
}

function completeTask(taskId){
    const id = Number(taskId);
    tasks.completed = true;
    return "task is marked as completed"
}
export { addTask, getAllTasks, completeTask };