//CLARA PONZ RUIZ (91472/1) - TP3
// link al video: https://youtu.be/-bmgrKD9QHw

int w = 14;
int ach= 147;
int alt= 62;
int estado, e;
String textofin;
PImage[] impantallas =  new PImage[w];
String[] textos = new String[w];
String[] botones = new String[w+1];
boolean botoncomenzar, botonA, botonB, botondefin, botonsiguiente;


void setup() {
  size ( 600, 600);
  estado = 0;
  e=estado;

  for ( int i = 0; i < w; i++ ) {
    impantallas[i] = loadImage( "data/pantalla" + i + ".png" );
  }

  textos = loadStrings("textos.txt");
  for ( int a = 0; a < w; a++ ) {
  }

 botones = loadStrings("botones.txt");
  for ( int b = 0; b < w+2; b++ ) {
  }
}
void draw() {
  println(mouseX);
  println(mouseY);

  botoncomenzar= (mouseX > 190 && mouseY > 500 && mouseX < 410 && mouseY < 573);
  botonA= (mouseX > 43 && mouseY > 522 && mouseX < 190 && mouseY < 584);
  botonB=(mouseX > 420 && mouseY > 523 && mouseX < 567 && mouseY < 585);
  botonsiguiente=(mouseX > 117 && mouseY > 520 && mouseX < 485 && mouseY < 578);
  botondefin=(mouseX > 164 && mouseY > 525 && mouseX < 402 && mouseY < 582);

  println(estado);

  switch(estado) {

    //pantalla0 
  case 0:
    image( impantallas[0], 0, 0 );
    break;

    //pantalla1
    case 1:
    ajustesdetextos(estado, 300);
    image( impantallas[1], 0, 0 );
    text(textos[1], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[1], 46, 519, 170, 567);
    text(botones[0], 423, 519, 520, 520);

    break;

    //pantalla2
  case 2:
    image( impantallas[2], 0, 0 );
    ajustesdetextos(e, 300);
    text(textos[2], 25, 32, 560, 200);
    ajustesdebotones(estado, 300);
    text(botones[3], 46, 519, 170, 567);
    text(botones[2], 423, 519, 520, 520);
    break;

    //pantalla3
  case 3:
    image( impantallas[3], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[3], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[5], 46, 519, 170, 567);
    text(botones[4], 423, 519, 520, 520);
    break;

    //pantalla4
  case 4:
    image( impantallas[4], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[4], 25, 32, 560, 160);
    ajustesdebotones(estado, 500);
    text(botones[6], 250, 540, 600, 600);
   
    break;

    //pantalla5
  case 5:
    image( impantallas[5], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[5], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[7], 150, 540, 600, 600);
    break;

    //pantalla6
  case 6:
    image( impantallas[6], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[6], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[8], 300, 540, 600, 600);
    break;

    //pantalla7
  case 7:
    image( impantallas[7], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[7], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[10], 46, 519, 170, 567);
    text(botones[9], 423, 519, 520, 520);
    break;

    //pantalla8
  case 8:
    image( impantallas[8], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[8], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[11], 300, 519, 170, 567);
   
    break;

    //pantalla9
  case 9:
    image( impantallas[9], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[9], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[12], 275, 519, 170, 567);
    break;

    //pantalla10
  case 10:
    image( impantallas[10], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[10], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[13], 100, 519, 170, 567);
    break;

    //pantalla11
  case 11:
    image( impantallas[11], 0, 0 );
    ajustesdetextos(estado, 300);
    text(textos[11], 25, 32, 560, 160);
    ajustesdebotones(estado, 300);
    text(botones[14], 146, 519, 170, 567);
    break;

    //pantalla12
  case 12:
    image( impantallas[12], 0, 0 );

    break;

    ////pantalla13 creditos
  case 13:
    image( impantallas[13], 0, 0 );

    break;
  }
}
//botones
void mouseClicked() {  

  if ( estado == 0 && botoncomenzar) {
    estado = 1;
  }
  //pantalla1
  else if ( estado == 1) {
    if (botonA) {
      estado = 3;
    }
    if (botonB) {
      estado = 2;
    }
  }
  //pantalla2
  else if  ( estado == 2) {
    if (botonA) {
      estado = 6;
    }
    if (botonB) {
      estado = 7;
    }
  }
  //pantalla3
  else if  ( estado == 3) {
    if (botonA) {
      estado = 4;
    }
    if (botonB) {
      estado = 5;
    }
  }//pantalla4 
  else if  ( estado == 4) {
    if (botonsiguiente) {
      estado = 8;
    }
  }//pantalla5
  else if  ( estado == 5) {
    if (botonsiguiente) {
      estado = 9;
    }
  }//pantalla6 
  else if  ( estado == 6) {
    if (botondefin) {
      estado = 13;
    }
  }//pantalla7
  else if  ( estado == 7) {
    if (botonA) {
      estado = 10;
    }
    if (botonB) {
      estado = 11;
    }
  }//pantalla8 
  else if  ( estado == 8) {
    if (botondefin) {
      estado = 13;
    }
  }//pantalla9 
  else if  ( estado == 9) {
    if (botondefin) {
      estado = 13;
    }
  }//pantalla10 
  else if  ( estado == 10) {
    if (botonA) {
      estado = 13;
    }
  }
  //pantalla11 
  else if  ( estado == 11) {
    if (botondefin) {
      estado = 13;
    }
  }
}
//para resetear con el espacio
void keyPressed() {

  if ( key == ' ') { 
    reiniciar();
  }
}

void mousePressed() {  
  
  if ( estado == 13 && botoncreditos(400, 500, 150) ) { //del fin a los creditos
    estado = 12;
  }
  if ( estado == 12 && botoncreditos(550, 550, 70) ) { //de los creditos al fin 
    estado = 13;
  }
}

// funciones

void ajustesdetextos(int e, int t) {  
  textSize(14);
  textAlign(LEFT);
  fill( 0 );
}
void ajustesdebotones(int e, int t) {  
  //textFont(tipografia);
  textSize(15);
  textAlign(LEFT);
  fill( 0 );
}

//para reiniciar
void reiniciar() {
  estado= 0;
}

boolean botoncreditos( int x, int y, int r ) { 
  return dist(mouseX, mouseY, x, y) <= r;
}
