
// ===============================
// Functional Utilities Project
// ===============================

// Sample Task Data
const tasks = [
    { id: 1, title: "Design Landing Page", status: "Completed" },
    { id: 2, title: "Fix Login Bug", status: "Pending" },
    { id: 3, title: "Update Database", status: "Completed" },
    { id: 4, title: "Deploy to Server", status: "Pending" }
];

// 1️⃣ Filter Tasks into Completed and Pending
const completedTasks = tasks.filter(task => task.status === "Completed");
const pendingTasks = tasks.filter(task => task.status === "Pending");

console.log("Completed Tasks:", completedTasks);
console.log("Pending Tasks:", pendingTasks);


// ===============================
// Price Mapping with Tax
// ===============================

const prices = [100, 250, 400, 150];
const taxRate = 0.10; // 10% tax

// 2️⃣ Map Prices with Tax Added
const pricesWithTax = prices.map(price => price + (price * taxRate));

console.log("Prices with Tax:", pricesWithTax);


// ===============================
// Company Expense Reduction
// ===============================

const expenses = [1200, 5000, 2300, 1500, 3200];

// 3️⃣ Reduce Expenses into Total Budget
const totalBudget = expenses.reduce((total, amount) => total + amount, 0);

console.log("Total Company Budget:", totalBudget);


// Display Results on Page
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("completedCount").textContent = completedTasks.length;
    document.getElementById("pendingCount").textContent = pendingTasks.length;
    document.getElementById("totalBudget").textContent = "$" + totalBudget;
});
