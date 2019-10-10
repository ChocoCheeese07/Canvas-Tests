var CGE = {
  randomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  Rect: class Rect {
    constructor(posX, posY, velX, velY, w, h, color) {
      this.canvas = document.getElementById("view");
      this.ctx = this.canvas.getContext("2d");
      this.pos = {x: posX, y: posY};
      this.vel = {x: velX, y: velY};
      this.objectType = "Rectangle";
      this.detectEdges = true;
      this.frictionEnabled = false;
      this.gravity = 0;
      this.acceleration = 0;
      this.friction = 90;
      this.bounciness = 0;
      this.color = color;
      this.width = w;
      this.height = h;
    }
    SetVelocity(x, y) {
      this.vel.x = x;
      this.vel.y = y;
    }
    Draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.pos.x - this.width / 2, this.pos.y - this.height / 2, this.width, this.height);
    }
    CheckEdges() {
      if (this.pos.x + (this.width / 2) > this.canvas.width) {
        this.pos.x = this.canvas.width - (this.width / 2);
        this.vel.x = -this.vel.x;
      };
      if (this.pos.x - (this.width / 2) < 0) {
        this.pos.x = this.width / 2;
        this.vel.x = -this.vel.x;
      };
      if (this.pos.y + (this.height / 2) > this.canvas.height) {
        this.pos.y = this.canvas.height - (this.height / 2);
        if (this.frictionEnabled === true) {
          this.vel.x = this.vel.x * (this.friction / 100);
          this.vel.y = -this.vel.y * (this.bounciness / 100);
        } else {
          this.vel.y = -this.vel.y;
        };
      };
      if (this.pos.y - (this.height / 2) < 0) {
        this.pos.y = this.height / 2;
        this.vel.y = -this.vel.y;
      };
    }
    PreUpdate() {}
    PostUpdate() {}
    Update() {
      this.PreUpdate();
      this.vel.x += this.acceleration;
      this.vel.y += this.gravity;
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      if(this.detectEdges === true) {
        this.CheckEdges();
      };
      this.Draw();
      this.PostUpdate();
    }
  },
  Circle: class Circle {
    constructor(posX, posY, velX, velY, radius, color) {
      this.canvas = document.getElementById("view");
      this.ctx = this.canvas.getContext("2d");
      this.pos = {
        x: posX,
        y: posY
      };
      this.vel = {
        x: velX,
        y: velY
      };
      this.objectType = "Circle";
      this.detectEdges = true;
      this.frictionEnabled = false;
      this.gravity = 0;
      this.acceleration = 0;
      this.friction = 90;
      this.bounciness = 0;
      this.color = color;
      this.radius = radius;
    }
    SetVelocity(x, y) {
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
      if (this.pos.x + this.radius > this.canvas.width) {
        this.pos.x = this.canvas.width - this.radius;
        this.vel.x = -this.vel.x;
      }
      if (this.pos.x - this.radius < 0) {
        this.pos.x = this.radius;
        this.vel.x = -this.vel.x;
      }
      if (this.pos.y + this.radius > this.canvas.height) {
        this.pos.y = this.canvas.height - this.radius;
        if (this.frictionEnabled === true) {
          this.vel.x = this.vel.x * (this.friction / 100);
          this.vel.y = -this.vel.y * (this.bounciness / 100);
        } else {
          this.vel.y = -this.vel.y;
        };
      }
      if (this.pos.y - this.radius < 0) {
        this.pos.y = this.radius;
        this.vel.y = -this.vel.y;
      }
    }
    PreUpdate() {}
    PostUpdate() {}
    Update() {
      this.PreUpdate();
      this.vel.x += this.acceleration;
      this.vel.y += this.gravity;
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      this.CheckEdges();
      this.Draw();
      this.PostUpdate();
    }
  },
  RectRectCollision(rect1, rect2) {
    if(rect1.pos.x - rect1.width / 2 < rect2.pos.x + rect2.width / 2 &&
       rect1.pos.x + rect1.width / 2 > rect2.pos.x - rect2.width / 2 &&
       rect1.pos.y - rect1.height / 2 < rect2.pos.y + rect2.height / 2 &&
       rect1.pos.y + rect1.height / 2 > rect2.pos.y - rect2.height / 2
       ) {
      if(rect1.pos.x < rect2.pos.x && rect1.vel.x > 0) {
        rect1.vel.x = -rect1.vel.x;
        rect2.vel.x = -rect2.vel.x;
      } else if (rect1.pos.x > rect2.pos.x && rect1.vel.x < 0) {
        rect1.vel.x = -rect1.vel.x;
        rect2.vel.x = -rect2.vel.x;
      } else if(rect1.pos.y < rect2.pos.y && rect1.vel.y > 0) {
        rect1.vel.y = -rect1.vel.y;
        rect2.vel.y = -rect2.vel.y;
      } else if (rect1.pos.y > rect2.pos.y && rect1.vel.y < 0) {
        rect1.vel.y = -rect1.vel.y;
        rect2.vel.y = -rect2.vel.y;
      }
    };
  }
}
class Scene {

}
