const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// MATHEUS, ABAIXO 4 QUESTÕES. PELO QUE VI, ELAS APARECEM DE FORMA ALEATÓRIA.

const questions = [
  {
    question: 'What is 2 + 2?', // AQUI VEM O TEXTO DA PERGUNTA...
    answers: [ // E AQUI, AS OPÇÕES DE RESPOSTA.
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true }, // A RESPOSTA CERTA VEM COM O "TRUE"; AS OUTRAS DEVEM VIR COM O "FALSE".
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true }, // SE MAIS DE UMA RESPOSTA VIER COM O "TRUE", É PORQUE MAIS DE UMA DELAS ESTÁ CERTA.
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },  
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]