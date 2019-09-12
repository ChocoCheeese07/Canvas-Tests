var canvas = document.getElementById("view");
canvas.width = 700;
canvas.height = 400;
var ctx = canvas.getContext("2d");

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

var posX = 5;
ctx.fillRect(posX, 20, 50, 50);
posX += 6;

requestAnimationFrame(update)
}
requestAnimationFrame(update);