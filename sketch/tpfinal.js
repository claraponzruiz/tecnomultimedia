// Clara Ponz Ruiz (91472/1)
// TP FINAL Tecnología Multimedial 1
// "Ricitos de oro y los tres osos" de Robert Southey
// David Bedoian

let textos;
let aventura;

 function preload() {
 let imagenes = [];
 for ( let i = 0; i < 14; i++ ) {
  imagenes[i] = loadImage( "sketch/data/pantalla" + i + ".png" );
}
textos = loadStrings("sketch/data/textos.txt");
let botones_texto = ["IR AL BOSQUE", "ESPERAR QUE SE ENFRÍE", "IRSE A SU CASA", "SEGUIR RECORRIENDO", "NO LE GUSTA LA AVENA", "ACEPTA", "CONTINUAR", "CONTINUAR", "CONTINUAR", "IRSE A SU CASA", "ECHARSE A DORMIR", "CONTINUAR", "CONTINUAR", "CONTINUAR", "CONTINUAR"];
let pasto = loadImage("sketch/data/pasto.png");
let ricitos= loadImage("sketch/data/ricitos.png");
let oso = loadImage("sketch/data/oso.png");
aventura = new Aventura(textos, imagenes, botones_texto, ricitos, oso, pasto);
}

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('sketch');
 // aventura = new Aventura();
 // textos = loadStrings('data/textos.txt');  
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
