function setup() {
    createCanvas(600,600);
}

function draw() {
    background(220);
    strokeWeight(4);
    fill(175,100,220);
    ellipse(260,510,300,600); //body
    fill(230);
    circle (250,200,300); //head
    ellipse(150,400,150,170);//left hand
    ellipse(400,400,150,170);//right hand
    fill(280);
    rect(253,165,42,20); //between glasses
    circle(200,170,110); //left eye
    circle(345,170,110); //right eye
    triangle(290,275,180,260,200,320);//mouth
    fill(230);
    line(310,212,345,115);//right highlight top
    line(345,225,380,128);//right highlight bottom
    line(165,212,200,115);//left hightlight top
    line(200,225,235,128);//left highlight bottom
    point(8,23);
    point(463,563);
    textSize(30);
    fill(2);
    text('Kaitlyn!',470,575);
    text('Self Portrait',15,35);
    //line(0,225,600,225) //guide
    //line(0,115,600,115)//guide

    }