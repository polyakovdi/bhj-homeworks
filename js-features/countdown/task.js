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

//Задание 2
const picture = document.querySelector('.clicker__cookie');
let counter = document.getElementById("clicker__counter").innerHTML;

picture.onclick = () => {
   counter++
   picture.width == 200 ? (picture.width = 300) : (picture.width = 200);
   document.getElementById("clicker__counter").innerHTML = counter;
}

//Задание 3 

let killMole = document.getElementById("dead").innerHTML;

let lostMole = document.getElementById("lost").innerHTML;


const arrayHole = Array.from(document.getElementsByClassName("hole"));;


arrayHole.map((el) => {
   el.onclick = () => {
      if (el.classList.contains("hole_has-mole")) {
         killMole++
         document.getElementById("dead").innerHTML = killMole;
      } else {
         lostMole++
         document.getElementById("lost").innerHTML = lostMole;
      }
      checkGame();
   }
})


let checkGame = () => {
   if (killMole === 10) {
      alert("Победа!");
      end()
   } else if (lostMole === 5) {
      alert("Проиграли!");
      end()
   }
};

const end = () => {
   document.getElementById("dead").innerHTML = 0;
   document.getElementById("lost").innerHTML = 0;
   killMole = 0; 
   lostMole = 0;
}