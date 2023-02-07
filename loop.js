"use strict";

let iterator = 0;
let maxNumberOfIteration;
initLoop();

function initLoop() {
  console.log("init loop");
  maxNumberOfIteration = 11;

  loop();
}

function loop() {
  console.log("do stuff", iterator);
  // plus plus adds one
  iterator++;
  // to create delay
  // <= it will include the final number
  if (iterator <= maxNumberOfIteration) {
    setTimeout(loop, 200);
  }
}
