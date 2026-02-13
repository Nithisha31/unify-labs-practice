const themeSwitch = document.getElementById("themeSwitch");
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

themeSwitch.addEventListener("change", () => {
    document.documentElement.setAttribute(
        "data-theme",
        themeSwitch.checked ? "dark" : "light"
    );
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    message.textContent = "Form Submitted Successfully!";
    message.style.color = "green";
    form.reset();
});
