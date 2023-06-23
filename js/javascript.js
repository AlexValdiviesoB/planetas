// Preguntas y respuestas
var questions = [
  { question: "¿Cuál es el planeta más cercano al Sol?", options: ["Marte", "Mercurio"], answer: 1 },
  { question: "¿Cuál es el planeta conocido como el 'Planeta Rojo'?", options: ["Júpiter", "Marte"], answer: 1 },
  { question: "¿Cuál es el planeta más grande de nuestro sistema solar?", options: ["Saturno", "Júpiter"], answer: 1 },
  { question: "¿Cuál es el planeta famoso por sus anillos?", options: ["Urano", "Venus"], answer: 0 },
  { question: "¿Cuál es el planeta conocido como 'el Gigante de Hielo'?", options: ["Neptuno", "Venus"], answer: 0 },
  { question: "¿Cuál es el planeta más cercano a la Tierra?", options: ["Venus", "Marte"], answer: 0 },
  { question: "¿Cuál es el planeta conocido como el 'Planeta Azul'?", options: ["Júpiter", "Tierra"], answer: 1 },
  { question: "¿Cuál es el planeta que tiene lunas llamadas 'Titán' y 'Encélado'?", options: ["Saturno", "Urano"], answer: 0 },
  { question: "¿Cuál es el planeta famoso por tener muchos anillos y lunas?", options: ["Júpiter", "Saturno"], answer: 1 },
  { question: "¿Cuál es el planeta conocido como el 'Planeta de los Anillos'?", options: ["Marte", "Saturno"], answer: 1 },
  { question: "¿Cuál es el planeta conocido por tener un gran punto rojo en su atmósfera?", options: ["Júpiter", "Venus"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene un casquete polar de hielo en uno de sus polos?", options: ["Urano", "Marte"], answer: 1 },
  { question: "¿Cuál es el planeta que tiene un gran sistema de anillos y muchas lunas?", options: ["Neptuno", "Saturno"], answer: 1 },
  { question: "¿Cuál es el planeta más lejano del Sol en nuestro sistema solar?", options: ["Plutón", "Mercurio"], answer: 1 },
  { question: "¿Cuál es el planeta conocido como el 'Planeta enano'?", options: ["Marte", "Plutón"], answer: 1 },
  { question: "¿Cuál es el planeta que tiene un gran huracán en su polo norte?", options: ["Júpiter", "Venus"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene una gran mancha oscura llamada 'La Gran Mancha Roja'?", options: ["Júpiter", "Mercurio"], answer: 0 },
  { question: "¿Cuál es el planeta conocido por tener una atmósfera muy densa y caliente?", options: ["Venus", "Urano"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene una luna llamada 'Luna'?", options: ["Marte", "Tierra"], answer: 1 },
  { question: "¿Cuál es el planeta conocido por sus hermosos anillos y su color dorado?", options: ["Saturno", "Neptuno"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene un gran cráter llamado 'Valles Marineris'?", options: ["Marte", "Júpiter"], answer: 0 },
  { question: "¿Cuál es el planeta conocido por tener una cola de gas y polvo llamada 'coma'?", options: ["Neptuno", "Mercurio"], answer: 1 },
  { question: "¿Cuál es el planeta que tiene un gran volcán llamado 'Monte Olimpo'?", options: ["Marte", "Urano"], answer: 0 },
  { question: "¿Cuál es el planeta conocido por sus anillos oscuros y su luna llamada 'Tritón'?", options: ["Neptuno", "Venus"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene una órbita muy excéntrica y una gran cola de gas y polvo?", options: ["Plutón", "Júpiter"], answer: 1 },
  { question: "¿Cuál es el planeta conocido por tener una superficie con grandes surcos y grietas?", options: ["Marte", "Saturno"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene una luna llamada 'Ganímedes'?", options: ["Júpiter", "Tierra"], answer: 0 },
  { question: "¿Cuál es el planeta conocido por su característico color verde azulado?", options: ["Urano", "Marte"], answer: 0 },
  { question: "¿Cuál es el planeta que tiene un gran sistema de anillos y una luna llamada 'Tritón'?", options: ["Neptuno", "Mercurio"], answer: 0 },
  { question: "¿Cuál es el planeta conocido por tener tormentas de polvo muy fuertes?", options: ["Marte", "Venus"], answer: 0 },
  
  // Agrega el resto de preguntas aquí
// Nuevas preguntas
{ question: "¿Cuál es el planeta conocido como el 'Planeta de las Joyas' por sus brillantes colores?", options: ["Saturno", "Marte"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Fobos'?", options: ["Júpiter", "Marte"], answer: 1 },
{ question: "¿Cuál es el planeta conocido como el 'Planeta del Amor'?", options: ["Venus", "Neptuno"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Europa'?", options: ["Mercurio", "Júpiter"], answer: 1 },
{ question: "¿Cuál es el planeta conocido como el 'Planeta de los Anillos de Hielo'?", options: ["Urano", "Neptuno"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una gran mancha blanca llamada 'Gran Mancha Oscura'?", options: ["Saturno", "Neptuno"], answer: 1 },
{ question: "¿Cuál es el planeta conocido por tener una órbita muy excéntrica y una cola de gas y polvo llamada 'coma'?", options: ["Plutón", "Mercurio"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene un gran cráter llamado 'Caloris Basin'?", options: ["Mercurio", "Urano"], answer: 0 },
{ question: "¿Cuál es el planeta conocido por tener una gran mancha oscura en forma de corazón?", options: ["Neptuno", "Plutón"], answer: 1 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Tritón'?", options: ["Venus", "Neptuno"], answer: 1 },
{ question: "¿Cuál es el planeta conocido por sus anillos oscuros y su luna llamada 'Miranda'?", options: ["Urano", "Marte"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene un gran volcán llamado 'Olympus Mons'?", options: ["Marte", "Saturno"], answer: 0 },
{ question: "¿Cuál es el planeta conocido como el 'Planeta de los Vientos' por sus fuertes vientos atmosféricos?", options: ["Júpiter", "Venus"], answer: 1 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Deimos'?", options: ["Marte", "Saturno"], answer: 0 },
{ question: "¿Cuál es el planeta conocido por tener una gran tormenta llamada 'Gran Mancha Oscura'?", options: ["Neptuno", "Urano"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene un sistema de anillos muy delgados y débiles?", options: ["Saturno", "Mercurio"], answer: 0 },
{ question: "¿Cuál es el planeta conocido como el 'Planeta Helado'?", options: ["Urano", "Júpiter"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Ganímedes'?", options: ["Marte", "Júpiter"], answer: 1 },
{ question: "¿Cuál es el planeta conocido por su característico color verde azulado y su sistema de anillos?", options: ["Urano", "Neptuno"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una gran mancha oscura llamada 'Mancha del Diablo'?", options: ["Júpiter", "Mercurio"], answer: 0 },
{ question: "¿Cuál es el planeta conocido por sus lunas llamadas 'Ío', 'Europa', 'Ganímedes' y 'Calisto'?", options: ["Marte", "Júpiter"], answer: 1 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Luna'?", options: ["Mercurio", "Tierra"], answer: 1 },
{ question: "¿Cuál es el planeta conocido por tener una gran mancha oscura en forma de herradura llamada 'Gran Mancha Oscura'?", options: ["Neptuno", "Plutón"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Oberón'?", options: ["Urano", "Neptuno"], answer: 0 },
{ question: "¿Cuál es el planeta conocido por su característico color rojo y sus tormentas de polvo?", options: ["Marte", "Venus"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Triton'?", options: ["Neptuno", "Urano"], answer: 0 },
{ question: "¿Cuál es el planeta conocido como el 'Planeta del Frío Extremo'?", options: ["Plutón", "Júpiter"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una gran mancha oscura llamada 'Mar de la Lluvia'?", options: ["Marte", "Saturno"], answer: 0 },
{ question: "¿Cuál es el planeta conocido por tener un gran número de lunas y una atmosfera compuesta principalmente de helio?", options: ["Saturno", "Neptuno"], answer: 0 },
{ question: "¿Cuál es el planeta que tiene una luna llamada 'Miranda'?", options: ["Urano", "Venus"], answer: 0 }

];

var currentQuestion = 0;
var score = 0;
var playerName = "";

// Función para mostrar el modal y obtener el nombre del concursante
function showModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Función para mezclar aleatoriamente un arreglo
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para iniciar el juego
function startGame() {
  var input = document.getElementById("playerName");
  playerName = input.value;
  var modal = document.getElementById("modal");
  var game = document.getElementById("game");
  modal.style.display = "none";
  game.style.display = "block";

  // Mezclar y seleccionar las primeras 10 preguntas
  var shuffledQuestions = shuffleArray(questions);
  var selectedQuestions = shuffledQuestions.slice(0, 10);

  questions = selectedQuestions; // Sobreescribe el arreglo original con las preguntas seleccionadas

  showQuestion();

  document.getElementById("playerNameElement").innerHTML = playerName;
}


// Función para mostrar la siguiente pregunta
function showQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var currentQuestionObj = questions[currentQuestion];

  questionElement.textContent = currentQuestionObj.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < currentQuestionObj.options.length; i++) {
    var option = document.createElement("input");
    option.type = "radio";
    option.name = "answer";
    option.value = i;
    optionsElement.appendChild(option);

    var label = document.createElement("label");
    label.textContent = currentQuestionObj.options[i];
    optionsElement.appendChild(label);
  }
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Por favor, selecciona una opción");
    return;
  }

  var answer = parseInt(selectedOption.value);
  var currentQuestionObj = questions[currentQuestion];
  if (answer === currentQuestionObj.answer) {
    score += 10;
    alert("¡Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta");
  }

  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endGame();
  } else {
    showQuestion();
  }
}

// Función para finalizar el juego
function endGame() {
  var game = document.getElementById("game");
  game.style.display = "none";

  var result = document.getElementById("result");
  result.style.display = "block";

  var playerNameElement = document.getElementById("player-name");
  playerNameElement.textContent = playerName + " tú puntaje fue de " + score + " puntos";

  var scoreMessageElement = document.getElementById("score-message");
  if (score < 40) {
    scoreMessageElement.textContent = "¡Vamos no pasa nada! Intenta una vez más.";
  } else if (score >= 50 && score <= 70) {
    scoreMessageElement.textContent = "Estás a un paso de convertirte en un experto sobre el universo.";
  } else if (score >= 80 && score <= 90) {
    scoreMessageElement.textContent = "¡Excelente! Ya casi eres todo un astronauta.";
  } else if (score === 100) {
    scoreMessageElement.textContent = "¡Perfecto! Puntaje nivel cósmico.";
  }

// Obtener referencia al botón de "Jugar de nuevo"
var playAgainButton = document.getElementById("play-again-button");

// Agregar evento de escucha para el clic en el botón
playAgainButton.addEventListener("click", showModal);


}





console.log(score)

// Inicia el juego cuando se carga la página
window.onload = function () {
  showModal();
};




