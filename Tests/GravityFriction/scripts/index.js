var canvas = document.createElement("canvas");
canvas.id = "view";
document.body.appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}
var test = new CanvasGameEngine.Rect(0, 100, 3, -6, 50, 50, "#3e8db8");
test.gravity = 1.5;
function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

test.Update();
  
requestAnimationFrame(update)
}
requestAnimationFrame(update)
