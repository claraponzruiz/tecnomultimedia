class Pantalla {
  constructor() {}

  mostrar(fondo_, texto_) {
    push();
    imageMode(CORNER);
    image(fondo_, 0, 0, width, height);

    
//    fill(0, 200);
//    rect(0, 279, width, height * 0.3); 

  
    fill(0);
    textSize(15);
    textAlign(CENTER, CENTER);
    text(texto_, 23, 25, width * 0.9, height * 0.3);

    pop();
  }
}
