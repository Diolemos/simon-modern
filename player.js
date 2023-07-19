function Shared() {
  let colorPattern = [];
  function playAudio(color) {
    var audio = new Audio("audio/" + color + ".mp3");
    audio.play();
  }
  
  function getColorPattern() {
    return colorPattern;
  }
  return { playAudio, colorPattern, getColorPattern };
}

export const Cpu = () => {
  let { colorPattern, playAudio, getColorPattern } = Shared();

  const Colors = ["red", "blue", "green", "yellow"];
  function pickColor() {
    let randomNumber = Math.floor(Math.random() * 4);
    let currentColor = Colors[randomNumber];
    colorPattern.push(currentColor);
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
    $("#" + currentColor)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playAudio(currentColor);
  }

  return { pickColor, getColorPattern };
};

export const Player = () => {
  let { colorPattern, playAudio, getColorPattern } = Shared();

  console.dir(playAudio);

  const pickColor = () => {
    $(".button").click(function () {
      let userChosenColor = $(this).attr("id");
      colorPattern.push(userChosenColor);
      $("#" + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
      playAudio(userChosenColor);
    });
  };

  return { pickColor, getColorPattern };
};

console.log("from Player module");
