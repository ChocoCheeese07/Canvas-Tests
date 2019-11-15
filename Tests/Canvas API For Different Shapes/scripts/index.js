var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
document.body.appendChild(canvas);

ctx.moveTo(20, 45);
ctx.lineTo(78, 93);
ctx.closePath();
ctx.stroke();
