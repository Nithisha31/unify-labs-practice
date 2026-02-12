
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
if (document.documentElement.getAttribute('data-theme') === 'dark') {
document.documentElement.removeAttribute('data-theme');
} else {
document.documentElement.setAttribute('data-theme', 'dark');
}
});
