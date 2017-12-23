var particles = [];

var num_particles = 150;
var max_dist = 120;
// for colors, I leave out the last parenthesis because I add in the alpha value later via logic
var colors = ['rgba(255,0,0', 'rgba(255,165,0', 'rgba(255,255,0', 'rgba(0,128,0', 'rgba(0,255,255', 'rgba(0,0,255', 'rgba(128,0,128', 'rgba(238,130,238'];
var particle_speed = 3;

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

	let partitionSize = width/colors.length; // divides up the canvas into colored partitions

	for (let i = 0; i < num_particles; i++){
		let color = colors[floor(particles[i].x/partitionSize)];
		let temp = ', .5)'
		//stroke (color+temp); // figures out which partition a particle is in

		for(let j = 1; j < num_particles; j++){
			let dist = sqrt(pow((particles[i].x - particles[j].x), 2) + pow((particles[i].y - particles[j].y), 2));
			// draw line to every other particle in list
			// check to see if next particle (j) is close enough (within 50 px) if so draw line
			//sqrt(pow((particles[i].x - particles[j].x), 2) + pow((particles[i].y - particles[j].y), 2)) <= max_dist
			//in_bounds(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
			if (dist <= max_dist ){
				let alpha = map(dist, 0, max_dist, 1, 0)
				stroke (color+", " + String(alpha) + ")");
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
