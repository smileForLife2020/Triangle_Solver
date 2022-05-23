//stating the global variables
var w = screen.width; //the screen width
var h = screen.height - 40; //the screen height with some give for the tab

function setup() {
  createCanvas(w, h);
}

function draw() {
  paper();
}

//making the background look like paper
function paper() {
  background(235);
  strokeWeight(0.5);
  
  //drawing the lines
  for(var i = 0; i <= 25; i++) {
    if(i == 0) {
      stroke(255, 92, 10);
    }
    else {
      stroke(51, 175, 232);
    }
    line(0, h/14 + i* h/26.95, w, h/14 + i* h/26.95)
  }
}

//all the pages (I think im being smart)
function startPage() {
  
}
