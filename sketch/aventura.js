// Clara Ponz Ruiz (91472/1)
// TP FINAL Tecnología Multimedial 1
// "Ricitos de oro y los tres osos" de Robert Southey
// David Bedoian

class Aventura {
  constructor(_textos, _imagenes, _botones, _ricitos, _oso, _pasto) {
    this.w = 14;
    this.ach= 147;
    this.alt= 62;
    this.estado = 0;
    this.e = 0;
    //textos
    this.textofin = 0;
    this.textos = _textos;
    //botones
    this.botones = [];
    this.botones_texto = _botones;
    this.botoncomenzar = false;
    this.botonA = false;
    this.botonB = false;
    this.botondefin = false;
    this.botonsiguiente = false;
    //pantallas
    this.impantallas = _imagenes;
    this.pantalla = new Pantalla();
    //juego
    this.juego = new JuegoAventura(_ricitos, _oso, _pasto);
  


  //  for ( this.i = 0; this.i < this.w; this.i++ ) {
   //   this.impantallas[this.i] = loadImage( "data/pantalla" + this.i + ".png" );
   // }
   // this.textos = loadStrings("data/textos.txt");
    //  this.botones_texto = loadStrings("data/bot.txt");
   // this.botones_texto = ["IR AL BOSQUE", "ESPERAR QUE SE ENFRÍE", "IRSE A SU CASA", "SEGUIR RECORRIENDO", "NO LE GUSTA LA AVENA", "ACEPTA", "CONTINUAR", "CONTINUAR", "CONTINUAR", "IRSE A SU CASA", "ECHARSE A DORMIR", "CONTINUAR", "CONTINUAR", "CONTINUAR", "CONTINUAR"];
    //  print(this.botones_texto[0]);

    for ( this.b = 0; this.b < this.w+2; this.b++ ) {
    }

    for ( this.i = 0; this.i < this.w; this.i++) {

      this.botones[this.i] = [];
    }
    this.botones[0][0] = new Boton(190, 500, '', 1); //comenzar

    this.botones[1][0] = new Boton(390, 495, this.botones_texto[0], 2); // ir al bosque
    this.botones[1][1] = new Boton(40, 500, this.botones_texto[1], 3); // esperar que enfríe

    this.botones[2][0] = new Boton(419, 495, this.botones_texto[2], 6); // irse a su casa
    this.botones[2][1] = new Boton(28, 495, this.botones_texto[3], 7); //seguir recorriendo

    this.botones[3][0] = new Boton(415, 495, this.botones_texto[4], 5); // no le gusta
    this.botones[3][1] = new Boton(35, 490, this.botones_texto[5], 4); // le gusta

    this.botones[4][0] = new Boton(220, 505, this.botones_texto[6], 8); //ñum avena, continuar

    this.botones[5][0] = new Boton(220, 505, this.botones_texto[7], 9); //wacala avena, continuar

    this.botones[6][0] = new Boton(225, 520, this.botones_texto[8], 12); // continuar

    this.botones[7][0] = new Boton(421, 510, this.botones_texto[9], 11); // irse a su casa
    this.botones[7][1] = new Boton(35, 508, this.botones_texto[10], 10); // echarse a dormir

    this.botones[8][0] = new Boton(220, 505, this.botones_texto[11], 12); // avena, continuar

    this.botones[9][0] = new Boton(220, 505, this.botones_texto[12], 12); //guisito, continuar

    this.botones[10][0] = new Boton(100, 510, this.botones_texto[13], 14); //continuar

    this.botones[11][0] = new Boton(100, 510, this.botones_texto[14], 12); //continuar

    this.botones[12][0] = new Boton(515, 515, '', 13);

    this.botones[13][0] = new Boton(325, 425, '', 12);
  }

  mostrar() {
    if (this.estado != 14) {
      this.juego.reiniciar();
      background(200, 100, 0);
      this.pantalla.mostrar(this.impantallas[this.estado], this.textos[this.estado]);

      if (this.estado != 0 && this.estado != 12 && this.estado != 13) {
        for (this.i=0; this.i < this.botones[this.estado].length; this.i++) {
          this.botones[this.estado][this.i].mostrar();
        }
      }
    } else {
      this.juego.draw();
      if (this.juego.estado == 2 || this.juego.estado == 3){
      this.estado = 13;
      }
    }
  }

  mousePressed() {
    if (this.estado != 14) {
      for (this.i = 0; this.i<this.botones[this.estado].length; this.i++)
      {
        if (this.botones[this.estado][this.i].clickEnBoton()) {
          this.estado = this.botones[this.estado][this.i].pantalla_ir;
          break;
        }
      }
    }
    else {this.juego.mousePressed();}
  }
  
  keyPressed() {
    if ( key == ' ' && this.estado == 13) {
      this.estado = 0;
    }
    if (this.estado == 14) {
      this.juego.keyPressed();
    }
  }
}
