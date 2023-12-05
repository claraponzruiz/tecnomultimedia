// Clara Ponz Ruiz (91472/1)
// TP FINAL Tecnología Multimedial 1
// "Ricitos de oro y los tres osos" de Robert Southey
// David Bedoian

class Aventura {
 constructor(){
  this.w = 14;
  this.ach= 147;
  this.alt= 62;
  this.estado = 0;
  this.e = 0;
  //textos
  this.textofin = 0;
  this.textos = [this.w];
  //botones
  this.botones = [];
  this.botones_texto = [];
  this.botoncomenzar = false;
  this.botonA = false;
  this.botonB = false;
  this.botondefin = false;
  this.botonsiguiente = false;
  //pantallas
  this.impantallas = [];
  this.pantalla = new Pantalla();
  
  for ( this.i = 0; this.i < this.w; this.i++ ) {
    this.impantallas[this.i] = loadImage( "data/pantalla" + this.i + ".png" );
  }
  this.textos = loadStrings("data/textos.txt");
  this.botones_texto = loadStrings("data/botones.txt");
  print(this.botones_texto[0]);
 
  for ( this.b = 0; this.b < this.w+2; this.b++ ) { 
   }
 
  for ( this.i = 0; this.i < this.w; this.i++) { 

    this.botones[this.i] = [];
  }  
  this.botones[0][0] = new Boton(190,500,'',1);
  
  this.botones[1][0] = new Boton(420,523,this.botones_texto[0],2);
  this.botones[1][1] = new Boton(43,523,this.botones_texto[1],3);
  
  this.botones[2][0] = new Boton(420,523,this.botones_texto[2],6);
  this.botones[2][1] = new Boton(43,523,this.botones_texto[3],7);

  this.botones[3][0] = new Boton(420,523,this.botones_texto[4],5);
  this.botones[3][1] = new Boton(43,523,this.botones_texto[5],4);

  this.botones[4][0] = new Boton(117,520,this.botones_texto[6],8);

  this.botones[5][0] = new Boton(117,520,this.botones_texto[7],9);
  
  this.botones[6][0] = new Boton(117,520,this.botones_texto[8],12);
  
  this.botones[7][0] = new Boton(420,523,this.botones_texto[9],11);
  this.botones[7][1] = new Boton(43,523,this.botones_texto[10],10);
 
  this.botones[8][0] = new Boton(117,520,this.botones_texto[11],12);
  
  this.botones[9][0] = new Boton(117,520,this.botones_texto[12],12);

  this.botones[10][0] = new Boton(117,520,this.botones_texto[13],12);
  
  this.botones[11][0] = new Boton(117,520,this.botones_texto[14],12);

  this.botones[12][0] = new Boton(515,515,'',13);
  
  this.botones[13][0] = new Boton(325,425,'',12);

 }
 
 mostrar(){
   background(200, 100, 0);
  this.pantalla.mostrar(this.impantallas[this.estado], this.textos[this.estado]);
  
if(this.estado != 0 && this.estado != 12 && this.estado != 13){
for(this.i=0; this.i < this.botones[this.estado].length; this.i++){this.botones[this.estado][this.i].mostrar();}   
  }
 }
 mousePressed(){
  for(this.i = 0; this.i<this.botones[this.estado].length; this.i++)
  {
    if(this.botones[this.estado][this.i].clickEnBoton()){
    this.estado = this.botones[this.estado][this.i].pantalla_ir; 
  break;
   }
  }
 }
}
