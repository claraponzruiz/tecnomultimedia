class Oso {
    constructor(juego, _oso) {
      this.juego = juego;
      this.resetPosition();
      this.vel = 4;
      this.imagen = _oso;
    }
  
    resetPosition() {
      this.x = width;
      this.y = random(height);
    }
  
    dibujar() {
        image(this.imagen, this.x, this.y, 100, 100);
    }
  
    mover() {
      this.x -= this.vel;
      if (this.x < 0) {
        this.resetPosition();
      }
      this.verificarColision();
    }
  
    verificarColision() {
      const distancia = dist(this.x, this.y, this.juego.ricitos.x, this.juego.ricitos.y);
      if (distancia < 25) {
        this.juego.ricitos.vida -= 1;
      }
    }
  }
