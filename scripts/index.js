var canvas = document.getElementById("view");
canvas.width = 700;
canvas.height = 400;
var ctx = canvas.getContext("2d");
var circles = [];
function randomInt(max) {
return Math.floor(Math.random() * max);
}

for(let i = 0; i < 500; i++) {
circles.push(new CanvasGameEngine.Circle(
randomInt(canvas.width),
randomInt(canvas.height),

));
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

requestAnimationFrame(update)
}
requestAnimationFrame(update)