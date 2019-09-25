var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var circles = [];
function randomInt(max) {
return Math.floor(Math.random() * max);
}

for(let i = 0; i < 1000; i++) {
circles.push(new CanvasGameEngine.Circle(randomInt(canvas.width), randomInt(canvas.height), randomInt(4) + 2, randomInt(4) + 2, randomInt(30) + 20, `hsl(${randomInt(360)}, ${randomInt(100)}%, ${randomInt(100)}%)`));
circles[i].frictionEnabled = false;
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = "rgba(48, 255, 79, .01)";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

for(i in circles) {
    circles[i].color = `hsl(${randomInt(360)}, ${randomInt(100)}%, ${randomInt(100)}%)`;
    circles[i].Update();
}

requestAnimationFrame(update)
}
requestAnimationFrame(update)
