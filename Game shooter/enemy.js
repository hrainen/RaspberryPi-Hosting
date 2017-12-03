function Enemy(x, y){
  this.x = x;
  this.y = y;
  this.hp = 100;
  this.radius = 40;
  this.vel = 3;
  this.color = [200, 150, 255];

  this.show = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius);
    this.draw_hp_bar();
  }

  this.move = function(playerx, playery) {

    if ((Math.pow(Math.pow((playerx - this.x), 2) + Math.pow((playery - this.y),2), (1/2))) < 30){
      console.log("hitting player");
    }
    else{
      // calc slope from enemy to player = (delta y)/(delta x)
      deltay = (playery - this.y);
      deltax = (playerx - this.x);
      direction = Math.sqrt(deltax*deltax + deltay*deltay);


      this.x+= deltax/direction * this.vel;
      this.y+= deltay/direction * this.vel;
    }
  }

  this.hit = function(dmg){
    this.hp -= dmg;
  }

  this.draw_hp_bar = function (){
    rectMode(LEFT);
    fill(67,255,79);
    rect(this.x-20, this.y-30, 40*(this.hp/100), 6);
  }

}
