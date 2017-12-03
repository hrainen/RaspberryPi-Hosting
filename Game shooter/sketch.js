// globals
var player;
var world;
var enemies = [];

function setup() {
	createCanvas(800, 800);

	load_world();
	load_player();
	load_enemies();
}


function draw() {
	update_world();
	update_player();
	update_enemies();

}

// updating and loading functions for everything else
function load_world(){
	// for now set background = grey
	background(51);
}

function load_player(){
	player =  new Player(width/2, height/2);
}

function load_enemies(){
	let num_enemies = 10;
	for (let i = 0; i < num_enemies; i++){
		// add one enemy to enemies array passed in
		enemies[i] = new Enemy(100 + i*50, 50);
	}
}

function update_world(){
	// for now just re-draw gray background
	background(51);
}

function update_player(){
	// draw player
	player.show();

	// update players position
	player.move();

	// check if any bullets fired by the player have hit anything
	player.update_bullets();
}

function update_enemies(){
	for (var i = 0; i < enemies.length; i++){ // for every enemy on map
		// if any enemy is <= 0 hp, remove it from map
		if (enemies[i].hp <= 0){
			enemies.splice(i, 1); continue;
		}
		// draw any remaining enemies
		enemies[i].show();
		// update their position
		enemies[i].move(player.x, player.y);
	}
}



// event handling for keyboard
function keyReleased(){
	if (keyCode === UP_ARROW){
		player.bull_dir[0] = 0;

	}else if (keyCode === RIGHT_ARROW){
		player.bull_dir[1] = 0;

	}else if (keyCode === DOWN_ARROW){
		player.bull_dir[2] = 0;

	}else if (keyCode === LEFT_ARROW){
		player.bull_dir[3] = 0;
	}

	if (keyCode === 87){ // W (up)
		player.dir[0] = 0;
	} else if (keyCode === 83){ // S (down)
		player.dir[2] = 0;
	} else if (keyCode === 68){ // D (right)
		player.dir[1] = 0;

	} else if (keyCode === 65){ // A (left)
		player.dir[3] = 0;
	}

}

function keyPressed(){
	//[N, E, S, W]
	if (keyCode === UP_ARROW){
		player.bull_dir[0] = -1;

	}else if (keyCode === RIGHT_ARROW){
		player.bull_dir[1] = 1;

	}else if (keyCode === DOWN_ARROW){
		player.bull_dir[2] = 1;

	}else if (keyCode === LEFT_ARROW){
		player.bull_dir[3] = -1;
	}

	if (keyCode === 87){ // W (up)
		player.dir[0] = -1;

	} else if (keyCode === 83){ // S (down)

		player.dir[2] = 1;

	} else if (keyCode === 68){ // D (right)

		player.dir[1] = 1;

	} else if (keyCode === 65){ // A (left)

		player.dir[3] = -1;
	}

}
