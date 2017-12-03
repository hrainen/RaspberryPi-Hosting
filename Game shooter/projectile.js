function Projectile(x, y, dir){
  this.x = x;
  this.y = y;
  this.vel = 10;
  this.dir =[dir[0], dir[1], dir[2], dir[3]]; //[N, E, S, W]


  this.show = function() {
    fill(50, 0, 200);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
  }

  this.move = function(){
      this.x += (this.vel*this.dir[1] + this.vel*this.dir[3]);
      this.y += (this.vel*this.dir[0] + this.vel*this.dir[2]);
  }
}
