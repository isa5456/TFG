let time = 0;
let wave = [];
let path = [];
let slider;
let option = 0;

function setup() {
  createCanvas(600, 400);
  slider = createSlider(1, 50, 5);
}

function draw() {
  // Código de la opción 1
  background(0);
  translate(150, 200);

  // Inicializamos x e y
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    // A partir del tiempo que es time, calculamos x e y que son las coordenadas del círculo (por las que se mueve el punto)
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 75 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx, prevy, x, y);
  }

  // Almacenamos el valor y (vamos hacia atrás) al principio del vector
  wave.unshift(y);
  // Para que la gráfica esté a la derecha
  translate(200, 0);

  line(x - 200, y, 0, wave[0]);

  // Todo junto
  beginShape();
  noFill(); // No relleno
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  // Aumentamos el tiempo
  time += 0.05;

  // Para que no se desborde el vector
  if (wave.length > 250) {
    wave.pop();
  }
}



