// Clara Ponz Ruiz 91472/1
// tp2 recuperatorio - comisión 3 
// link al video: https://youtu.be/j-RzBvYMCAA

//hacer clic izquierdo para cambiar colores
//hacer clic derecho para cambiar tamaño
//presionar la letra r para reiniciar

PImage imagen;

int C = 0; //color 1
int C2 = 255; //color 2

float modificadorX1 = width/4;
float modificadorY1 = height/2;
float MouseX;
float MouseY;
float sumatamanio;

boolean clic = false;

void setup () { 
  size (800,400);
  imagen = loadImage("imagen.jpg");
}

void draw () {
  image(imagen,400,0);
 dibujarCuadrados();
}

void dibujarCuadrados(){
 
  for (int i = 0; i < width/2; i += width/30) {
  
    float MouseX = map (mouseX, 0, width, 0, width/3);
    float MouseY = map (mouseY, 0, height, 0, height);
      
    float X1 = map (i, 0, width/2, 0, modificadorX1+MouseX);
    float Y1 = map (i, 0, height, 0, modificadorY1+MouseY);

    float W = map (i, 0, width/2, width/2, width/200+sumatamanio);
    float H = map (i, 0, height, height, height/200+sumatamanio);
    float F = round( map (i, 0, width/2, 0, 15)); 
    
      if ((F%2) == 0&&clic==false){
        C = 0;
      } else if ((F%2) != 0&&clic==false) {
        C = 255;
      }
      if ((F%2) == 0&&clic==true){
        C = 255;
      } else if ((F%2) != 0&&clic==true) {
        C = 0;
      } 
 //cuadrados      
  noStroke ();
      fill (C);
      rect (X1, Y1, W, H); 
  }
}
//clics para cambio de color
void mousePressed () {
  if (mouseButton == LEFT &&clic==false) {
  clic = true;
  println("clic izquierdo");
  } else if (mouseButton == LEFT &&clic==true) {
clic = false;
  println("clic izquierdo");
  }
//clics para cambiar tamaño
if(mouseButton==RIGHT){sumatamanio+=5;}
println("clic derecho");
}

//botón de restart
void keyPressed (){
  if(key == 'R'||key == 'r'){
   sumatamanio = 0;
   println("restart");
  } else {
  }
}  
  
  
  
  
  
