
const body = document.querySelector('body');
const button = document.querySelector('.toggle');

const toggleClass = (el, className) => el.classList.toggle(className);
function toggleDark() {
    if (body.classList.contains('night')) {
    toggleClass(button, 'active');
    body.classList.remove('night');
    localStorage.setItem("theme", "light");
    } else {
    toggleClass(button, 'active');
    body.classList.add('night');
    localStorage.setItem("theme", "night");
    }
}

if (localStorage.getItem("theme") === "night") {
    toggleClass(button, 'active');
    body.classList.add('night');

}

document.querySelector('.toggle').addEventListener('click', toggleDark);