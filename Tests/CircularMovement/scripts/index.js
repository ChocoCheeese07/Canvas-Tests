var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var rect1 = new CanvasGameEngine.Rect(canvas.width / 2, canvas.height / 2, 0, 0, 100, 100, "red");

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

rect1.Update();

requestAnimationFrame(update)
}
requestAnimationFrame(update)