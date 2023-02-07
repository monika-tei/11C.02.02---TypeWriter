"use strict";

let text = document.getElementById("typewriter");
let delay;
let iterator;
let maxIterations;

// console.log(text.innerHTML.length);

function loop() {
  console.log("do stuff", i);
  delay = Math.random() * 1000;
  for (let i = 0; i < text.innerHTML.length; i++) {
    console.log(text.innerHTML[i]);
  }
  if (i <= text.innerHTML.length) {
    setTimeout(loop, delay);
  }
  loop();
}

// perhaps in order to display the characters one at a time
// we will want to have a loop to call each letter out one by one ++yes
// and the appearing sound will be picked randomly and added to the letter
// letters will be called by their index
// calling with a delay when they appear
// same as while loop? or something, wild? the idea is that we are able to use delay

//once the sentence is completed, we want to delete the clear the string again;
