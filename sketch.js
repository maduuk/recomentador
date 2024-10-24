function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantaia, aventura
// guardios da galaxia, 12, fantasia, aventura

// as aventurs de pi, 10, drama, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// ladroes de bicicleta, 12, drama
// o menino que decobriu o vento, 14, drama

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = " geraRecomendacao(idade);
  text(recomendacao, width / 2, heigth / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
    
    
    return "As aventuras de pi";
  } else {
    return "A viagem de chihir