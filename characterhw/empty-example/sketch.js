var centerX = 0;
var centerY = 0;
var bgColor = "cyan";
var headX=400;
var headY=200;
var bodyX=headX;
var bodyY=250;
var bottomX=headX;
var bottomY=315;
var hitZoneX= 100;
var hitZoneY= 100;
var slider;
var hitZoneX2 = 300;
var hitZoneY2 = 300;
var hitZoneX3 = 640;
var hitZoneY3 = 64;
var hitZoneX4= 200;
var hitZoneY4= 75;





function preload() {
    hitImage = loadImage("assets/bluesnow.png");
    hitImage2 = loadImage("assets/Snowflakes.png");
    hitImage3 = loadImage("assets/ice.png");
    hitImage4 = loadImage("assets/grass.png");
}

function setup() {
createCanvas(800, 400);

background(bgColor);
colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(600, 300);
  slider.style('width', '150px');    



posX = width/2;
posY = 100;

}

function draw (){

var val = slider.value();
  background(val, 100, 100, 1);
    
//hitzone2
    fill("white");
    ellipse(hitZoneX2,hitZoneY2, 10,10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX2, hitZoneY2);
    
    if (hitZoneDist < 15) {
        image(hitImage2, hitZoneX2 - 30, hitZoneY2 - 300);    
    
}    

// head
    

fill("white");
    ellipse(headX, headY, 50, 50);
    strokeWeight(0);

    
//eyes

    fill("black");
    ellipse(390,190,5,8);
    ellipse(410,190,5,8);


//body
 fill("white");
    ellipse(bodyX, bodyY, 75, 75);
   strokeWeight(0);


//buttons

fill("blue");
    ellipse(400,250,15,15);


//bottom


fill("white");
    ellipse(bottomX,bottomY,100,100);
    strokeWeight(0);

fill("blue");    
    ellipse(400,280,15,15);    
    ellipse(400,310,15,15);

    // nose
    fill("orange");
     ellipse(410,200,30,5);
    
  

    
    //hitzone1
    fill("yellow");  
    ellipse(hitZoneX,hitZoneY,100,100);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
    
    if (hitZoneDist < 50) {
        image(hitImage, hitZoneX - 30, hitZoneY - 30);
    }
    
        
//snow
   
    fill("white");
    ellipse(170, 100, 10,10);
    
    fill("white");
    ellipse(150, 200, 10,10);

    fill("white");
    ellipse(650, 290, 10,10);
    
    fill("white");
    ellipse(340, 165, 10,10);
    
    fill("white");
    ellipse(580, 370, 10,10);
    
    fill("white");
    ellipse(694, 283, 10,10);
    
    fill("white");
    ellipse(264, 339, 10,10);

    fill("white");
    ellipse(393, 155, 10,10);
    
    fill("white");
    ellipse(750, 182, 10,10);
    
    fill("white");
    ellipse(227, 375, 10,10);
    
    fill("white");
    ellipse(40, 299, 10,10);
  
    fill("white");
    ellipse(218, 40, 10,10);
    
    fill("white");
    ellipse(760, 35, 10,10);
    
    fill("white");
    ellipse(640, 64, 10,10);

    fill("white");
    ellipse(560, 72, 10,10); 
    
    fill("white");
    ellipse(680, 85, 10,10);
    
    fill("white");
    ellipse(580, 150, 10,10);
 
    fill("white");
    ellipse(465, 230, 10,10); 
    
    fill("white");
    ellipse(530, 275, 10,10); 
    
    fill("white");
    ellipse(200, 75, 10,10);


        
//hitzone3
    fill("white");
    ellipse(hitZoneX3,hitZoneY3, 10,10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX3, hitZoneY3);
    
    if (hitZoneDist < 15) {
        image(hitImage3, centerX, -100);  
    }
    
    

    
    
textSize(32);
text("Mouse over the snow and the sun to find 4 surprises!", centerX, 390);

    //hitzone4
    fill("white");
    ellipse(hitZoneX4,hitZoneY4, 10,10);
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX4, hitZoneY4);
    
    if (hitZoneDist < 10) {
        image(hitImage4, centerX, 200);  
    }

}





   


