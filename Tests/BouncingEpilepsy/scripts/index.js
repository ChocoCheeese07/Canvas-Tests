var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var circles = [];

for(let i = 0; i < 1000; i++) {
circles.push(new CanvasGameEngine.Circle(CanvasGameEngine.randomInt(0, canvas.width), CanvasGameEngine.randomInt(0, canvas.height), CanvasGameEngine.randomInt(-4, 4), CanvasGameEngine.randomInt(-4, 4), CanvasGameEngine.randomInt(15, 40), `hsl(${CanvasGameEngine.randomInt(0, 360)}, ${CanvasGameEngine.randomInt(0, 100)}%, ${CanvasGameEngine.randomInt(75, 100)}%)`));
circles[i].frictionEnabled = false;
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = "rgba(48, 255, 79, .01)";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

for(i in circles) {
    circles[i].color = `hsl(${CanvasGameEngine.randomInt(0, 360)}, ${CanvasGameEngine.randomInt(0, 100)}%, ${CanvasGameEngine.randomInt(75, 100)}%)`;
    circles[i].Update();
}

requestAnimationFrame(update)
}
requestAnimationFrame(update)
