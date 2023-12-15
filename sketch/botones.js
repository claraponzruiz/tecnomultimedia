class Boton{
  constructor(x, y, etiqueta, ir) {
    this.x = x;
    this.y = y;
    this.etiqueta = etiqueta;
    this.ancho = 150;
    this.alto = 65;
    this.pantalla_ir = ir;
  }

  mostrar() {
//   print(this.etiqueta);
    push();
    noFill();
   stroke(0);
   strokeWeight(5);
   rect(this.x, this.y, this.ancho, this.alto);
  pop();
  push();
    fill(0);
    textSize(10);
    textAlign(CENTER, CENTER);
    text(this.etiqueta, this.x, this.y, this.ancho, this.alto);

 pop();
  }

  clickEnBoton() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
