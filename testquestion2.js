let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 275);
    fill("pink");
    textAlign(CENTER,CENTER);
    yPos = 100;
}
function draw() {
    textSize(32);
   for (let index = 0; index < pokemons.length; index++) {
 console.log(pokemons[index])
    text(pokemons[index],width/2,yPos)
    yPos = yPos + 40;
}   
}
