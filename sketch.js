//Create variables here

var dog,dogImage;

function preload()
{
  //load images here
  dogImage = loadImage("dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  
  dog = createSprite(200,200,20,20);
  dog.addImage("dog",dogImage);
  
}


function draw() {  


  drawSprites();
  //add styles here

}



