var canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.id = "view";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

var rect1 = new CGE.Circle(canvas.width / 2, canvas.height / 2, 0, 0, 20, "blue");
rect1.detectEdges = false;
rect1.angle = Math.PI;
rect1.pathRadius = 50;
var rect2 = new CGE.Circle(canvas.width / 2, canvas.height / 2, 0, 0, 20, "red");
rect2.detectEdges = false;
rect2.angle = 0;
rect2.pathRadius = 110;
var rect3 = new CGE.Circle(canvas.width / 2, canvas.height / 2, 0, 0, 20, "blue");
rect3.detectEdges = false;
rect3.angle = Math.PI;
rect3.pathRadius = 170;
var rect4 = new CGE.Circle(canvas.width / 2, canvas.height / 2, 0, 0, 20, "red");
rect4.detectEdges = false;
rect4.angle = 0;
rect4.pathRadius = 230;
var rect5 = new CGE.Circle(canvas.width / 2, canvas.height / 2, 0, 0, 20, "blue");
rect5.detectEdges = false;
rect5.angle = Math.PI;
rect5.pathRadius = 290;

function update() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(173, 216, 230, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    rect1.angle += -.06;
    rect1.pos.x = canvas.width / 2 + Math.cos(rect1.angle) * rect1.pathRadius;
    rect1.pos.y = canvas.height / 2 + Math.sin(rect1.angle) * rect1.pathRadius;

    rect2.angle += .06;
    rect2.pos.x = canvas.width / 2 + Math.cos(rect2.angle) * rect2.pathRadius;
    rect2.pos.y = canvas.height / 2 + Math.sin(rect2.angle) * rect2.pathRadius;

    rect3.angle += -.06;
    rect3.pos.x = canvas.width / 2 + Math.cos(rect3.angle) * rect3.pathRadius;
    rect3.pos.y = canvas.height / 2 + Math.sin(rect3.angle) * rect3.pathRadius;

    rect4.angle += .06;
    rect4.pos.x = canvas.width / 2 + Math.cos(rect4.angle) * rect4.pathRadius;
    rect4.pos.y = canvas.height / 2 + Math.sin(rect4.angle) * rect4.pathRadius;
    
    rect5.angle += -.06;
    rect5.pos.x = canvas.width / 2 + Math.cos(rect5.angle) * rect5.pathRadius;
    rect5.pos.y = canvas.height / 2 + Math.sin(rect5.angle) * rect5.pathRadius;

    rect1.Update();
    rect2.Update();
    rect3.Update();
    rect4.Update();
    rect5.Update();

    requestAnimationFrame(update)
}
requestAnimationFrame(update)
