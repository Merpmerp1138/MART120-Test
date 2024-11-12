var x = 50;
var y = 550;
var diameter = 50;

var oneX = 0;
var oneXB = 0;
var oneY = 400;

var twoX = 200;
var twoXB = 800;
var twoY = 200;

var mousex = 0;
var mousey = 0;

var enemyX = 0;
var enemyY = 0;
var enemySpeedX;
var enemySpeedY;


function setup()
    {
        createCanvas(600,600);
    }
    function draw()
    {
        background(50,200,100);
        fill(30,144,255);
        circle(x,y,diameter); //player
        fill(0)
        rect(0,0,10,600); //left wall
        rect(0,0,600,10); //top wall
        rect(0,590,600,10); //bottom wall
        rect(590,200,10,400); //right wall
        textSize(30);
        text('Exit',520,50);
        text('>>>',520,80);
        fill(220,20,60);
        circle(enemyX,enemyY,diameter); //enemy

        fill(50)
        rect(oneX,oneY,400,10); //obstacle one
        fill(100)
        rect(oneXB-600,oneY,400,10); //obstacle one replacement
        fill(150)
        rect(twoX,twoY,400,20); //obstacle two
        fill(200)
        rect(twoXB,twoY,400,20); //obstacle two replacement
        if(keyIsDown(38)) //up
            {
                y-=8;
            }
        if(keyIsDown(40)) //down
            {
                y+=8;
            }
        if(keyIsDown(37)) //left
            {
                x-=8;
            }
        if(keyIsDown(39)) //right
            {
                x+=8;
            }

        //moving obstacle one
        if(oneX<600)
        {
            oneX+=2;
        }
        else if(oneX>=600)
        {
            oneX=-600;
        }

        //moving obstacle one replacement
        if(oneXB<1200)
        {
            oneXB+=2;
        }
        else if(oneXB>=1200)
        {
            oneXB=0;
        }

        //moving obstacle two
        if(twoX>-400)
        {
            twoX-=2;
        }
        else if(twoX<=-400)
        {
            twoX=800;
        }
    
        //moving obstacle two replacement
    
        if(twoXB>-400)
        {
            twoXB-=2;
        }
        else if(twoXB<=-400)
        {
            twoXB=800;
        }

        //randomize enemy speed
        enemySpeedX = floor(random() * 10) + 1;
        enemySpeedY = floor(random() * 10) + 1;
      

        //give enemy speed
        enemyX += enemySpeedX;
        enemyY += enemySpeedY;

        //keep enemy in bounds
        if(enemyX>400 && enemyY>600)
        {
            enemyX = 0;
            enemyY = 300;
        }
        else if(enemyX<400 && enemyY>600)
        {
            enemyX=300;
            enemyY=0;
        }
        else if(enemyX>600 && enemyY>500)
        {
            enemyX = 0;
            enemyY =0;
        }
       

        // non-moving obstacle
        rect(mousex -20, mousey -20, 40, 40);

        //Making it threw the exit
        if(x>625 && y<175 && y>25)
        { 
            fill(0)
            textSize(50)
            text('Congrats!', 200,300);
        }
        
        
    


    }

    // placing non-moving obstacle
    function mouseClicked ()
    {
        mousex = mouseX;
        mousey = mouseY;
    }