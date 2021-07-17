let Alloptions = [
	{ dx: 1, dy: 0 }, //Right
	{dx: -1, dy: 0}, //Left
	{dx: 0, dy: 1}, //Down
	{dx: 0, dy: -1} //Up
]

let x
let y
let grid
let spacing = 5
let cols, rows

function make2DArray(cols, rows) {
	let arr = new Array(cols)
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows)
	}
	return arr
}

//Make a 2D array
function setup() {
	createCanvas(window.innerHeight, window.innerWidth)
	cols = floor(width / spacing)
	rows = floor(height / spacing)
	x = cols / 2
	y = rows / 2
	background(51)
	grid = make2DArray(cols, rows)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] =false
		} 
	}				
	grid[x][y] = true
}

function isValid(i, j) {
	if (i < 0 || i >= cols || j < 0 || j >= rows) {
		return false
	}
	return !grid[i][j]
}

function draw() {
	stroke(255)
	strokeWeight(spacing * 0.5)
	point(x * spacing, y * spacing)

	let options = []
	for (let option of Alloptions) {
		let newX = x + option.dx
		let newY = y + option.dy
		if (isValid(newX, newY)) {
			options.push(option)
		 }
	}

	if (options.length > 0) {
		let step = random(options)

		strokeWeight(1)
		stroke(255)
		beginShape()
		vertex(x * spacing, y * spacing)
		x += step.dx
		y += step.dy
		vertex(x * spacing, y * spacing)
		endShape()

		grid[x][y] = true
		
	} else {
		console.log("Stuck")
		noLoop()
	}
}
