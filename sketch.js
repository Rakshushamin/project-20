
var bckgrnd,bckgrnd_img;
var cat1,cat1_img;
//var cat2,cat2_img;
//var cat3,cat3_img;
var cat4,cat4img;
var mouse1,mouse1_img;
//var mouse2,mouse2_img;
//var mouse3,mouse3_img;
var mouse4,mouse4_img;
var cat_running,mouse_running;
function preload() {
    //load the images here
    bckgrnd_img=loadImage("garden.png");
  
    cat1_img=loadImage("tomOne.png");
    cat4_img=loadImage("tomFour.png");
    cat_running = loadAnimation("tomTwo.png","tomThree.png");
  
    mouse1_img=loadImage("jerryOne.png");
    mouse4_img=loadImage("jerryFour.png");
    mouse_running = loadAnimation("jerryTwo.png","jerryThree.png");
}

function setup(){
    //create tom and jerry sprites here
    createCanvas(500,500);
  
    bckgrnd=createSprite(300,300);
    bckgrnd.addImage("background",bckgrnd_img);
    //tower.velocityY=1;
    bckgrnd.scale=0.62;
    
    cat1=createSprite(400,420);
    cat1.addImage("cat",cat1_img);
    cat1.scale=0.1;
    cat1.setCollider("circle",0,0,300);
    //cat1.debug=true;

    mouse1=createSprite(100,420);
    mouse1.addImage("mouse",mouse1_img);
    mouse1.scale=0.1;
    mouse1.setCollider("circle",0,0,300);
    //mouse1.debug=true;
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    background("white");
     
    //keyPressed();
    if(cat1.isTouching(mouse1))
    {
        cat1.addImage("CAT",cat4_img);
        cat1.changeImage("CAT");
        mouse1.addImage("MOUSE",mouse4_img);
        mouse1.changeImage("MOUSE");
        cat1.velocityX=0;
    }
  

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW)
  {
      cat1.velocityX=-5;
      cat1.addAnimation("catRunning",cat_running);
      cat1.changeAnimation("catRunning");

      mouse1.addAnimation("mouse",mouse_running);
      mouse1.changeAnimation("mouse");
  }


}
