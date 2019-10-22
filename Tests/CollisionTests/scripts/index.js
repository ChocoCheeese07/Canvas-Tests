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
  new CGE.Rect(0, 0, 2,  2, 50, 50, "rgba(0, 0, 255, .50)"),
  new CGE.Rect(canvas.width, 0, 2, 2, 50, 50, "rgba(0, 0, 255, .50)"),
  new CGE.Rect(canvas.width, canvas.height, 2, 2, 50, 50, "rgba(0, 0, 255, .50)"),
  new CGE.Rect(0, canvas.height, 2, 2, 50, 50, "rgba(0, 0, 255, .50)")
]

var circles = [
  new CGE.Circle(canvas.width / 4, 0, 2, 2, 50, "rgba(255, 0, 0, .50)"),
  new CGE.Circle(canvas.width - canvas.width / 4, 0, -2, 2, 50, "rgba(255, 0, 0, .50)"),
  new CGE.Circle(canvas.width / 4, canvas.height, 2, 2, 50, "rgba(255, 0, 0, .50)"),
  new CGE.Circle(canvas.width - canvas.width / 4, canvas.height, -2, 2, 50, "rgba(255, 0, 0, .50)")
];

function checkAllRectCollisions(array = []) {
  for(let i in array) {
    for(let j in array) {
      CGE.RectRectCollision(array[i], array[j]);
    }
  }
};
function checkAllCircleCollisions(array = []) {
  for(let i in array) {
    for(let j in array) {
      CGE.CircleCircleCollision(array[i], array[j]);
    }
  }
};
function CheckAllCircleRectCollisions(circleArray = [], rectArray = []) {
  for(let i in circleArray) {
    for(let j in rectArray) {
      CGE.CircleRectCollision(circleArray[i], rectArray[j]);
    }
  }
};
function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

CheckAllCircleRectCollisions(circles, rects);
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
