class JuegoAventura {
  constructor(_ricitos, _oso, _pasto) {
    this.juego = new Juego(_ricitos, _oso);
    this.estado = 0;
    this.fondo = _pasto;  
}

  draw() {
    background(this.fondo);
    if (this.estado == 0) {
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      text("Esquivá al oso utilizando las teclas WASD", width / 4, height / 4, width/2, height/2);
    } else if (this.estado == 1) {
      this.juego.draw();
    } else if (this.estado == 2) {
      this.juego.ganar();
    } else if (this.estado == 3) {
      this.juego.perder();
    }
  }

  keyPressed() {
    this.juego.keyPressed();
  }
  mousePressed() {
    if (this.estado == 0) {
      this.estado = 1;
    }
  }

  reiniciar() {
    //ricitos
    this.juego.ricitos.juego = this;
    this.juego.ricitos.x = 0;
    this.juego.ricitos.y = height / 2;
    this.juego.ricitos.vel = 8;
    this.juego.ricitos.vida = 3;
    //oso
    this.juego.oso.juego = this.juego;
    this.juego.oso.resetPosition();
    this.juego.oso.vel = 4;
    //juego
    this.estado = 0;
  }
}
