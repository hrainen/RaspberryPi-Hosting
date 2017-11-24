function Person() {
  this.x = width/2;
  this.y = height/2;
  this.velocity = 5;
  this.isFiring = false;
  this.dir = [0, 0, 0, 0]; //[N, E, S, W]

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 20);
  }

  this.move = function() {
    let xNew = 0;
    let yNew = 0;

    for (var i = 0; i<this.dir.length; i++){
      if (i == 0){ // check north
        if (this.dir[i]){
          yNew += -this.velocity;
        }
      }
      if (i == 2){ // check south
        if (this.dir[i]){
          yNew += this.velocity;
        }
      }
      if(i == 1){ // check east
        if (this.dir[i]){
          xNew += this.velocity;
        }
      }
      if(i == 3){ // check west
        if (this.dir[i]){
          xNew += -this.velocity;
        }
      }
    }
    this.x += xNew;
    this.y += yNew;
  }
}
