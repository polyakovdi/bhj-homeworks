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

привет мир