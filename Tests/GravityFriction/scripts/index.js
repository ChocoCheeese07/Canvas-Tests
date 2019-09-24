var canvas = document.createElement("canvas");
canvas.id = "view";
document.body.appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

requestAnimationFrame(update)
}
requestAnimationFrame(update)
