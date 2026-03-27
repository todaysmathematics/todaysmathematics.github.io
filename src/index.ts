import { mathClock } from './mathClock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/helpers.css';

function getTodaysDate(): string {
    const today = new Date();
    const day = today.getDate().toString();
    const month = (today.getMonth() + 1).toString();
    const year = today.getFullYear().toString();
    return `${month}.${day}.${year}`;
}

const dateElement = document.getElementById('date');
if (dateElement) {
    dateElement.textContent = getTodaysDate();
    dateElement.classList.add('visible');
}

const todaysmathRowElement = document.getElementById('todaysmathRow');
if (todaysmathRowElement) {
    todaysmathRowElement.classList.add('visible');
}

const todaysmathElement = document.getElementById('todaysmath');
if (todaysmathElement) {
    todaysmathElement.innerHTML = mathClock();
}
