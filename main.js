import {Player} from "./player.js";

const player = Player();
const cpu = Player();
let started = false;
let level = 0;
console.log(level);

function startGame() {
  $("h1").text(`Level ${level}`);
  cpu.pickColor();
  started = true;
}

$(document).keypress(function() {
  if (!started) {
    level++;
    startGame();
  }
});

console.log("test");