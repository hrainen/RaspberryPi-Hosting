function Enemy(x, y){
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255, 0, 200);
    noStroke();
    ellipse(this.x, this.y, 40, 40);
  }

  this.move = function(playerx, playery) {
    if (this.x - playerx < -10){this.x += 1;}
    else if (this.x - playerx > 10){this.x += -1;}

    if (this.y - playery < -10){this.y += 1;}
    else if (this.y - playery > 10){this.y += -1;}
  }

}
