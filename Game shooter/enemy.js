function Enemy(x, y){
  this.x = x;
  this.y = y;
  this.hp = 100;
  this.radius = 40;

  this.show = function() {
    fill(255, 0, 200);
    noStroke();
    ellipse(this.x, this.y, this.radius);
    this.draw_hp_bar();
  }

  this.move = function(playerx, playery) {

    if ((Math.pow(Math.pow((playerx - this.x), 2) + Math.pow((playery - this.y),2), (1/2))) < 30){
      console.log("fuuuk");
    }
    else{
      // calc slope from enemy to player = (delta y)/(delta x)
      deltay = (playery - this.y);
      deltax = (playerx - this.x);
      slope = deltay/deltax;

      this.x+= deltax*.01;
      this.y+= deltay*.01;

      /*
      if (this.x - playerx < -22){this.x += 1;}
      else if (this.x - playerx > 22){this.x += -1;}

      if (this.y - playery < -22){this.y += 1;}
      else if (this.y - playery > 22){this.y += -1;}
      */
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
