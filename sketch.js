 var dog,dogImg,happyDog, database, foodS, foodStock;

function preload()
{
	 dogImg = loadImage("images/dogImg.png");
  var happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,40,40);
  dog.addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on ("value",readStock);

}


function draw() {  

background(46, 139, 87)

text(50,450,"foodStock");
textSize(40);
fill("blue");
stroke();

if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog)
}

  drawSprites();
}

function readStock() {

  foodS = data.val();

}

function writeStock(x) {

  if (x<=0) {
    x=0;
   }else{
    x=x-1
  }

 database.ref('/').update({
   food:x
 })
 

}

