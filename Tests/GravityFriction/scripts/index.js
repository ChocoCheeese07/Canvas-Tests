var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}
var circle1 = new CGE.Circle(0, 100, 3, -6, 50, "#3e8db8")
circle1.gravity = 1.5;
circle1.bounciness = 85;
circle1.frictionEnabled = true;
var circle2 = new CGE.Circle(canvas.width, 100, -3, -6, 50, "#3e8db8")
circle2.gravity = 1.5;
circle2.bounciness = 85;
circle2.frictionEnabled = true;

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

CGE.CircleCircleCollision(circle1, circle2);
  
circle1.Update();
circle2.Update();
  
requestAnimationFrame(update)
}
requestAnimationFrame(update)
