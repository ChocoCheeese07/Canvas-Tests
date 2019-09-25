var CanvasGameEngine = {
Rect : class Rect {
constructor(posX, posY, velX, velY, w, h, color) {
this.canvas = document.getElementById("view");
this.ctx = this.canvas.getContext("2d");
this.pos = {x: posX, y: posY};
this.vel = {x: velX, y: velY};
this.frictionEnabled = false;
this.gravity = 0;
this.acceleration = 0;
this.friction = 90;
this.bounciness = 0;
this.color = color;
this.width = w;
this.height = h;
}
SetVelocity(x, y){
this.vel.x = x;
this.vel.y = y;
}
Draw() {
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
}
CheckEdges() {
if(this.pos.x + this.width > this.canvas.width) {
this.pos.x = this.canvas.width - this.width;
this.vel.x = -this.vel.x;
};
if(this.pos.x < 0) {
this.pos.x = 0;
this.vel.x = -this.vel.x;
};
if(this.pos.y + this.height > this.canvas.height) {
this.pos.y = this.canvas.height - this.height;
if(this.frictionEnabled === true) {
this.vel.x = this.vel.x * (this.friction / 100);
this.vel.y = -this.vel.y * (this.bounciness / 100);
} else {
this.vel.y = -this.vel.y;
};
};
if(this.pos.y < 0) {
this.pos.y = 0;
this.vel.y = -this.vel.y;
};
}
Update() {
this.vel.x += this.acceleration;
this.vel.y += this.gravity;
this.pos.x += this.vel.x;
this.pos.y += this.vel.y;
this.CheckEdges();
this.Draw();
}
},
Circle : class Circle {
constructor(posX, posY, velX, velY, radius, color) {
this.canvas = document.getElementById("view");
this.ctx = this.canvas.getContext("2d");
this.pos = {x: posX, y: posY};
this.vel = {x: velX, y: velY};
this.gravity = 0;
this.acceleration = 0;
this.friction = 90;
this.bounciness = 0;
this.color = color;
this.radius = radius;
}
SetVelocity(x, y){
this.vel.x = x;
this.vel.y = y;
}
Draw() {
this.ctx.save();
this.ctx.fillStyle = this.color;
this.ctx.beginPath();
this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
this.ctx.fill();
this.ctx.closePath();
this.ctx.restore();
}
CheckEdges() {
if(this.pos.x + this.radius > this.canvas.width) {
this.pos.x = this.canvas.width - this.radius;
this.vel.x = -this.vel.x;
}
if(this.pos.x - this.radius < 0) {
this.pos.x = this.radius;
this.vel.x = -this.vel.x;
}
if(this.pos.y + this.radius > this.canvas.height) {
this.pos.y = this.canvas.height - this.radius;
if(this.frictionEnabled === true) {
    this.vel.x = this.vel.x * (this.friction / 100);
    this.vel.y = -this.vel.y * (this.bounciness / 100);
    } else {
    this.vel.y = -this.vel.y;
    };
}
if(this.pos.y - this.radius < 0) {
this.pos.y = this.radius;
this.vel.y = -this.vel.y;
}
}
Update() {
this.vel.x += this.acceleration;
this.vel.y += this.gravity;
this.pos.x += this.vel.x;
this.pos.y += this.vel.y;
this.CheckEdges();
this.Draw();
}
}
}
