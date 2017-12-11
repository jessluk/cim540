var centerX = 0;
var centerY = 0;
var bgColor;
var pitchSlider;
var stylus;
var play;
var pause;
var previous;
var next;
var button; 
var button2;
var song1;
var song2;
var song3;
var song4; 
var record;

var interfaceItems = [];
var imageArray=[];
var songArray = [];
var soundCounter = 0;




function preload(){
    
imageArray.push(loadImage('assets/play.png'));
imageArray.push(loadImage('assets/pause.png'));
imageArray.push(loadImage('assets/previous.png'));
imageArray.push(loadImage('assets/next.png'));
stylus= loadImage("assets/stylus.png");   
record= loadImage("assets/record.png");    
    
    songArray.push(loadSound("assets/getaway.mp3"));
    songArray.push(loadSound("assets/friends.mp3"));
    songArray.push(loadSound("assets/thunder.mp3"));
    songArray.push(loadSound("assets/wolves.mp3")); 
    
}

function setup(){
    createCanvas(1300,700);
    centerX = width / 2;
    centerY = height / 2;
    bgColor = color(220,220,220);
    
interfaceItems.push(new interface(325,220,50, imageArray[0]));
interfaceItems.push(new interface(410,220,50, imageArray[1]));
interfaceItems.push(new interface(325,410,50, imageArray[2]));
interfaceItems.push(new interface(410,410,50, imageArray[3]));
 
    
    songArray[soundCounter].play();
    

    
    
    //slider
   pitchSlider = createSlider(-2, 2, 0); 
pitchSlider.position(300,325);
     pitchSlider.style('width', '180px');
   
function draw(){

background(bgColor);
 
interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  interfaceItems[2].check();
  interfaceItems[2].display();
  interfaceItems[3].check();
  interfaceItems[3].display();
    }


    //side
    fill(105,105,105);
    rect(centerX - 130,centerY - 220, -250,450);
    
    //plinth
    fill("black");
    rect(centerX - 130,centerY - 220, 450,450);
    
    //platter
    fill(220,220,220);
    ellipse(centerX + 96, centerY + 6, 440, 440);
   
   

    
push();
    
    imageMode(CENTER);
    translate(747,355);
    rotate(frameCount / 75.0);
    image(record,0,0);

   pop();

       image(stylus,823,325);
   image(imageArray[0],325,220);
   image(imageArray[1],410,220);
   image(imageArray[2],325,410);
   image(imageArray[3],410,410); 
}



    
    
function interface(tempX, tempY, tempBoxSize, tempImage){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.img = tempImage;
  this.overlay = false;

  this.display = function(){
    image(this.img, this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(255,200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }
    
}
function mousePressed(){
  if(interfaceItems[0].check() == true){
    songArray.play();
  }

  if(interfaceItems[1].check() == true){
    songArray.stop();
  }
    
    if(interfaceItems[2].check() == true){
    songArray.next();
  }
    
    if(interfaceItems[3].check() == true){
    songArray.previous();
  }
}

    
    

