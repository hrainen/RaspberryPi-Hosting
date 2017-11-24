function Enemy(x, y){
  this.x = x;
  this.y = y;

  this.show = function() {
    fill(255, 0, 200);
    noStroke();
    ellipse(this.x, this.y, 40, 40);
  }

}
