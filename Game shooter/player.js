function Player(x, y){
  // constructor
  this.color = 255; // white
  this.x = x;
  this.y = y;
  this.vel = 5;
  this.isFiring = false;
  this.dir = [0,0,0,0]; //[N, E, S, W]
  this.hp = 100;
  this.bullets = [];
  this.bull_dir = [0, 0, 0, 0]; //[N, E, S, W]

  // settings to tweak
  this.radius = 20;
  this.frames_since_fire = 10;
  this.fire_rate = 10;

  this.show = function(){
    // for now just draw circle
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius); //posx, posy, radius
  }


  this.move = function() {

    this.x += (this.vel*this.dir[3] + this.vel*this.dir[1]);
    this.y += (this.vel*this.dir[0] + this.vel*this.dir[2]);
  }

  this.fire = function(){

    this.bullets.push(new Projectile(this.x, this.y, this.bull_dir));
  }

  this.update_bullets = function(){
    //if counter started, then increment counter
    this.frames_since_fire +=1;

    //This bit adds new bullet to list of bullets
    if (this.bull_dir[0] != 0 || this.bull_dir[1] != 0 || this.bull_dir[2] != 0 || this.bull_dir[3] != 0){
      if(this.bull_dir[0] != 0 && this.bull_dir[2] != 0){
        if(this.bull_dir[1] != 0 && this.bull_dir[3] != 0){
          //do nothing cuz you cant fire in opposite directions at same time
        }else if (this.bull_dir[1] != 0 || this.bull_dir[3] != 0){

          if(this.frames_since_fire >= this.fire_rate){
            // check frames since last fire
            this.bull_dir[0] = 0; this.bull_dir[2] =0;
            this.fire();
            this.bull_dir[0] = -1; this.bull_dir[2] =1;
            this.frames_since_fire = 0;
          }
        }


      }else if(this.bull_dir[1] != 0 && this.bull_dir[3] != 0){ //east and west pressed
        if(this.bull_dir[0] != 0 && this.bull_dir[2] != 0){
          //do nothing cuz you cant fire in opposite directions at same time
        }else if (this.bull_dir[0] != 0 || this.bull_dir[2] != 0){ // north and south not both pressed
          if(this.frames_since_fire >= this.fire_rate){
            //check frames since last fire
            this.bull_dir[1] = 0; this.bull_dir[3] =0;
            this.fire();
            this.bull_dir[1] = 1; this.bull_dir[3] =-1;
            this.frames_since_fire = 0;
          }
        }

      }else if(this.frames_since_fire >= this.fire_rate){
        this.fire();
        this.frames_since_fire = 0;
      }

    }

    for (let i = 0; i < this.bullets.length; i++){
      this.bullets[i].show();
      this.bullets[i].move();
    }
  }
}
