// Clara Ponz Ruiz (91472/1)
// TP FINAL Tecnología Multimedial 1
// "Ricitos de oro y los tres osos" de Robert Southey
// David Bedoian

let textos;
let aventura;
//let estado;
//let juego;

function setup() {
  createCanvas(600,600);
  aventura = new Aventura();
  textos = loadStrings('data/textos.txt');
  
 /* for ( let i = 0; i < w; i++ ) {
    impantallas[i] = loadImage( "data/pantalla" + i + ".png" );
  }

  textos = loadStrings("textos.txt");
  for ( let a = 0; a < w; a++ ) {
  }

 botones = loadStrings("botones.txt");
  for ( let b = 0; b < w+2; b++ ) {
  }*/
}

function draw() {
  aventura.mostrar();
  
  

//println(mouseX, mouseY);
//print(aventura.textos[2]);
// switch(aventura.estado)
//pantalla0
// case 0:
// image(this.imagen);
    
}
function mousePressed(){
 aventura.mousePressed(); 
}
