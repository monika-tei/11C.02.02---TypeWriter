"use strict";

// grab H1
let text = document.getElementById("typewriter");
// this is the text content of the H1
let textContent = text.innerHTML;
// and the H1 is empty
text.innerHTML = " ";
// iterator - how many times do we play the loop until it reaches Max
let i = 0;
// Maximum number of iterations = the full length of the string
let maxIterations = 44;

let delay;

//let audioDelay;

initLoop();

function initLoop() {
  console.log("start");
  onLoop();
}

function onLoop() {
  if (i <= maxIterations) {
    // console.log(text.innerHTML[i]);

    //ads increment
    i++;
    // delay of choice
    delay = Math.random() * 1000;
    setTimeout(onLoop, delay);
  }
}
onLoop();

// function loop() {
//   console.log("do stuff", iterator);
//   // plus plus adds one
//   i++;
//   delay = Math.random() * 1000;
//   // delay = 100;
//   // to create delay
//   // <= it will include the final number
//   if (iterator <= maxIterations) {
//     setTimeout(loop, delay);
//   }
// }
