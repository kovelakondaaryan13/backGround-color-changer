
var ball ;

function setup(){

  createCanvas(1200,400);

  ball= createSprite (600,200, 15,15);

}


function draw(){
background("grey");
ball.x = mouseX ;
ball.y = mouseY ;

ball.shapeColor="green" ;

if (ball.x < 0 || ball.x > 600) {

background ("red");

}

if (ball.x < 600 || ball.x > 1200) {

background ("blue");

}



ball.display ();  
}