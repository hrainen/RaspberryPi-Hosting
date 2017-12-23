function Particle(x, y, vel){
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.velocity = vel;

  this.show = function(){
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x, this.y, this.radius);
  }

  this.update = function(){
    if (this.x <= 0 + this.radius){
      // if out of bounds reverse velocity, and change coordinates
      this.x = this.radius + 1;
      this.velocity[0] = -this.velocity[0];
      this.velocity[1] = -this.velocity[1];
    }
    else if (this.x > width-this.radius){
      // if out of bounds reverse velocity, and change coordinates
      this.x = width - (this.radius +1)
      this.velocity[0] = -this.velocity[0];
      this.velocity[1] = -this.velocity[1];
    }

    else if (this.y <= 0 + this.radius){
      // if out of bounds reverse velocity, and change coordinates
      this.y = this.radius + 1;

      this.velocity[0] = -this.velocity[0];
      this.velocity[1] = -this.velocity[1];
    }
    else if (this.y > height-this.radius){
      // if out of bounds reverse velocity, and change coordinates
      this.y = height - (this.radius +1)

      this.velocity[0] = -this.velocity[0];
      this.velocity[1] = -this.velocity[1];
    }
    else{
      this.x += this.velocity[0];
      this.y += this.velocity[1];
    }
  }
}
