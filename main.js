import {Player, Cpu} from "./player.js";

const player = Player();
const cpu = Cpu();
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


player.pickColor()

if( player.getColorPattern() == cpu.getColorPattern()){
    console.log("success")
}else{
    console.log("failure")
}


console.log("test");