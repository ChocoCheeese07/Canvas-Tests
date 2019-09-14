var canvas = document.getElementById("view");
canvas.width = 700;
canvas.height = 400;
var ctx = canvas.getContext("2d");

var rect = new Rect(10, 20, 3, 2, 50, 50, "#d1e617");

function update() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

rect.Update();

requestAnimationFrame(update)
}
requestAnimationFrame(update)