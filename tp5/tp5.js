// clara ponz ruiz - 91472/1 
//link al video explicativo https://youtu.be/GntVn6m6F24?si=0hgC7caKZhPxoBhs

let juego;
let estado;

function setup() {
  createCanvas(400, 400);
  juego = new Juego();
  estado = 0;
}

function draw() {
  background(220);
  if (estado == 0){
    textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 0, 0);
      text("Jugar", width / 2, height / 2);
  } else if (estado == 1){
    juego.draw();
  } else if (estado == 2){
    juego.ganar();
  } else if (estado == 3){
      juego.perder();
  }
  
}

function keyPressed() {
  juego.keyPressed();
}
function mousePressed(){
    if (estado == 0){
        estado = 1;
    }
}
