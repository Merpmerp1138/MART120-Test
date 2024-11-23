var areaWidth = 600;
var areaHeight = 600;

var borderThickness = 10;

var playerX = 50;
var playerY = areaHeight - 50;
var playerDiameter = 50;

var enemyX = 50;
var enemyY = 50;

var enemyXs = [];
var enemyYs = [];
var enemyDiameters = [];

var enemySpeedXs = [];
var enemySpeedYs = [];

var mousex = -20;
var mousey = -20;

function setup()
{
    createCanvas(areaWidth,areaHeight);

    for (var i = 0; i < 8; i++) 
    {
        
        enemySpeedXs[i] = getRandomNumber(12);
        enemySpeedYs[i] = getRandomNumber(12);
        enemyXs[i] = getRandomNumber(areaWidth);
        enemyYs[i]  = getRandomNumber(areaHeight);
        enemyDiameters[i] = getRandomNumber(playerDiameter + 15);
    }
            
}

function draw()
{
    background(50,200,100);

    //call exit sign
    createExit();

    //call player
    createPlayer();

    //call Border
    createBorder();

    //call function to let the player move around
    movePlayer();

    //calls non-moving object
    createNonMovingObject();

    //Display the winning message if player makes it threw the exit
    createGoal();

    for(var i = 0; i < enemyXs.length; i++)
    {
        circle(enemyXs[i], enemyYs[i], enemyDiameters[i]);
        enemySpeedXs[i] = floor(random() * 3) + 1;
        enemySpeedYs[i] = floor(random() * 3) + 1;

        enemyXs[i] += enemySpeedXs[i];
        enemyYs[i] += enemySpeedYs[i];

        if(enemyXs[i] > areaWidth)
        {
            enemyXs[i] = 0;
        }
        if(enemyXs[i] < 0)
        {
            enemyXs[i] = areaWidth;
        }
        if(enemyYs[i] > areaHeight)
        {
            enemyYs[i] = 0;
        }
        if(enemyYs[i] < 0)
        {
            enemyYs[i] = areaHeight;
        }
    }
}

function createExit()
{
    textSize(30);
    fill (0);
    text('Exit',areaWidth-80,50);
    text('>>>',areaWidth-80,80);
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

function createBorder()
{
    fill(0)
    rect(0,0,borderThickness,areaHeight);
    rect(0,0,areaWidth,borderThickness);
    rect(0,areaHeight-borderThickness,areaWidth,borderThickness);
    rect(areaWidth-borderThickness,areaHeight,borderThickness,-areaHeight+200);
}

function createNonMovingObject()
{
    rect(mousex -20, mousey -20, 40, 40);
}

function mouseClicked ()
    {
        mousex = mouseX;
        mousey = mouseY;
    }

    function createGoal()
{
    if(playerX>areaWidth+25 && playerY<175 && playerY>35)
        { 
            fill(0)
            textSize(50)
            text('Congrats!', 200,300);
        }
}

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}
