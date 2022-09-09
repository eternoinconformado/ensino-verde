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

//As questões abaixo aparecem de forma aleatória

const questions = [
  {
    question: 'Sobre as vantagens das técnicas presentes na computação verde, também conhecida como TI verde, qual das alternativas abaixo não é verdadeira?', // AQUI VEM O TEXTO DA PERGUNTA...
    answers: [ // E AQUI, AS OPÇÕES DE RESPOSTA.
      { text: 'O planejamento do descarte e reciclagem de componentes eletrônicos não faz parte da TI verde.', correct: false },
      { text: 'A utilização eficiente dos recursos computacionais não influencia na sustentabilidade e preservação do meio ambiente. ', correct: true },
      { text: ' A aplicação de energias renováveis para energizar data centers, tanto em pequena escala, quanto em grande escala, está dentro do escopo da TI verde.', correct: false},
      { text: 'Em empresas, a utilização da computação em nuvem reduz o gasto energético com servidores e seus recursos computacionais, que normalmente são subutilizados.', correct: false },
    ]
  },
  {
    question: 'Sobre a utilização de fontes de energia renováveis e fontes de energia convencionais, qual das alternativas não é verdadeira?',
    answers: [
      { text: 'São consideradas energias renováveis aquelas que podem ser facilmente encontradas na natureza, cuja velocidade de reposição é maior do que a velocidade de consumo na escala de tempo humano.', correct: false },
      { text: 'A maior parte da energia utilizada no mundo provém de fontes não renováveis, ou seja, fontes convencionais, cujo uso em grande escala é uma das principais causas da mudança climática.', correct: false }, // A RESPOSTA CERTA VEM COM O "TRUE"; AS OUTRAS DEVEM VIR COM O "FALSE".
      { text: ' As fontes de energias renováveis, desde a sua implementação até o seu uso, não agridem de nenhuma forma o meio ambiente.', correct: true },
      { text: 'O Brasil possui um grande potencial para produção de energias renováveis devido a sua grande extensão territorial, possuindo diversas localizações favoráveis em diversas regiões para a implementação de hidrelétricas, parques eólicos e parques fotovoltaicos.', correct: false }
    ]
  },
  {
    question: 'O Procolo de Kyoto foi elaborado durante a Conferência das Partes III, por ação da Organização das Nações Unidas (ONU). Em qual país foi assinado o referido acordo?',
    answers: [
      { text: 'Alemanha.', correct: false }, // SE MAIS DE UMA RESPOSTA VIER COM O "TRUE", É PORQUE MAIS DE UMA DELAS ESTÁ CERTA.
      { text: 'França', correct: false},
      { text: ' Rússia', correct: false },
      { text: 'Japão', correct: true }
    ]
  },  
  {
    question: 'Sobre a utilização de componentes eletrônicos e a  computação verde no Brasil e no resto do Mundo, qual das alternativas é falsa?',
    answers: [
      { text: 'Atualmente, a rápida obsolescência dos equipamentos eletrônicos é uma das principais causas no grande aumento do lixo eletrônico.', correct: false },
      { text: 'Os componentes eletrônicos, tais como os processadores, normalmente utilizam metais pesados no seu processo de fabricação e, portanto, seu descarte inadequado pode causar diversos problemas ambientais.', correct: false },
      { text: 'Devido às leis em vigor no Brasil sobre o ciclo de vida de componentes eletrônicos, uma grande parte desses componentes são reciclados ou descartados adequadamente.', correct: true },
      { text: 'As técnicas da TI verde também influenciaram a indústria de componentes eletrônicos, afetando tanto o processo de fabricação, quanto o descarte.', correct: false }
    ]
  },
  {
    question: 'A energia solar apresenta muitos fatores positivos, como o fato de ser renovável, ocupar espaços reduzidos em comparação a outras fontes e não emitir poluentes na atmosfera. Além disso, a energia advinda dos raios solares é abundante e pode ser bastante produtiva quando devidamente aproveitada. No entanto, ela apresenta algumas desvantagens, destacando-se a:',
    answers: [
      { text: 'Baixa necessidade nas regiões de maior insolação', correct: false },
      { text: 'Os elevados custos das instalações', correct: true },
      { text: 'Inacessibilidade em lugares remotos.', correct: false},
      { text: 'Frequente necessidade de manutenção', correct: false }
    ]
  },
  {
    question: 'A vantagem para o uso da energia nuclear é:',
    answers: [
      { text: 'a necessidade nula de armazenamento de resíduos radioativos.', correct: false },
      { text: 'o menor custo quando comparado às demais fontes de energia', correct: false},
      { text: 'a baixa produção de resíduos emissores de radioatividade.', correct: false},
      { text: ' a contribuição zero para o efeito de estufa global', correct: true }
    ]
  },
  {
    question: 'As fontes não renováveis podem esgotar-se totalmente em prazos variáveis (pequeno, médio e longo prazo) de acordo com a extração, consumo e disponibilidade. Das alternativas abaixo, qual delas lista apenas fontes renováveis de energia?',
    answers: [
      { text: 'biocombustíveis, petróleo e carvão mineral.', correct: false },
      { text: 'energia solar, energia eólica e urânio.', correct: false},
      { text: 'energia hidrelétrica, energia solar e biocombustíveis.', correct: true},
      { text: 'gás natural, energia eólica e energia solar.', correct: false }
    ]
  },
  {
    question: 'O Procolo de Kyoto foi elaborado durante a Conferência das Partes III, por ação da Organização das Nações Unidas (ONU). Em qual país foi assinado o referido acordo?',
    answers: [
      { text: 'Alemanha.', correct: false },
      { text: 'França', correct: false},
      { text: 'Rússia', correct: false},
      { text: 'Japão', correct: true }
    ]
  },
  {
    question: 'O Acordo de Paris é visto como um sucessor do protocolo de Kyoto, pois tem como objetivo enfrentar as mudanças climáticas e seus impactos no mundo, em especial o aumento da temperatura observado nos últimos anos. Para este fim, é proposto a criação de mecanismos que diminuam o impacto da mudança climática. Sobre este acordo, é correto afirmar que:',
    answers: [
      { text: 'O acordo de Paris é considerado o sucessor do protocolo de Kyoto devido ao grande sucesso que a maioria dos países participantes do protocolo de Kyoto tiveram em alcançar suas metas.', correct: false },
      { text: 'Cada país participante deve seguir as metas e planos decididos pelo acordo, independente do seu contexto sócio-econômico.', correct: false},
      { text: 'O acordo de Paris foi assinado por diversos países, em que cada um desses países formularia seu próprio CND (Contribuições Nacionais Determinadas), contendo seus planos e metas para alcançar os objetivos propostos pelo acordo.', correct: true},
      { text: 'Dentre os mecanismos para combater o aumento da temperatura e a mudança climática, a mudança da matriz energética convencional para uma matriz energética predominantemente renovável não faz parte desta estratégia.', correct: false }
    ]
  },
  {
    question: 'Os efeitos das mudanças climáticas se tornaram mais perceptíveis nas últimas décadas, trazendo consequências econômicas, sociais e ambientais ao redor do mundo. Sobre a mudança climática mundial, seus efeitos e a reação mundial, é incorreto afirmar que:',
    answers: [
      { text: ' O aumento na frequência de desastres naturais e suas intensidades, bem como as mudanças de tempo fora de época, são consequências da mudança climática.', correct: false },
      { text: 'Como resposta às consequências trazidas pela mudança climática, vários países criaram tratados internacionais a fim de minimizar ou reverter essa situação, tal como o acordo de Paris, protocolo de Kyoto, COP26, etc.', correct: false},
      { text: 'A predominância de fontes de energias convencionais nas matrizes energéticas mundialmente é um dos fatores principais na mudança climática.', correct: false},
      { text: ' As temperaturas altas ou baixas fora de época e atípicas em diversos países não são consequências diretas das mudanças climáticas.', correct: true }
    ]
  }
  
]