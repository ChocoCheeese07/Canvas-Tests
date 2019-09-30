var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var circles = [];

for(let i = 0; i < 1000; i++) {
circles.push(new CGE.Circle(CGE.randomInt(0, canvas.width), CGE.randomInt(0, canvas.height), CGE.randomInt(-4, 4), CGE.randomInt(-4, 4), CGE.randomInt(15, 40), `hsl(${CGE.randomInt(0, 360)}, ${CGE.randomInt(0, 100)}%, ${CGE.randomInt(25, 90)}%)`));
circles[i].frictionEnabled = false;
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillStyle = "rgba(48, 255, 79, .01)";
// ctx.fillRect(0, 0, canvas.width, canvas.height);

for(i in circles) {
    circles[i].color = `hsl(${CGE.randomInt(0, 360)}, ${CGE.randomInt(0, 100)}%, ${CGE.randomInt(25, 90)}%)`;
    circles[i].Update();
}

requestAnimationFrame(update)
}
requestAnimationFrame(update)
