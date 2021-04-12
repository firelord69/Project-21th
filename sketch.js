var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(690,600);

    //create 4 different surfaces
    box1 = createSprite(80,595,150,10);
    box1.shapeColor = "blue";
    box2 = createSprite(250,595,150,10);
    box2.shapeColor = "orange";
    box3 = createSprite(420,595,150,10);
    box3.shapeColor = "red";
    box4 = createSprite(590,595,150,10);
    box4.shapeColor = "green";



    //create box sprite and give velocity
    ball = createSprite(random(20,690),20,20,20);
    ball.velocityX = 5
    ball.velocityY = 5
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges =  createEdgeSprites();
    ball.bounceOff(edges)
    
    




    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box2)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
        
    }
    if(ball.isTouching(box1)){
        ball.shapeColor ="blue"
        ball.bounceOff(box1);
    
      
    }
    if(box3.isTouching(ball)){
        ball.shapeColor = "red"
        ball.bounceOff(box3)
        
        
}
    if(ball.isTouching(box4)){
        ball.shapeColor = "green"
        ball.bounceOff(box4);
       
        
        
    }

    drawSprites();
}
