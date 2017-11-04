
var incr = .002;
var scl = 1;
var start = 0;
var cols, rows;
var gridColor;

function setup() {
	
	
	createCanvas(800, 600);
	pixelDensity(1);
	cols = floor(width/scl);
	rows = floor(height/scl);
}


function draw() {
	
	var yoff = 0;

	for (var y = 0; y < rows; y++){
		var xoff = 0; //initialize here so the x resets correctly
		for (var x = 0; x < cols; x++){
			var index = (x + y * width) * 4;
			var r = noise( xoff, start + yoff)*255;
			xoff += incr;
			console.log("this is color: "+get_color(r))
			noStroke();
			fill(color(get_color(r)));
			rect(x*scl, y*scl, scl, scl);
		}
		yoff += incr;
	}
	//start += incr*2;
	noLoop();
}

function get_color(color){
	// Color range
	// < 50 == Water Color
	if (color < 50) {return [0,0,255]; }else
	if (color < 80){ return [0,191,255];} else
	// > 50 && <100 Sand color
	if (color > 80 && color < 100){ return [244,164,96];} else
	// > 120 && < 150 Dirt color
	if (color > 120 && color < 140){ return [139,69,19];} else
	// > 150 Dark Dirt color
	if (color > 140){ return [51,25,0];}
	else return color;
}