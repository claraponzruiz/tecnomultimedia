// TP0
// Clara Ponz Ruiz - 91472/1

PImage foto;

void setup (){
 size(800,400);
 background(255);
 foto = loadImage("foto mia.jpg");
}

void draw(){
  println(mouseX,mouseY);
  noStroke();
  rectMode(CENTER);
  image(foto,475,50);
 

  //pelo
  fill(#BF9D38);
  rect(200,195,150,175,50); 
  ellipse(200,140,150,125);
  

  //cuello
  fill(#f2d5bf);
  rect(200,255,63,65);


  //cuerpo
  fill(#f2d5bf);
  rect(200,325,200,150,60);
  fill(0);
  rect(145,292,10,85);
  rect(255,292,10,85);
  
  //collar
  stroke(#9B9490);
  noFill();
  triangle(165,250,235,250,200,340);
  noStroke();
  fill(#f2d5bf);
  rect(200,250,65,3);

  
  //cara
  fill(#fae5d4);
  bezier(155,201,177,250,227,250,245,201);
  rect(200,160,90,100,12);
 
  
  //orejas
  ellipse(155,166,20,40); //izq
  ellipse(245,166,20,40); //der
 
  
  // aros
  fill(#9B9490);
  circle(149,176,3);
  circle(249,176,3);
  circle(252,170,3);
  circle(148,160,3);
  
 
  //septum
  stroke(#9B9490);
  noFill();
  circle(200,191,6);
  
  
  //ojos  
  noStroke();
  fill(245);
  ellipse(175,165,30,15); 
  ellipse(225,165,30,15); 
  fill(#278E7C);
  circle(225,164,12);
  circle(175,164,12);
  fill(0);
  circle(175,164,5);
  circle(225,164,5);
 
  
  //intento de parpados
  fill(#EDC7AA);
  bezier(158,162,167,148,183,155,189,162);
  bezier(210,162,221,148,242,155,240,162);


   //intento de cejas
  fill(#C9B167);
  bezier(157,150,167,145,184,146,190,153);
  bezier(240,150,236,145,220,146,213,153);
  

  //pelo d adelante
  fill(#BF9D38);
  bezier(205,102,186,125,136,183,132,113);
  bezier(197,102,215,125,252,183,266,113);
 
  //nariz
  fill(#FAE6D7);  
  rect(200,170,20,40);
  fill(#EAC1A3);
  triangle(200,165,200,192,207,183);

  
  //boca
  fill(#CE6877);
  ellipse(196,210,8,8);
  ellipse(204,210,8,8);
  ellipse(200,215,15,10);
  
  triangle(183,210,194,218,193,207);
  triangle(218,210,207,218,206,207);
  
  fill(255);
  rect(200,360,250,90);
  
}
