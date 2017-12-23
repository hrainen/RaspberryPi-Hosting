var particles = [];

var num_particles = 200;
var max_dist = 80;
var colors = ["green", "red", "purple", "yellow", "blue", "orange"];
var particle_speed = 2;

function setup() {
	createCanvas(1500, 800);

	// initialize particles in Canvas
	for (let i =0; i<num_particles; i++){
		particles[i] = new Particle(random(2, width-2), random(2, height-2), [random(-particle_speed, particle_speed), random(-particle_speed, particle_speed)]);
	}
}

function draw() {
	background(0);

	draw_particles();
	draw_lines();
}

function draw_particles(){
	for (let i = 0; i < num_particles; i++){
		particles[i].update();
		particles[i].show();
	}
}

function draw_lines(){
	// for every particle draw line to every other particle (for now)

	let partitionSize = width/colors.length;

	for (let i = 0; i < num_particles; i++){
		if (particles[i].x < partitionSize){
			stroke(colors[0]);
		}
		else if(particles[i].x < partitionSize*2 && particles[i].x > partitionSize){
			stroke(colors[1]);
		}
		else if(particles[i].x < partitionSize*3 && particles[i].x > partitionSize*2){
			stroke(colors[2]);
		}
		else if(particles[i].x < partitionSize*4 && particles[i].x > partitionSize*3){
			stroke(colors[3]);
		}
		else if(particles[i].x < partitionSize*5 && particles[i].x > partitionSize*4){
			stroke(colors[4]);
		}
		else if(particles[i].x < width && particles[i].x > partitionSize*5){
			stroke(colors[5]);
		}
		else stroke (255);
		for(let j = 1; j < num_particles; j++){
			// draw line to every other particle in list
			// check to see if next particle (j) is close enough (within 50 px) if so draw line
			//sqrt(pow((particles[i].x - particles[j].x), 2) + pow((particles[i].y - particles[j].y), 2)) <= max_dist
			//in_bounds(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
			if (sqrt(pow((particles[i].x - particles[j].x), 2) + pow((particles[i].y - particles[j].y), 2)) <= max_dist ){
				line(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
			}
		}
	}
}

function in_bounds(x1, y1, x2, y2){
	if ((x1 - x2) < max_dist && (x1 - x2) > -max_dist){
		if ((y1 - y2) < max_dist && (y1 - y2) > -max_dist){
			return true;
		}
	}
	else return false;
}
