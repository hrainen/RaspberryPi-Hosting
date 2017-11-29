function Person() {
  this.x = width/2;
  this.y = height/2;
  this.velocity = 5;
  this.isFiring = false;
  this.dir = [0, 0, 0, 0]; //[N, E, S, W]
  this.isFacing = "N";

  this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 20);
    switch(this.isFacing){
      case "N":
        // show character facing up
        break;
      case "E":
        // show character facing up
        break;
      case "S":
        // show character facing up
        break;
      case "W":
        // show character facing up
        break;
      case "NW":
        // show character facing up
        break;
      case "NE":
        // show character facing up
        break;
      case "SW":
        // show character facing up
        break;
      case "W":
        // show character facing up
        break;
    }
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
