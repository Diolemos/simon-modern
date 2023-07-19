 export const Cpu = () => {
  
    let colorPattern = [];
  const Colors = ["red", "blue", "green", "yellow"];
  function pickColor() {
    let randomNumber = Math.floor(Math.random() * 4); 
    let current_color = Colors[randomNumber];
    colorPattern.push(current_color);
    $("#" + current_color)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playAudio(current_color);
  }

  function playAudio(color) {
    var audio = new Audio("audio/" + color + ".mp3");
    audio.play();
  }

  function getColorPattern() {
    return colorPattern;
  }

  return { pickColor, getColorPattern };
};


const Player = ()=>{

    const {getColorPattern, playAudio} = Cpu()

    let colorPattern = []
    const pickColor = ()=>{
        $('.button').click(function(){
            let userChosenColor = $(this).attr("id");
            colorPattern.push(userChosenColor)
            playAudio(userChosenColor)
        })
    }
}



console.log("from Player module")