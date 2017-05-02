var ancho = 400;
var alto = 400;

var sliderH, sliderS, sliderV, sSwitch;
var boxHSB;
var v1, v2, v3;
var contorno = true;

var cols, rows;
var scl = 20;
var grid = []

var currentFrame = 1;
var totalFrames = 1;

function setup() {
	//frameRate(1);
	createCanvas(ancho, alto + 110);

	colorMode(HSB, 360);

	sliderH = createSlider(0, 360, 0);
	sliderH.position(0, alto);
	sliderS = createSlider(0, 360, 360);
	sliderS.position(0, alto + 30);
	sliderV = createSlider(0, 360, 360);
	sliderV.position(0, alto + 60);
	//sSwitch = createSlider

	cols = floor(ancho / scl);
	rows = floor(alto / scl);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var tile = new Tile(i, j);
			grid.push(tile);

		}
	}

}

function mouseClicked() {

	for (var n = 0; n < grid.length; n++) {
		if (grid[n].closer(mouseX, mouseY)) {
			grid[n].paint(v1, v2, v3, currentFrame);
			console.log(n);
		}
	}
}

function mouseDragged() {

	for (var n = 0; n < grid.length; n++) {
		if (grid[n].closer(mouseX, mouseY)) {
			grid[n].paint(v1, v2, v3, currentFrame);
			console.log(n);
		}
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		currentFrame--;
		if (currentFrame < 1) {
			currentFrame = totalFrames;
		}
	} else if (keyCode == RIGHT_ARROW) {
		currentFrame++;
		if (currentFrame > totalFrames) {
			currentFrame = 1;
		}
	} else if (keyCode == 78) { //n
		//totalFrames = totalFrames + 1;
	} else if (keyCode == 84) { //t
		contorno = !contorno;
	} else if (keyCode == 80) { //p
		//play();
	} else if (keyCode == 17) { //ctrl
		for (var n = 0; n < grid.length; n++) {
			if (grid[n].closer(mouseX, mouseY)) {
				sliderH.value(grid[n].frameC[currentFrame][0]);
				sliderS.value(grid[n].frameC[currentFrame][1]);
				sliderV.value(grid[n].frameC[currentFrame][2]);
				console.log(n);
			}
		}
	}
}

function play() {
	for (var i = 1; i < totalFrames; i++) {
		for (var n = 0; n < grid.length; n++) {
			grid[n].show(i);
		}
	}
}

function draw() {
	background(51);
	//console.log(currentFrame + "/" + totalFrames);
	v1 = sliderH.value();
	v2 = sliderS.value();
	v3 = sliderV.value();
	fill(v1, v2, v3);
	rect(280, alto, 60, 60);

	for (var n = 0; n < grid.length; n++) {
		grid[n].show(currentFrame);
	}
}