const daysEl_eve = document.querySelector('#days-eve');
const hoursEl_eve = document.querySelector('#hours-eve');
const minsEl_eve = document.querySelector('#mins-eve');
const secondsEl_eve = document.querySelector('#seconds-eve');

const daysEl_luna = document.querySelector('#days-luna');
const hoursEl_luna = document.querySelector('#hours-luna');
const minsEl_luna = document.querySelector('#mins-luna');
const secondsEl_luna = document.querySelector('#seconds-luna');

const newYearsEve = '1 Jan 2022';
const newYearsLuna = '1 Feb 2022';

function countdownEve() {
    const newYearsDate_eve = new Date(newYearsEve);
    const currentDate_eve = new Date();

    const totalSeconds_eve = (newYearsDate_eve - currentDate_eve) / 1000;
    const days_eve = Math.floor(totalSeconds_eve / (3600 * 24));
    const hours_eve = Math.floor(totalSeconds_eve / 3600) % 24;
    const mins_eve = Math.floor(totalSeconds_eve / 60) % 60;
    const seconds_eve = Math.floor(totalSeconds_eve % 60);

    daysEl_eve.innerHTML = days_eve;
    hoursEl_eve.innerHTML = formatTime(hours_eve);
    minsEl_eve.innerHTML = formatTime(mins_eve);
    secondsEl_eve.innerHTML = formatTime(seconds_eve);
}

function countdownLuna() {
    const newYearsDate_luna = new Date(newYearsLuna);
    const currentDate_luna = new Date();

    const totalSeconds_luna = (newYearsDate_luna - currentDate_luna) / 1000;
    const days_luna = Math.floor(totalSeconds_luna / (3600 * 24));
    const hours_luna = Math.floor(totalSeconds_luna / 3600) % 24;
    const mins_luna = Math.floor(totalSeconds_luna / 60) % 60;
    const seconds_luna = Math.floor(totalSeconds_luna % 60);

    daysEl_luna.innerHTML = days_luna;
    hoursEl_luna.innerHTML = formatTime(hours_luna);
    minsEl_luna.innerHTML = formatTime(mins_luna);
    secondsEl_luna.innerHTML = formatTime(seconds_luna);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdownEve();

setInterval(countdownEve, 1000);

countdownLuna();

setInterval(countdownLuna, 1000);