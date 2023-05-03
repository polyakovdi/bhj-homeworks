// Задание 1
let countdownSeconds = 40;

function countdown() {
  console.log(countdownSeconds);
  countdownSeconds--;
  if (countdownSeconds < 0) {
    clearInterval(countdownInterval);
    alert('Вы победили в конкурсе!');
  }
}
const countdownInterval = setInterval(countdown, 1000);
