var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var angle = 0;
var r = 125;
var rect1 = new CanvasGameEngine.Rect(canvas.width / 2 + Math.cos(angle) * r, canvas.height / 2 + Math.sin(angle) * r, 0, 0, 100, 100, "red");

function update() {
// ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "rgba(173, 216, 230, .1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

angle += .1;
rect1.pos.x = canvas.width / 2 + Math.cos(angle) * r;
rect1.pos.y = canvas.height / 2 + Math.sin(angle) * r;
rect1.Update();

requestAnimationFrame(update)
}
requestAnimationFrame(update)