var player;
var pSpeed = 4;
var enemies = [];
var bullets = [];
var frame_since_fire = 0;
var fire_rate = 10;
var num_enemies = 5;

function setup() {
	createCanvas(800, 800);
	player = new Person();
	for (var i = 0; i < num_enemies; i++){
		enemies[i] = new Enemy(100 + i*50, 50);
	}
}


function draw() {
	background(51);
	player.show();
	player.move();
	for (var i = 0; i < enemies.length; i++){
		if (enemies[i].hp <= 0){enemies.splice(i, 1); continue;}
		enemies[i].show();
		enemies[i].move(player.x, player.y);
	}
	for (var i = 0; i < bullets.length; i++){
		bullets[i].show();
		bullets[i].move();
	}
	if(player.isFiring){
		frame_since_fire += 1;
		if(frame_since_fire >= fire_rate) {
			bullets.push(new Projectile(player.x, player.y, player.dirX, player.dirY));
			frame_since_fire = 0;
		}
	}
	if(bullets.length != 0){
		hitEnemy();
	}
}

function hitEnemy(){

	for (var i = 0; i < bullets.length; i++){
		// if bullet goes out of bounds, remove it
		if(bullets[i].x < 0 || bullets[i].x > width || bullets[i].y < 0 || bullets[i].y > height){
			bullets.splice(i, 1);
			continue;
		}
		// check if every bullet has collided with one of the enemy
		for(var j = 0; j < enemies.length; j++){
			if(bullets[i].x-enemies[j].x <= 30 && bullets[i].x-enemies[j].x >= -30 &&
				 bullets[i].y-enemies[j].y <= 20 && bullets[i].y-enemies[j].y >= -20){
					enemies[j].hit(25);
					bullets.splice(i, 1);
					break;
			}
		}
	}


}
function keyReleased(){
	if (keyCode === UP_ARROW){
		player.dir[0] = 0;
	} else if (keyCode === DOWN_ARROW){
		player.dir[2] = 0;
	} else if (keyCode === RIGHT_ARROW){
		player.dir[1] = 0;

	} else if (keyCode === LEFT_ARROW){
		player.dir[3] = 0;
	}

	if (keyCode === 32){ // space = fire
		player.isFiring = false;
		frame_since_fire = 0;
	}

}

function keyPressed(){
	if (keyCode === 32){ // space = fire
		bullets.push(new Projectile(player.x, player.y, player.dirX, player.dirY));
		player.isFiring = true;
	}

	if (keyCode === UP_ARROW){
		player.isMoving = true;
		player.dir[0] = 1;
	} else if (keyCode === DOWN_ARROW){
		player.isMoving = true;
		player.dir[2] = 1;

	} else if (keyCode === RIGHT_ARROW){
		player.isMoving = true;
		player.dir[1] = 1;

	} else if (keyCode === LEFT_ARROW){
		player.isMoving = true;
		player.dir[3] = 1;
	}

}
