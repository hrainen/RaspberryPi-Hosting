function Person() {
  this.x = width/2;
  this.y = height/2;
  this.velocity = 0;
  this.facing = "N";
  this.isFiring = false;

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 20);
  }

  this.move = function() {
    if (this.facing == "N" && this.velocity != 0){
      this.y += -this.velocity;
    }else if (this.facing == "E" && this.velocity != 0){
      this.x += this.velocity;
  	} else if (this.facing == "S" && this.velocity != 0){
      this.y += this.velocity;
  	} else if (this.facing == "W" && this.velocity != 0){
      this.x += -this.velocity;
    } else if (this.facing == "NE" && this.velocity != 0){
      this.x += this.velocity;
      this.y += -this.velocity;
    }else if (this.facing == "NW" && this.velocity != 0){
      this.x += -this.velocity;
      this.y += -this.velocity;
    }else if (this.facing == "SE" && this.velocity != 0){
      this.x += this.velocity;
      this.y += this.velocity;
    }else if (this.facing == "SW" && this.velocity != 0){
      this.x += -this.velocity;
      this.y += this.velocity;
    }
  }
}
