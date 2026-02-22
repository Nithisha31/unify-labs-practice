
// ✅ Using getElementById and querySelector correctly

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector("#taskList");

// ✅ addEventListener for Add Button
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // ✅ Dynamically create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed class on click
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete functionality
    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent toggle when deleting
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
