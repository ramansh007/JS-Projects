const quizData = [
  {
    question: 'How old is Ramansh ?',
    a: '12',
    b: '28',
    c: '20',
    d: '21',
    correct: 'c',
  },

  {
    question: 'What is Ramansh favourite dish ?',
    a: 'Rajma Chawal',
    b: 'Chhole Bhature',
    c: 'Dosa',
    d: 'Maggi',
    correct: 'b',
  },

  {
    question: 'What is Ramansh favourite color ?',
    a: 'Blue',
    b: 'Red',
    c: 'Voilet',
    d: 'Green',
    correct: 'a',
  },
  {
    question: 'Name one thing I like the most ?',
    a: 'Anime',
    b: 'You',
    c: 'Netflix',
    d: 'Gym',
    correct: 'b',
  },
  {
    question: 'When is Ramansh Birthday ?',
    a: '7 sep',
    b: '8 sep',
    c: '10 oct',
    d: '12 dec',
    correct: 'a',
  },
];
const quizz = document.getElementById('quizz');
const questionel = document.getElementById('questions');
const answersEl = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitel = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionel.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function gotSelected() {
  let answer = undefined;

  answersEl.forEach((answerE) => {
    if (answerE.checked) {
      answer = answerE.id;
    }
  });

  return answer;
}

function deSelectAnswers() {
  answersEl.forEach((answerE) => {
    answerE.checked = false;
  });
}

submitel.addEventListener('click', () => {
  //  check to see the aanswer

  const answer = gotSelected();

  if (answer) {
    if (answer == quizData[currentQuestion].correct) {
      score++;
    }
    console.log(answer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quizz.innerHTML = `<h2>  YOU ANSWERED CORRECTLY AT ${score}/${quizData.length} QUESTIONS</h2>
      <button onclick='location.reload()'>RELOAD</button>`;
    }
  }
});
