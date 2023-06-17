// Clara Ponz Ruiz 91472/1
// tp2 tecno multimedia

int posX = 200;
int posY = 200;
PImage imagen; 

float r = 20, rd;
void setup(){
size(800,400);
}
void draw(){
background(0);
imagen = loadImage("ilusion optica.jpg");

image(imagen,400,0);

rd = dist(0,0,mouseX,mouseY)/350;
noStroke();
for(int i =20; i > 0; i--){
if(i%2 == 0){
fill(255);
ellipse(posX - rd, posY, i*r, i*r);
}else{
fill(0);
ellipse(posX + rd, posY, i*r, i*r);
}
}
}
