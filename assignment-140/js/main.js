var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



  // Set line width
ctx.lineWidth = 10;

// Wall


ctx.fillStyle = "#FF0000";
ctx.strokeRect(175, 240, 350, 310);

// Door
ctx.fillRect(310, 390, 80, 160);

ctx.strokeRect(220, 300, 50, 50);

ctx.strokeRect(420, 300, 50, 50);


// Roof
ctx.beginPath();
ctx.moveTo(150, 240);
ctx.lineTo(350, 60);
ctx.lineTo(550, 240);
ctx.closePath();
ctx.stroke();


ctx.font = "20px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("Rebecca Vann", 650, 595);
