class Ricitos {
    constructor(juego) {
      this.juego = juego;
      this.x = 0;
      this.y = height / 2;
      this.vel = 8;
      this.vida = 3;
     this.imagen = loadImage("data/ricitos.png");


    }
  
    dibujar() {
        image(this.imagen, this.x, this.y, 50, 50);
    }
  
    moverIzq() {
      this.x -= this.vel;
    }
  
    moverDer() {
      this.x += this.vel;
    }
  
    moverAbajo() {
      this.y += this.vel;
    }
  
    moverArriba() {
      this.y -= this.vel;
    }

    verificarVida() {
        if (this.vida <= 0) {
            estado=3;
        }
      }

      verificarX(){
        if (this.x >= width) {
            estado=2;
        }
      }
  }
