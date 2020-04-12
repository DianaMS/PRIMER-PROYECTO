let currentQuestion = 0;
let score = 0;
let totQuestions = questions.length;

let container = document.getElementById('quizContainer');
let questionEl = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let titleResult = document.getElementById('titleResult')
let resultCont1 = document.getElementById('result1');
let resultCont2 = document.getElementById('result2');
let volver = document.getElementById('volver');
let salir = document.getElementById('salir');

function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    let selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('¡Por favor seleccione su respuesta!')
        return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = 'Terminar';
    }
    if (currentQuestion == totQuestions) {
        quizContainer.style.display = 'none';
        titleResult.style.display = '';
        resultCont1.style.display = '';
        resultCont2.style.display = '';
        volver.style.display = '';
        salir.style.display = '';
        titleResult.textContent = 'SCORE:';
        resultCont1.textContent = "Respuestas correctas:" + score;
        resultCont2.textContent = "Respuestas Incorrectas:" + (totQuestions - score);
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);