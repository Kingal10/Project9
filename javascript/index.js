const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');

function favourite(el) {
    body.querySelector('ion-icon').setAttribute('sunny-outline', 'minus-outline');
   }

function toggleMode() {
    body.classList.toggle('dark-mode');
   
}


modeToggle.addEventListener('click', toggleMode);

const countdown = () => {
    const countDate = new Date('Nov 18, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
}
setInterval(countdown, 1000);