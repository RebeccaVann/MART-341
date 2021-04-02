// x and y for my character
var characterX = 20;
var characterY = 20;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
  background(50, 164, 168);
  stroke(0);
  strokeWeight(0);
  fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(20);
    text("ESCAPE HERE!", width-160,height-50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // enemy
    fill(255, 13, 198);

    square(shapeX, shapeY, 40);


    fill(150, 59, 255)
    square(shapeX, shapeY*3, 20);


    stroke(0, 4, 255)
    strokeWeight(15)
    fill(220, 20, 0, 2);
    triangle(shapeX, 100, shapeX, 50, shapeY, 80)

    stroke(0, 4, 255)
    strokeWeight(15)
    fill(220, 20, 0, 2);
    triangle(shapeX, 300, shapeX, 250, shapeY, 280)

    stroke(0, 4, 255)
    strokeWeight(15)
    fill(220, 20, 0, 2);
    triangle(shapeX, 500, shapeX, 450, shapeY, 480)

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);






    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the enemy has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check if shape left
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // mouse clisk shape
    fill(120,130,140);
    stroke(68, 255, 31)
    strokeWeight(15)
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{

    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);

}

function drawCharacter()
{
  fill(231, 252, 38);
  circle(characterX,characterY,25);
}
function createBorders(thickness)
{

    rect(0,0,width,thickness);

    rect(0,0,thickness,height);

    rect(0, height-thickness,width, thickness);

    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
