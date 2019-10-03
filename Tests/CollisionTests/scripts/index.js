var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}

var rect1 = new CGE.Rect(canvas.width / 2, canvas.height / 2, 0,  0, 50, 50, "red");
var rect2 = new CGE.Rect(canvas.width / 2, canvas.height / 4, 0,  5, 40, 40, "blue");

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

rect1.Update();
rect2.Update();
  
requestAnimationFrame(update)
}
requestAnimationFrame(update)