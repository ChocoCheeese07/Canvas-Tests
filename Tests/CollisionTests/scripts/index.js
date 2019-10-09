var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}

var center = new CGE.Rect(canvas.width / 2, canvas.height / 2, 0,  0, 50, 50, "red");
var left = new CGE.Rect(0, canvas.height / 2, 2,  0, 50, 50, "blue");
var right = new CGE.Rect(canvas.width - 25, canvas.height / 2, -2,  0, 50, 50, "blue");
var top = new CGE.Rect(canvas.width / 2, 0, 0,  2, 50, 50, "blue");
var bottom = new CGE.Rect(canvas.width / 2, canvas.height, 0,  -2, 50, 50, "blue");

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

CGE.RectRectCollision(center, left);
CGE.RectRectCollision(center, right);
CGE.RectRectCollision(center, top);
CGE.RectRectCollision(center, bottom);

center.Update();
left.Update();
right.Update();
top.Update();
bottom.Update();
  
requestAnimationFrame(update)
}
requestAnimationFrame(update)
