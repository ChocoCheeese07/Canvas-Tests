var canvas = document.getElementById("view");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
var circles = [];
function randomInt(max) {
return Math.floor(Math.random() * max);
}

for(let i = 0; i < 1000; i++) {
circles.push(new CanvasGameEngine.Circle(randomInt(canvas.width), randomInt(canvas.height), randomInt(4) + 2, randomInt(4) + 2, randomInt(30) + 20, `hsl(${randomInt(360)}, 100%, 50%)`));
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

for(i in circles) {
    circles[i].Update();
}

requestAnimationFrame(update)
}
requestAnimationFrame(update)