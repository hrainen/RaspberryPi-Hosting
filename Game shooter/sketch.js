var player;
var pSpeed = 4;
var enemies = [];
var bullets = [];
var frame_since_fire = 0;
var fire_rate = 10;

function setup() {
	createCanvas(600, 400);
	player = new Person();
	for (var i = 0; i < 9; i++){
		enemies[i] = new Enemy(100 + i*50, 50);
	}
}


function draw() {
	background(51);
	player.show();
	player.move();
	for (var i = 0; i < enemies.length; i++){
		enemies[i].show();
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
}

function keyReleased(){
	//if player direction = north, and up arrow keyReleased
	if (player.facing == "N" && keyCode === UP_ARROW){
		player.velocity = 0;
	}
	//if player direction = east, and right arrow keyReleased
	else if (player.facing == "E" && keyCode === RIGHT_ARROW){
		player.velocity = 0;
	}
	//if player direction = south, and down arrow keyReleased
	else if (player.facing == "S" && keyCode === DOWN_ARROW){
		player.velocity = 0;
	}
	//if player direction = west, and left arrow keyReleased
	else if (player.facing == "W" && keyCode === LEFT_ARROW){
		player.velocity = 0;
	}

	else if (player.facing == "NE" && keyCode === RIGHT_ARROW){
		player.facing = "N"
	}else if (player.facing == "NE" && keyCode === UP_ARROW){
		player.facing = "E"
	}else if (player.facing == "NW" && keyCode === LEFT_ARROW){
		player.facing = "N"
	}else if (player.facing == "NW" && keyCode === UP_ARROW){
		player.facing = "W"
	}	else if (player.facing == "SE" && keyCode === RIGHT_ARROW){
		player.facing = "S"
	}else if (player.facing == "SE" && keyCode === DOWN_ARROW){
		player.facing = "E"
	}else if (player.facing == "SW" && keyCode === LEFT_ARROW){
		player.facing = "S"
	}else if (player.facing == "SW" && keyCode === DOWN_ARROW){
		player.facing = "W"
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

	if (keyCode === UP_ARROW  && player.velocity == 0){
		player.facing = "N";
		player.velocity = pSpeed;
	} else if (keyCode === DOWN_ARROW && player.velocity == 0){
		player.facing = "S";
		player.velocity = pSpeed;
	} else if (keyCode === RIGHT_ARROW && player.velocity == 0){
		//set player direction to right
		player.facing = "E";
		player.velocity = pSpeed;
	} else if (keyCode === LEFT_ARROW && player.velocity == 0){
		player.facing = "W";
		player.velocity = pSpeed;
	}

	// if direction = north, velocity != 0, and east keyPressed
	else if (player.facing == "N" && player.velocity != 0 && keyCode === RIGHT_ARROW){
		player.facing = "NE";
		player.velocity = pSpeed;
	}
	// if direction = north, velocity != 0, and west keyPressed
	else if (player.facing == "N" && player.velocity != 0 && keyCode === LEFT_ARROW){
		player.facing = "NW";
		player.velocity = pSpeed;
	}
	// if direction = north, velocity != 0, and west keyPressed
	else if (player.facing == "N" && player.velocity != 0 && keyCode === LEFT_ARROW){
		player.facing = "NW";
		player.velocity = pSpeed;
	}


	// if direction = east, velocity != 0, and north keyPressed
	else if (player.facing == "E" && player.velocity != 0 && keyCode === UP_ARROW){
		player.facing = "NE";
		player.velocity = pSpeed;
	}
	// if direction = east, velocity != 0, and south keyPressed
	else if (player.facing == "E" && player.velocity != 0 && keyCode === DOWN_ARROW){
		player.facing = "SE";
		player.velocity = pSpeed;
	}

	// if direction = south, velocity != 0, and east keyPressed
	else if (player.facing == "S" && player.velocity != 0 && keyCode === RIGHT_ARROW){
		player.facing = "SE";
		player.velocity = pSpeed;
	}
	// if direction = south, velocity != 0, and west keyPressed
	else if (player.facing == "S" && player.velocity != 0 && keyCode === LEFT_ARROW){
		player.facing = "SW";
		player.velocity = pSpeed;
	}

	// if direction = west, velocity != 0, and north keyPressed
	else if (player.facing == "W" && player.velocity != 0 && keyCode === UP_ARROW){
		player.facing = "NW";
		player.velocity = pSpeed;
	}
	// if direction = west, velocity != 0, and south keyPressed
	else if (player.facing == "W" && player.velocity != 0 && keyCode === DOWN_ARROW){
		player.facing = "SW";
		player.velocity = pSpeed;
	}

}
