// Clara Ponz Ruiz 91472/1 recuperatorio del tp4
// video explicativo: https://youtu.be/AN5_eyuiIQo

var bird;
var score = 0;
var pipes = [];
var freeze;
var gameState = "menu"; // Estado inicial del juego
var startButton;
var creditsButton;
var instructionsButton; // Nuevo botón de instrucciones
var backButton; // Botón para volver al menú
var bird_pic, background_img, pipe_img, rev_pipe_img;
var font_flappy;



function preload() {
  bird_pic = loadImage('img/bird.png');
  background_img = loadImage('img/background.jpg');
  pipe_img = loadImage('img/pipe.png');
  rev_pipe_img = loadImage('img/rev_pipe.png');
}

function setup() {
  createCanvas(400, 600);
  setupButtons(); // Llama a setupButtons() solo una vez en setup()
  font_flappy = loadFont('flappy-font.ttf');
  try { textFont(font_flappy); } catch(e) {}
}

function setupButtons() {
  // Crea los botones para el menú solo si aún no existen
  if (!startButton) {
    startButton = createButton('Comenzar Juego');
    startButton.position(width / 2 - 80, height / 2);
    startButton.mousePressed(startGame);
  }

  if (!creditsButton) {
    creditsButton = createButton('Ver Créditos');
    creditsButton.position(width / 2 - 80, height / 2 + 50);
    creditsButton.mousePressed(viewCredits);
    
  }

  // Nuevo botón de instrucciones
  if (!instructionsButton) {
    instructionsButton = createButton('Instrucciones');
    instructionsButton.position(width / 2 - 80, height / 2 + 100);
    instructionsButton.mousePressed(viewInstructions);
  }

  // Botón para volver al menú
  if (!backButton) {
    backButton = createButton('Volver al Menú');
    backButton.position(width / 2 - 80, height / 2 + 100); // Alineado con el botón de instrucciones
    backButton.hide(); // Oculta el botón por defecto
    backButton.mousePressed(backToMenu);
  }
}

function hideButtons() {
  // Oculta los botones del menú
  startButton.hide();
  creditsButton.hide();
  instructionsButton.hide(); // Oculta el botón de instrucciones
  backButton.hide(); // También oculta el botón de volver al menú
}

function resetSketch() {
  score = 0;
  pipes = [];
  bird = new Bird(bird_pic);
  loop();
  freeze = 0;
}

function gameOver() {
  // Cambia el estado del juego a "menu" cuando el jugador pierde
  gameState = "menu";
  setupButtons(); // Vuelve a mostrar los botones del menú
  // Código de Game Over
}

function draw() {
  if (gameState === "menu") {
    // Muestra el menú solo cuando el juego está en estado "menu"
    background(background_img);
    textSize(45);
    textAlign(CENTER, CENTER);
    fill(255,174,201);
    text("Flappy Bird", width / 2, height / 4);

    // Personaliza la apariencia de los botones
    startButton.show();
    creditsButton.show();
    instructionsButton.show(); // Muestra el botón de instrucciones
    backButton.hide(); // Oculta el botón de volver al menú en el menú principal
  } else if (gameState === "play") {
    background(background_img);
    text('Score: ' + score, 0, 18);
    bird.update();
    bird.show();
    textSize(18);
    textAlign(LEFT, BASELINE);
    fill(255,174,201);

    // Código para gestionar los tubos
    if (frameCount % 70 == 0) {
      pipes.push(new Pipe());
    }

    for (var pipe of pipes) {
      pipe.show();score
    }

    var flag = 0;
    for (var pipe of pipes) {
      if (pipe.hits(bird)) {
        flag++;
      }
    }

    for (var pipe of pipes) {
      var i = 0;
      if (flag == 0 && freeze == 0) {
        pipe.update();
      }
      if (pipe.offscreen()) {
        pipes.splice(i, 1);
      }
      if (pipe.hits(bird)) {
        freeze = 1;
        bird.velocity = 3;
      }
      if (pipe.passedPipe(bird)) {
        score += 1;
      }
      i++;
    }

    // Código para detectar colisiones y Game Over
    if (bird.y >= height - bird.w / 2) {
      bird.y = height - bird.w / 2;
      bird.velocity = 0;
      if (frameCount % 40 == 0) {
        gameOver();
      }
    }

    if (bird.y < 0) {
      bird.y = 0;
      bird.velocity = 0;
    }
  } else if (gameState === "credits") {
    // Muestra la pantalla de créditos solo cuando el juego está en estado "credits"
    background(background_img);
    textSize(45);
    textAlign(CENTER, CENTER);
    fill(255,174,201);
    text("Creditos:", width / 2, height / 4);
    textSize(24);
    fill(0);
    text("Creado por Clara Ponz Ruiz 91472/1", width / 2, height / 3,5);

    // Muestra el botón de volver al menú en la pantalla de créditos
    backButton.show();
    backButton.mousePressed(backToMenu); // Asigna la función backToMenu al botón
    instructionsButton.hide(); // Oculta el botón de instrucciones en la pantalla de créditos
  } else if (gameState === "instructions") {
    // Muestra las instrucciones solo cuando el juego está en estado "instructions"
    background(background_img);
    textSize(45);
    textAlign(CENTER, CENTER);
    fill(255,174,201);
    text("Instrucciones:", width / 2, height / 4);
    textSize(24);
    fill(0);
    text("Presiona la barra espaciadora para saltar.", width / 2, height / 3,5);
    

    // Muestra el botón de volver al menú en la pantalla de instrucciones
    backButton.show();
  }
}

