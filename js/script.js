var myQuestions = [
  {
    question: "De acordo com a explicação do experimento, a luz é uma:",
    answers: {
      a: 'Onda e partícula <br>',
      b: 'Uma onda <br>',
      c: 'Uma partícula <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "O Universo possui quantas dimensões?",
    answers: {
      a: '3 dimensões - duas de espaço e uma de tempo <br>',
      b: '4 dimensões - três dimensões de espaço e uma de tempo <br>',
      c: '2 dimensões - uma de espaço e uma de tempo <br><br>'
    },
    correctAnswer: 'b'
  },
  {
    question: "De acordo com o experimento da malha apresentado, como funciona a gravidade?",
    answers: {
      a: 'É uma força que puxa todos os objetos para baixo <br>',
      b: 'São partículas que puxam tudo para baixo <br>',
      c: 'É a distorção do espaço tempo que puxa tudo para baixo <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "O que é a física moderna?",
    answers: {
      a: 'É a área que estuda o comportamento de corpos que se movem próximos da velocidade da luz e corpos separados por distâncias astronômicas <br>',
      b: 'É a área que estuda objetos universais como estrelas ou planetas <br>',
      c: 'É a área que estuda o espaço <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "Quais são as três áreas que a física moderna estuda?",
    answers: {
      a: 'Astronomia, gravitação, mecânica quântica <br>',
      b: 'Teoria da relatividade, física atômica, espaço geográfico universal <br>',
      c: 'Teoria da relatividade, mecânica quântica, física atômica <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "O que é o estudo da óptica?",
    answers: {
      a: 'É a área que estuda fenômenos relacionados à luz <br>',
      b: 'É a área que estuda a visão <br>',
      c: 'É a área que estuda a luz e a visão <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "Qual é a cor formada quando mistura-se azul e amarelo?",
    answers: {
      a: 'Verde <br>',
      b: 'Roxo <br>',
      c: 'Laranja <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "Como é chamado o processo para a cor branca se transformar em tantas cores:",
    answers: {
      a: 'Decomposição das cores <br>',
      b: 'Refração das cores <br>',
      c: 'Monocromátização das cores <br><br>'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Complete a frase "Cores diferentes podem originar-se da cor branca por causa que cada cor tem ______"',
    answers: {
      a: 'sua própria angulação <br>',
      b: 'sua própria característica <br>',
      c: 'sua própria velocidade <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "Qual é a cor formada quando mistura-se vermelho e amarelo?",
    answers: {
      a: 'Verde <br>',
      b: 'Laranja <br>',
      c: 'Violeta <br><br>'
    },
    correctAnswer: 'b'
  },
  {
    question: 'Em termos físicos, o que é a "temperatura" de um corpo?',
    answers: {
      a: 'É a medida do grau de agitação das partículas do corpo <br>',
      b: 'É a medida da quantidade de calor no corpo <br>',
      c: 'É a medida de graus celsius de um corpo <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "O que é a termologia?",
    answers: {
      a: 'É o estudo da temperatura <br>',
      b: 'É o estudo do calor e da temperatura <br>',
      c: 'É o estudo do calor, da temperatura e do clima <br><br>'
    },
    correctAnswer: 'b'
  },
  {
    question: "Qual a medida térmica utilizada no Sistema Internacional de medidas?",
    answers: {
      a: 'Celsius <br>',
      b: 'Fahrenheit <br>',
      c: 'Kelvin <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "Como o calor é transmitido entre corpos?",
    answers: {
      a: 'Convecção, transmissão, toque <br>',
      b: 'Condução, convecção, irradiação <br>',
      c: 'Condução, convecção, radiação <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "O que seria o zero absoluto?",
    answers: {
      a: 'É a temperatura mínima possível do universo <br>',
      b: 'É a temperatura que após ela acontece o congelamento <br>',
      c: 'É a temperatura mínima que um corpo aguenta <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "O que a mecânica estuda?",
    answers: {
      a: 'É a área da física que estuda o movimento de corpos, havendo aplicação ou não de força <br>',
      b: 'É a área da física que estuda o movimento e o repouso de corpos, havendo aplicação ou não de força <br>',
      c: 'É a área da física que estuda o repouso de corpos, , havendo aplicação ou não de força <br><br>'
    },
    correctAnswer: 'b'
  },
  {
    question: "Quais são as três áreas da mecânica?",
    answers: {
      a: 'Clássica, relativística, quântica <br>',
      b: 'Clássica, moderna, quântica <br>',
      c: 'Quântica, atômica, relativística <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Qual foi o físico que "iniciou" o estudo da mecânica?',
    answers: {
      a: 'Albert Einstein <br>',
      b: 'Stephen Hawking <br>',
      c: 'Isaac Newton <br><br>'
    },
    correctAnswer: 'c'
  },
  {
    question: "Assinale as aplicações que a mecânica tem no nosso dia a dia",
    answers: {
      a: 'Órbitas de satélites, planetas e demais corpos celestes <br>',
      b: 'Avanço tecnológico como computadores <br>',
      c: 'Produção de alimentos <br><br>'
    },
    correctAnswer: 'a'
  },
  {
    question: "Qual a área da mecânica mais atual?",
    answers: {
      a: 'Clássica <br>',
      b: 'Relativística <br>',
      c: 'Quântica <br><br>'
    },
    correctAnswer: 'c'
  },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var newQuestionButton = document.getElementById('new-question');

// Função para selecionar 8 perguntas aleatórias
function selecionarPerguntasAleatorias(questions, numPerguntas) {
  var perguntasSelecionadas = [];
  var perguntasJaEscolhidas = new Set();

  while (perguntasSelecionadas.length < numPerguntas) {
    var indiceAleatorio = Math.floor(Math.random() * questions.length);
    if (!perguntasJaEscolhidas.has(indiceAleatorio)) {
      perguntasSelecionadas.push(questions[indiceAleatorio]);
      perguntasJaEscolhidas.add(indiceAleatorio);
    }
  }

  return perguntasSelecionadas;
}

// Função para exibir as perguntas
function mostrarPerguntas(quizContainer, perguntas) {
  var output = [];
  var answers;

  perguntas.forEach((pergunta, i) => {
    answers = [];
    for (letter in pergunta.answers) {
      answers.push(
        '<label>' +
        '<input type="radio" name="question' + i + '" value="' + letter + '">' +
        letter + ': ' +
        pergunta.answers[letter] +
        '</label>'
      );
    }

    output.push(
      '<div class="question">' + pergunta.question + '</div>' +
      '<div class="answers">' + answers.join('') + '</div>'
    );
  });

  quizContainer.innerHTML = output.join('');
}

// Função para exibir os resultados
function mostrarResultados(perguntas, quizContainer, resultsContainer) {
  var answerContainers = quizContainer.querySelectorAll('.answers');
  var numCorretas = 0;

  perguntas.forEach((pergunta, i) => {
    var respostaUsuario = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
    if (respostaUsuario === pergunta.correctAnswer) {
      answerContainers[i].style.color = 'lightgreen';
      numCorretas++;
    } else {
      answerContainers[i].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = 'Você acertou ' + numCorretas + ' de ' + perguntas.length + ' perguntas.';
}

// Função para gerar o quiz com 8 perguntas
function generateQuiz() {
  var perguntasAleatorias = selecionarPerguntasAleatorias(myQuestions, 8);
  mostrarPerguntas(quizContainer, perguntasAleatorias);

  submitButton.onclick = function () {
    mostrarResultados(perguntasAleatorias, quizContainer, resultsContainer);
  };
}

// Exibe a primeira seleção de perguntas ao carregar a página
generateQuiz();

// Botão para gerar uma nova seleção de perguntas aleatórias
newQuestionButton.onclick = function () {
  resultsContainer.innerHTML = ''; // Limpa os resultados anteriores
  generateQuiz(); // Gera uma nova seleção de perguntas
};
