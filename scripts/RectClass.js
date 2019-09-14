class Rect {
constructor(posX, posY, velX, velY, w, h, color) {
this.canvas = document.getElementById("view");
this.ctx = this.canvas.getContext("2d");
this.pos = {x: posX, y: posY};
this.vel = {x: velX, y: velY};
this.color = color;
this.width = w;
this.height = h;
}
Draw() {
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
}
Update() {
this.pos.x += this.vel.x;
this.pos.y += this.vel.y;
this.Draw();
}
}