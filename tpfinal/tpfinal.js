// Clara Ponz Ruiz (91472/1)
// TP FINAL Tecnología Multimedial 1
// "Ricitos de oro y los tres osos" de Robert Southey
// David Bedoian

let textos;
let aventura;

function setup() {
  createCanvas(600,600);
  aventura = new Aventura();
  textos = loadStrings('data/textos.txt');  
}

function draw() {
  aventura.mostrar();  
}

function mousePressed(){
 aventura.mousePressed(); 
}

function keyPressed(){
 aventura.keyPressed(); 
 
}
