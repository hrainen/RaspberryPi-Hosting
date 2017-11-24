function Projectile(x, y, dirx, diry){
  this.x = x;
  this.y = y;
  this.velX = 0;
  this.velY = -1;
  this.speed = 10;

  this.show = function() {
    fill(50, 0, 200);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
  }

  this.move = function(){
    this.x += this.velX*this.speed;
    this.y += this.velY*this.speed;
  }
}
