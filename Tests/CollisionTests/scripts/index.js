var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
function randomInt(max) {
return Math.floor(Math.random() * max);
}
var rects = [
  new CGE.Rect(0, 0, 2,  2, 50, 50, "blue"),
  new CGE.Rect(canvas.width, 0, 2, 2, 50, 50, "blue"),
  new CGE.Rect(canvas.width, canvas.height, 2, 2, 50, 50, "blue"),
  new CGE.Rect(0, canvas.height, 2, 2, 50, 50, "blue")
]

var circles = [
  new CGE.Circle(canvas.width / 4, 0, 2, 2, 50, "red"),
  new CGE.Circle(canvas.width - canvas.width / 4, 0, -2, 2, 50, "red")
];

function checkAllRectCollisions(array = []) {
  for(let i in array) {
    for(let j in array) {
      CGE.RectRectCollision(array[i], array[j]);
    }
  }
}
function checkAllCircleCollisions(array = []) {
  for(let i in array) {
    for(let j in array) {
      CGE.CircleCircleCollision(array[i], array[j]);
    }
  }
}
function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

checkAllCircleCollisions(circles);
for(let i in circles) {
  circles[i].Update();
}
checkAllRectCollisions(rects);
for(let i in rects) {
  rects[i].Update();
}
  
requestAnimationFrame(update)
}
requestAnimationFrame(update)
