
let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}
function draw(){
    circle(posX,height/2,50)
    if (posX != 600 && posX != 0){
        posX = posX + 2
    }
    else {
        posX = posX - 2
    }
}
