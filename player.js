
export  const Player= ()=>{
let colorPattern = [];
const Colors = ['red','blue','green','yellow']
function pickColor(){
    let randomNumber = Math.floor(Math.random * 4)
    return Colors[randomNumber]
}

function getColorPattern(){
    
    return colorPattern
}

return {pickColor, getColorPattern}

}