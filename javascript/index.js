const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');



function toggleMode() {
    body.classList.toggle('dark-mode');
   
}


modeToggle.addEventListener('click', toggleMode);