function keyPressed() {
  if (keyCode == 32 && freeze == 0 && gameState === "play") {
    bird.up();
  }
}

function startGame() {
  resetSketch();
  gameState = "play"; // Cambia el estado del juego a "play"
  hideButtons(); // Oculta los botones del menú cuando el juego comienza
}

function viewCredits() {
  gameState = "credits";
  hideButtons();
}

function viewInstructions() {
  gameState = "instructions"; // Cambia el estado del juego a "instructions"
  hideButtons(); // Oculta los botones del menú al ver las instrucciones
}

function backToMenu() {
  gameState = "menu";
  setupButtons(); // Vuelve a crear los botones del menú
}




function Pipe() {
  var max_height = height - 116;
  this.top = random(max_height / 2);
  this.x = width;
  this.w = 64;
  pipe_gap = random(120, 200)
  this.bottom = this.top + pipe_gap
  this.speed = 4;

  this.show = function() {
    fill(0, 255, 0);
    smooth();
    image(rev_pipe_img, this.x, 0, this.w, this.top);
    image(pipe_img, this.x, this.bottom, this.w, max_height - this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    return this.x < -this.w
  }

  this.hits = function(bird) {
    point1x = (bird.x) >= this.x && (bird.x) <= this.x + this.w;
    point1y = (bird.y) <= this.top || (bird.y) >= this.bottom;
    point1 = point1x && point1y
    point2x = (bird.x + bird.w) >= this.x && (bird.x + bird.w) <= this.x + this.w;
    point2y = (bird.y) <= this.top || (bird.y) >= this.bottom;
    point2 = point2x && point2y
    point3x = (bird.x) >= this.x && (bird.x) <= this.x + this.w;
    point3y = (bird.y + bird.w) <= this.top || (bird.y + bird.w) >= this.bottom;
    point3 = point3x && point3y
    point4x = (bird.x + bird.w) >= this.x && (bird.x + bird.w) <= this.x + this.w;
    point4y = (bird.y + bird.w) <= this.top || (bird.y + bird.w) >= this.bottom;
    point4 = point4x && point4y

    return point1 || point2 || point3 || point4;
  }

  this.passedPipe = function(bird) {
    return bird.x + bird.w == this.x + this.w && bird.y > this.top && bird.y < this.bottom;
  }
}

function Bird(bird_pic) {
  var max_height = height - 116;
  this.y = (max_height - 100) / 2;
  this.x = 40;
  this.velocity = 0;
  this.lift = 9;
  this.gravity = 0.4;
  this.w = 32;

  this.show = function() {
    image(bird_pic, this.x, this.y, this.w * 1.4, this.w);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    // Game over
    if (this.y >= max_height - bird.w / 2) {
      this.y = max_height - bird.w / 2;
      this.velocity = 0;
      if (frameCount % 40 == 0) {
        gameOver();
      }
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  this.up = function() {
    this.velocity -= this.lift;
  }
}
