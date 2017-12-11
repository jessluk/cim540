//var bubbleX = 0;
//var bubbleY = 200;
//var bubbleSize = 100;
//var bubble1;
//var bubble2;
var multiBubble = [];

function setup() {
    createCanvas(400,400);
    //bubble1 = new bubble(random(width),random(height),random(100));
    //bubble2 = new bubble(random(width),random(height),random(100));


    for(var i = 0; i<=100, i++){
    var r = random(256);
    var g = random(256);
    var b = random(256);
    multiBubble.push(new bubble(random(width),random(height),random(100));

    }

   //console.log(multiBubble.length);

}

function draw() {
    background(255);
    //display();
    //move();
    //bubble1.display();
    //bubble2.display();
    //moveFaster(10);
    //var checking = checkPos();
   // console.log(checking);


    for(var i = 0, i<multiBubble.length, i++){
        multiBubble[i].display();
        multiBubble[i].moveX();
         multiBubble[i].moveY();

        if(multiBubble[i].checkPosX == true){
           // multiBubble[i].x=0;
            multiBubble[i].direction= false;
        }
        else{
            multiBubble[i].direction=true;
        }
        if(multiBubble[i].checkPosY == true){
            multiBubble[i].y=0;

        }

    }

    //if(checking == true){
      //  bubbleX = 0;

    //}
}


function bubble(tempX, tempY,tempDiameter,tempR,tempG,tempB,tempDir){
    this.x= tempX;
    this.y= tempY;
    this.diameter= tempDiameter;
    this.r= tempR;
    this.g= tempG;
    this.b= tempB;
    this.direction = tempDir;

    this.display= function(){
        fill(this.r,this.g,this.b);
        ellipse(this.x,this.y,this.diameter,this.diameter);
    }



    this.moveX=function(){
       if(this.direction==true)
        this.x++;
        }
    if(this.direction==false){
        this.x--;

    }
      this.moveY=function(){
        this.y++;

    }

this.checkPosX = function(){
    if(this.x>width){
        return true;
    }
    if(this.x<0){
        return false;
    }
}

this.checkPosY = function(){
    if(this.y>height){
        return true;

    }

}


function display(){
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
}


//function move(){
  //  bubbleX++;
}

//function moveFaster(howFast){
  //  bubbleX = bubbleX + howFast;
}


//function checkPos(){
  //  if(bubbleX > width){
    //    return true;
    //}else{
      //  return false;
    //}
//}
//}
