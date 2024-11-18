var areaWidth = 600;
var areaHeight = 600;

var playerX = 50;
var playerY = areaHeight - 50;
var playerDiameter = 50;

var oneX = 0;
var oneXB = 0;
var oneY = 400;

var twoX = 200;
var twoXB = 800;
var twoY = 200;

var mousex = -20;
var mousey = -20;

var enemyX = 100;
var enemyY = 100;
var enemySpeedX;
var enemySpeedY;

var enemyXB = 200;
var enemyYB = 200;
var enemySpeedXB;
var enemySpeedYB;

function setup()
{
    createCanvas(areaWidth,areaHeight);
    enemySpeedX = floor(random() * 8) + 1;
    enemySpeedY = floor(random() * 8) + 1;
    enemySpeedXB = floor(random() * 6) + 1 ;
    enemySpeedYB = floor(random() * 6) + 1 ;
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

    //call enemy A
    createEnemy();

    //call enemyB
    createEnemyB();

    //moves enemies
    giveEnemiesSpeed();

    //brings back enemie if it leaves the screen
    enemyRegeneration();

    //brings back enemy B if is leaves the screen
    enemyBRegeneration();

    //Display the winning message if player makes it threw the exit
    createGoal();
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
    rect(0,0,10,areaHeight);
    rect(0,0,areaWidth,10);
    rect(0,areaHeight-10,areaWidth,10);
    rect(areaWidth-10,areaHeight,10,-areaHeight+200);
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

function createEnemy()
{
    fill(220,20,60);
    circle(enemyX,enemyY,playerDiameter);
}

function createEnemyB()
{
    fill(160,160,160);
    circle(enemyXB,enemyYB,playerDiameter - 10);
}

function giveEnemiesSpeed()
{
    enemyX += enemySpeedX;
    enemyY += enemySpeedY;
    enemyXB += enemySpeedXB;
    enemyYB += enemySpeedYB;
}

function enemyRegeneration()
{
    if(enemyX>areaWidth-200 && enemyY>areaHeight)
        {
            enemyX = 0;
            enemyY = 300;
        }
    else if(enemyX<areaWidth-200 && enemyY>areaHeight)
        {
            enemyX = 300;
            enemyY = 0;
        }
    else if(enemyX>areaWidth && enemyY<500)
        {
            enemyX = 0;
            enemyY = 0;
        }

}

function enemyBRegeneration()
{
    if(enemyXB>areaWidth-200 && enemyYB>areaHeight)
        {
            enemyXB = 0;
            enemyYB = 300;
        }
    else if(enemyXB<areaWidth-200 && enemyYB>areaHeight)
        {
            enemyXB = 300;
            enemyYB = 0;
        }
    else if(enemyXB>areaWidth && enemyYB<500)
        {
            enemyXB = 0;
            enemyYB = 0;
        }
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