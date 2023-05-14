// Clara Ponz Ruiz 91472/1
// tp1 tecno multimedia


String estado;
int c; //contador
int y;
PImage imagen1;
PImage imagen2;
PImage imagen3;
PImage imagen4;
PFont fuente;

void setup() {
  size( 640, 480 );  //resolucion tp1
  textAlign( CENTER, CENTER );
  fill(200);

  estado = "menu";

  frameRate( 60 );

  imagen1 = loadImage("pasos discretos.jpg");
  imagen2 = loadImage("pasos discretos 2.jpg");
  imagen3 = loadImage("pasos discretos 3.jpg");
  imagen4 = loadImage("pasos discretos 4.jpg");
  fuente = loadFont("times new roman.vlw");
  textFont(fuente);
}

void draw() {

  //
  //MAQUINA DE ESTADOS --
  //
  
  if ( estado.equals("menu") ) {
    background(imagen3);
    textSize(40);
    text( "Pasos Discretos (2008)\nLeo Nuñez", width/2, height/2 );
    textSize(20);
    text("Hacer click para empezar", width/2, 80);
    circle( width/2, height/43, 50 );
    //
  } else if (estado.equals("p1") ) {
    background(imagen2);
    text( "Pasos Discretos es una instalación interactiva\nen la que hay dispositivos ubicados en el piso\nque se comunican entre sí mediante luz", 320, 400-y);

    if (c <= 200 ) {
      y++;
    }
    c++;  //suma 1 per frame
    if ( c >= 400 ) {  // 60fps 10seg = 600
      estado = "p2";
      c = 0;  //RESET DE VARIABLE CONTADOR
      y = 0;  //RESET DE VARIABLE MOVIMIENTO
    }
    //
  } else if (estado.equals("p2") ) {
    background(imagen1);
    text( "El público, con sus pasos,\n interviene en el sistema como un agente externo,\n alterando el estado de la obra con su presencia,\nque una vez perturbada, evoluciona y\ncada elemento adopta una nueva posición.", width/2, 600-y );
    //
    if (c <= 200 ) {
      y++;
    }
    c++;  //suma 1 per frame
    if ( c >= 500 ) {  // 60fps * 5seg = 300
      estado = "p3";
      c = 0;  //RESET DE VARIABLE CONTADOR
      y = 0;  //RESET DE VARIABLE MOVIMIENTO
    }
    //
  } else if (estado.equals("p3") ) {
    background(imagen4);
    text( "Este sistema dinámico posee la capacidad\n de evolucionar en el tiempo estableciendo distintos\n estados en la obra, \ny el espectador también puede intervenir en dicha evolución\ndando, como resultado, nuevos estados emergentes.", width/2, 350-y );
    //
    if (c <= 200 ) {
      y++;
    }
    c++;  //suma 1 per frame
    if ( c >= 600 ) {  // 60fps * 5seg = 300
      estado = "p4";
      c = 0;  //RESET DE VARIABLE CONTADOR
      y = 0;  //RESET DE VARIABLE MOVIMIENTO
    }
  } else if (estado.equals("p4") ) {
    background(50);
    text( "¡Muchas gracias por ver!", width/2, height/2 );
    text( "Hacer click para reinciar", width/2, 80);
    circle( width/2, height/43, 50 );

    //
  }
  println( estado );
}
void mousePressed() {
  // circle( width/2, height/43, 50 );  <-- de acá salen los datos
  if ( estado.equals("menu") ) {
    if ( dist(width/2, height/43, mouseX, mouseY) < 50/2 ) {
      estado = "p1";
    }
  }
  if ( estado.equals("p4") ) {
    //aca falta boton cuadrado
    estado = "menu" ;
  }  
  if ( estado.equals("p4") ) {
    if ( dist(width/2, height/43, mouseX, mouseY) < 50/2 ) {
      estado = "menu";
    }
  }
  if ( estado.equals("p4") ) {
    //aca falta boton cuadrado
    estado = "menu" ;
  }
}
