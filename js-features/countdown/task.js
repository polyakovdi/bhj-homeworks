// Задание 1
let countDownn = function() {
    let timer = document.getElementById("timer");
    timer.textContent--;
    if (timer.textContent <= 0) {
      clearInterval(timerId);
      alert("Вы победили в конкурсе!");
    } 
}

let timerId = setInterval(countDownn, 1000);
