var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
document.body.appendChild(canvas);

ctx.fillRect(5, 5, 40, 40);
