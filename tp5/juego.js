class Juego {
    constructor() {
      this.ricitos = new Ricitos(this);
      this.oso = new Oso(this);
    }
  
    draw() {
      // Lógica de dibujo del juego
      this.ricitos.dibujar();
      this.ricitos.verificarVida();
      this.ricitos.verificarX();
      this.oso.dibujar();
      this.oso.mover();
    }
  
    keyPressed() {
      if (key === 'a') {
        this.ricitos.moverIzq();
      } else if (key === 'd') {
        this.ricitos.moverDer();
      } else if (key === 's') {
        this.ricitos.moverAbajo();
      } else if (key === 'w') {
        this.ricitos.moverArriba();
      }
    }

    ganar(){
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255, 0, 0);
        text("Ganaste!", width / 2, height / 2);
    }
    perder() {
        textAlign(CENTER, CENTER);
        textSize(32);
        fill(255, 0, 0);
        text("Perdiste", width / 2, height / 2);
      }
  }
