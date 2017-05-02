function Tile(i, j) {
	this.i = i;
	this.j = j;

	this.framePintado = [];
	this.frameC = [];

	this.show = function(frame) {
		var x = this.i * scl;
		var y = this.j * scl;

			if (!this.framePintado[frame]) {
			noFill();
			if (contorno) {
				stroke(150);
			} else {
				noStroke();
			}
			rect(x, y, scl, scl);
		} else {
			if (contorno) {
				stroke(150);
			} else {
				noStroke();
			}
			fill(this.frameC[frame][0], this.frameC[frame][1], this.frameC[frame][2]);
			rect(x, y, scl, scl);
		}
	}

	this.closer = function(hor, ver) {
		var x = this.i * scl;
		var y = this.j * scl;
		var cursorX = hor;
		var cursorY = ver;

		var xd = x - cursorX;
		var yd = y - cursorY;

		if (xd < 0 && xd > -scl) {
			if (yd < 0 && yd > -scl) {
				return true;
			}
		} else {
			return false;
		}
	}

	this.paint = function(red, green, blue, frame) {
		this.frameC[frame] = [red, green, blue];
		this.framePintado[frame] = true;
		this.contorno = false;
	}
}