import { mathClock, dayOfMonth } from './mathClock';

document.addEventListener('DOMContentLoaded', () => {
    function getTodaysDate(): string {
        const today = new Date();
        const day = today.getDate().toString();
        const month = (today.getMonth() + 1).toString();
        const year = today.getFullYear().toString();
        return `${month}.${day}.${year}`;
    }

    const todaysDate = getTodaysDate();
    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = todaysDate;
        dateElement.style.display = 'block';
        dateElement.style.opacity = '1';
    }

    const todaysmathRowElement = document.getElementById('todaysmathRow');
    if (todaysmathRowElement) {
        todaysmathRowElement.style.display = 'block';
        todaysmathRowElement.style.opacity = '1';
    }

    const todaysmathElement = document.getElementById('todaysmath');

    function showMath() {
        if (todaysmathElement) {
            todaysmathElement.innerHTML = mathClock();
        }
    }

    showMath();
    setInterval(showMath, 1000);
});
