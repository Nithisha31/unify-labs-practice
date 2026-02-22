
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";

export async function fetchCoins() {
  try {
    const response = await fetch(
      `${BASE_URL}?vs_currency=usd&order=market_cap_desc&per_page=20&page=1`
    );
    if (!response.ok) throw new Error("Network Error");
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export default { fetchCoins };



import { fetchCoins } from "./API.js";
import { showLoading, showError, renderCoins, toggleTheme } from "./UI.js";

const state = {
  coins: [],
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false
};

const container = document.getElementById("coin-container");
const chartCanvas = document.getElementById("stackedChart");
const themeToggle = document.getElementById("theme-toggle");

async function init() {
  toggleTheme(state.darkMode);
  themeToggle.checked = state.darkMode;

  try {
    showLoading(container);
    const data = await fetchCoins();
    state.coins = data;
    render();
  } catch (err) {
    showError(container, "Failed to fetch crypto data.");
  }
}

function render() {
  renderCoins(container, state.coins);
  drawStackedChart();
}

function drawStackedChart() {
  const ctx = chartCanvas.getContext("2d");

  if (window.chartInstance) {
    window.chartInstance.destroy();
  }

  window.chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: state.coins.map(c => c.symbol.toUpperCase()),
      datasets: [
        {
          label: "Current Price",
          data: state.coins.map(c => c.current_price),
          backgroundColor: "rgba(54, 162, 235, 0.8)"
        },
        {
          label: "Market Cap (scaled)",
          data: state.coins.map(c => c.market_cap / 1000000000),
          backgroundColor: "rgba(255, 99, 132, 0.7)"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" }
      },
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    }
  });
}

themeToggle.addEventListener("change", () => {
  state.darkMode = themeToggle.checked;
  localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  toggleTheme(state.darkMode);
});

init();




export function showLoading(container) {
  container.innerHTML = `<div class="loader"></div>`;
}

export function showError(container, message) {
  container.innerHTML = `<div class="error">${message}</div>`;
}

export function renderCoins(container, coins) {
  container.innerHTML = coins.map(coin => `
    <div class="card">
      <img src="${coin.image}" class="icon"/>
      <h3>${coin.symbol.toUpperCase()}</h3>
      <p>$${coin.current_price.toLocaleString()}</p>
    </div>
  `).join("");
}

export function toggleTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
}
