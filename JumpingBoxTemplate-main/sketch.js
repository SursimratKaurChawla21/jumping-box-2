var canvas;
var music;
var ball;
var edges;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(1,580,350,20);
    block1.shapeColor="red"

    block2=createSprite(293,580,200,20);
    block2.shapeColor="cyan"

    block3=createSprite(512,580,200,20);
    block3.shapeColor="green"

    block4=createSprite(740,580,220,20);
    block4.shapeColor="pink"

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor="yellow"
    ball.velocityX=2,
    ball.velocityY=7,

    //create box sprite and give velocity

}

function draw() {
    background(black)
    edges=createEdgeSprites();
    ball.bounceoff(edges)
    //create edgeSprite
if(block1.isTouching(ball)){
    ball.velocityX=0;
ball.velocityY=0
ball.shapecolor="red"
music.stop();
}

if(block2.isTouching(ball)&& ball.bounceoff(block2)){
    ball.shapeColor="cyan";
}

if(block3.isTouching(ball)&& ball.bounceoff(block3)){
    ball.shapeColor="green";
    music.play();
}

if(block4.isTouching(ball)&& ball.bounceoff(block4)){
    ball.shapeColor="pink";
}
drawSprites();  //add condition to check if box touching surface and make it box
}
