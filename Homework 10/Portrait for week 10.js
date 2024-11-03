var rightHandY = 400;
var leftHandY = 400;
var rightHandMovement;
var leftHandMovement;

var leftEyeX = 200;
var rightEyeX = 345;
var leftEyeMovement;
var rightEyeMovement;

var triX = 200;
var triY = 320;
var triMovementX;
var triMovementY;

var titleSize =30;
var titleChange;
var count = 0;

var nameX = 470;
var nameY = 575;
var nameMovementX;
var nameMovementY;

function setup() {
    createCanvas(600,600);
    rightHandMovement = floor(random() * 10) + 1;
    leftHandMovement = floor(random() *10) + 1;
    leftEyeMovement = floor(random() *10) + 1;
    rightEyeMovement = floor(random() *10) + 1;
    triMovementX = 4;
    triMovementY = 4;
    titleChange = 0.4;
    nameMovementX = 0.2;
    nameMovementY = 0.2;
}


function draw() {

    background(220);
    strokeWeight(4);


    fill(175,100,220);
    ellipse(260,510,300,600); //body
    fill(230);
    circle (250,200,300); //head

    //moving the hands
    ellipse(70,leftHandY,150,170);//left hand
    ellipse(470,rightHandY,150,170);//right hand
    if(rightHandY <= 350 || rightHandY > 450)
    {
        rightHandMovement*=-1;
    }

    if(leftHandY <= 370 || leftHandY > 435)
    {
        leftHandMovement*=-1;
    }

    rightHandY += rightHandMovement;
    leftHandY += leftHandMovement;

 
    fill(280);
    rect(253,165,42,20); //between glasses

    circle(leftEyeX,170,110); //left eye
    circle(rightEyeX,170,110); //right eye

    //triangle(290,275,180,260,200,320);//mouth
    //moving the triangle
    triangle(triX + 90,triY - 45,triX - 20,triY - 60,triX,triY);//mouth
    if(triX <= 20 || triX >= 510)
    {
        triMovementX*=-1;
    }
    triX += triMovementX;

    if(triY <= 60 || triY >= 600)
    {
        triMovementY*=-1;
    }
    triY += triMovementY;

    fill(230);

    //Moving the left eye peice
    line(leftEyeX - 35,212,leftEyeX,115);//left hightlight top
    line(leftEyeX,225,leftEyeX + 35,128);//left highlight bottom
    if(leftEyeX < 130 || leftEyeX > 210)
    {
        leftEyeMovement*=-1;
    }
    leftEyeX += leftEyeMovement;

    //Moving the right eye peice
    line(rightEyeX - 35,212,rightEyeX,115);//right highlight top
    line(rightEyeX,225,rightEyeX + 35,128);//right highlight bottom
    if(rightEyeX < 335 || rightEyeX > 395)
    {
        rightEyeMovement*=-1
    }
    rightEyeX += rightEyeMovement;



    point(8,23);
    point(463,563);
    textSize(30);
    fill(2);
    
    //move name in a square pattern
    //text('Kaitlyn!',470,575);
    text('Kaitlyn!',nameX,nameY);


    //change the size of the title
    textSize(titleSize)
    titleSize += titleChange;
    count++;
    if(count > 20)
    {
        titleChange*=-1
        count = 0
    }
    text('Self Portrait',15,35);


    }