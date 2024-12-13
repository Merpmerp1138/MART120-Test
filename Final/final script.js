var areaWidth = 600;
var areaHeight = 600;

var playerX = 50;
var playerY = areaHeight - 50;
var playerDiameter = 50;

var triAX = [];
var triAY = [];
var triBX;
var triBY;
var triCX;
var triCY;

var redColorA = 224;
var greenColorA = 224;
var blueColorA = 224;

var redColorB = 224;
var greenColorB = 224;
var blueColorB = 224;

var redColorC = 224;
var greenColorC = 224;
var blueColorC = 224;

var redColorD = 224;
var greenColorD = 224;
var blueColorD = 224;

var redColorE = 224;
var greenColorE = 224;
var blueColorE = 224;

var redColorF = 224;
var greenColorF = 224;
var blueColorF = 224;

var redColorG = 224;
var greenColorG = 224;
var blueColorG = 224;

var redColorH = 224;
var greenColorH = 224;
var blueColorH = 224;

var redColorI = 224;
var greenColorI = 224;
var blueColorI = 224;

var obsticleXs = [];
var obsticleYs = [];
var obsticleDiameters = [];




function setup()
{
    createCanvas(areaWidth,areaHeight);

    createCircles();

    createTriangles();

}

function draw()
{
    createGrid();

    createPlayer();

    movePlayer();

    colorChange();
    
    placeCircles();

    placeTriangle();

    writeInstructions();
}

function createCircles()
{
    for (var i = 0; i < 20; i++) 
        {
            obsticleXs[i] = getRandomNumber(areaWidth);
            obsticleYs[i]  = getRandomNumber(areaHeight);
            obsticleDiameters[i] = getRandomNumber(playerDiameter + 15);
        }
}

function placeCircles()
{
    fill(224,224,224);

        for(var i = 0; i < obsticleXs.length; i++)
            {
                circle(obsticleXs[i], obsticleYs[i], obsticleDiameters[i]);
            }
}

function createTriangles()
{
    for (var i = 0; i < 1; i++) 
        {
            triAX[i] = getRandomNumber(areaWidth - 50);
            triAY[i]  = getRandomNumber(areaHeight - 50);
        }
}

function placeTriangle()
{
    fill(224,224,224);

        for(var i = 0; i < triAX.length; i++)
            {
                var triBX = triAX[i] + 100;
                var triBY = triAY[i];
                var triCX = triAX[i] + 50;
                var triCY = triAY[i] - 50;
                triangle(triAX[i],triAY[i],triBX,triBY,triCX,triCY);

            if(playerX >= triAX[i] && playerX <= triBX && playerY >= triCY && playerY <= triAY[i])
                {
                    fill(60,60,60);
                    rect(300,450,300,150);
                    fill(224,224,224);
                    stroke(60,60,60)
                    text('Congrats! You did it!',315,500);
                    text('Refresh to try again!',315,550);
            }
            }
}

function writeInstructions()
{
    textSize(25);
    fill(0,0,0);
    stroke(224,224,224);
    text ('Find the Triangle!',350,100);
}


function createPlayer()
{
    fill(30,144,255);
    circle(playerX,playerY,playerDiameter);
}

function movePlayer()
{
    if(keyIsDown(38)) //up
        {
            playerY-=8;
        }
    if(keyIsDown(40)) //down
        {
            playerY+=8;
        }
    if(keyIsDown(37)) //left
        {
            playerX-=8;
        }
    if(keyIsDown(39)) //right
        {
            playerX+=8;
        }
}

function createGrid()
{
    stroke(224,224,224);

    fill(redColorA,greenColorA,blueColorA);
    rect(0,0,200,200);

    fill(redColorB,greenColorB,blueColorB);
    rect(200,0,200,200);

    fill(redColorC,greenColorC,blueColorC);
    rect(400,0,200,200);

    fill(redColorD,greenColorD,blueColorD);
    rect(0,200,200,200);

    fill(redColorE,greenColorE,blueColorE);
    rect(200,200,200,200);

    fill(redColorF,greenColorF,blueColorF);
    rect(400,200,200,200);

    fill(redColorG,greenColorG,blueColorG);
    rect(0,400,200,200);

    fill(redColorH,greenColorH,blueColorH);
    rect(200,400,200,200);

    fill(redColorI,greenColorI,blueColorI);
    rect(400,400,200,200);
}

function colorChange()
{
    if(playerX >= 0 && playerX <= 200 && playerY >= 0 && playerY <= 200)
        {
        redColorA += -1;
        greenColorA += -1; 
        blueColorA += -1;
        }

    if(playerX >= 200 && playerX <= 400 && playerY >= 0 && playerY <= 200)
        {
        redColorB += -1;
        greenColorB += -1; 
        blueColorB += -1;
        }

    if(playerX >= 400 && playerX <= 600 && playerY >= 0 && playerY <= 200)
        {
        redColorC += -1;
        greenColorC += -1; 
        blueColorC += -1;
        }

    if(playerX >= 0 && playerX <= 200 && playerY >= 200 && playerY <= 400)
        {
        redColorD += -1;
        greenColorD += -1; 
        blueColorD += -1;
        }

    if(playerX >= 200 && playerX <= 400 && playerY >= 200 && playerY <= 400)
        {
        redColorE += -1;
        greenColorE += -1; 
        blueColorE += -1;
        }

    if(playerX >= 400 && playerX <= 600 && playerY >= 200 && playerY <= 400)
        {
        redColorF += -1;
        greenColorF += -1; 
        blueColorF += -1;
        }

    if(playerX >= 0 && playerX <= 200 && playerY >= 400 && playerY <= 600)
        {
        redColorG += -1;
        greenColorG += -1; 
        blueColorG += -1;
        }

    if(playerX >= 200 && playerX <= 400 && playerY >= 400 && playerY <= 600)
        {
        redColorH += -1;
        greenColorH += -1; 
        blueColorH += -1;
        }

    if(playerX >= 400 && playerX <= 600 && playerY >= 400 && playerY <= 600)
        {
        redColorI += -1;
        greenColorI += -1; 
        blueColorI += -1;
        }

}

function getRandomNumber(number) 
    {
        return Math.floor(Math.random() * number) + 10;
    }
