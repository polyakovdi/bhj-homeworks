// Задание 1
const ReverseTimer = function () {
    let output = document.getElementById("timer");
    output.textContent -= 1;
    if (Number(output.textContent) === 0) {
        alert('Вы победили в конкурсе');
        clearInterval(inervalId);
    }
}
const inervalId = setInterval(ReverseTimer, 1000);

