class Oso {
    constructor(juego) {
      this.juego = juego;
      this.resetPosition();
      this.vel = 4;
      this.imagen = loadImage("data/oso.png");
    }
  
    resetPosition() {
      this.x = width;
      this.y = random(height);
    }
  
    dibujar() {
        image(this.imagen, this.x, this.y, 50, 50);
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
