import { saveSettings, loadSettings } from './settings.js';

const themeToggle = document.getElementById("themeToggle");

// Load saved settings
const settings = loadSettings();

if (settings.darkMode) {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
}

// Toggle Dark/Light Mode
themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;

    if (isDark) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    saveSettings({ darkMode: isDark });
});
