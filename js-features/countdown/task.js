// Задание 1
const timer = document.querySelector('timer');

const timerId = setInterval(() => {
    const value = +timer.textContent;

    if (value > 0) {
        timer.textContent = value - 1;
    } else {
        clearInterval(timerId);
    }   
}, 1000)

console.log(timerId, 'timer id');