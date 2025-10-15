const questions = [
  {
    question: "1. 오류가 나지 않는 변수명 2개를 고르세요.",
    type: "multiple",
    options: [
      "let $name;",
      "let my_name;",
      "let name^;",
      "let my*name;",
      "let my)name;",
    ],
    correctAnswers: [0, 1],
    explanation: "변수명에는 $와 _ 기호만 사용할 수 있습니다.",
  },
  {
    question: "2. console.log('Javascript'/10) 의 결과값은 무엇인가요?",
    type: "single",
    options: ["undefined", "NaN", "null", "0"],
    correctAnswer: 1,
    explanation:
      "문자열 'Javascript'를 10으로 나누면 NaN(Not a Number)이 나옵니다.",
  },
  {
    question:
      "3. let hi = 999999999999999999999999;\n\tconsole.log(typeof(hi)); 의 결과는?",
    type: "single",
    options: ["number", "bigint", "string", "undefined"],
    correctAnswer: 0,
    explanation:
      "JavaScript는 큰 숫자도 자동으로 number 타입으로 처리합니다. (BigInt를 만들려면 999999999999999999999999n 처럼 n을 붙여야 합니다)",
  },
  {
    question:
      '4. let IsTrue = "True";\n\tconsole.log(typeof(IsTrue)); 의 결과는?',
    type: "single",
    options: ["boolean", "string", "object", "undefined"],
    correctAnswer: 1,
    explanation: "따옴표로 감싸져 있으므로 문자열(string) 타입입니다.",
  },
  {
    question: "5. let num = null;\n\tconsole.log(typeof(num)); 의 결과는?",
    type: "single",
    options: ["null", "undefined", "object", "number"],
    correctAnswer: 2,
    explanation: "JavaScript의 버그로 typeof null은 'object'를 반환합니다.",
  },
  {
    question: "6. let num;\n\tconsole.log(typeof(num)); 의 결과는?",
    type: "single",
    options: ["null", "object", "undefined", "number"],
    correctAnswer: 2,
    explanation: "변수를 선언만 하고 값을 할당하지 않으면 undefined가 됩니다.",
  },
  {
    question:
      '7. let num1 = "15"\n\tlet num2 = 5;\n\tconsole.log(num1 / num2); 의 결과를 적으세요.',
    type: "text",
    correctAnswer: "3",
    explanation:
      "묵시적 형변환으로 문자열 '15'가 숫자로 변환되어 15 / 5 = 3이 됩니다.",
  },
  {
    question:
      '8. let num1 = "15"\n\tlet num2 = 5\n\tconsole.log(num1 + num2); 의 결과를 적으세요.',
    type: "text",
    correctAnswer: "155",
    explanation:
      "+ 연산자는 문자열 연결로 작동하여 '15' + '5' = '155'가 됩니다.",
  },
  {
    question:
      '9. let num1 = "15"\n\tlet num2 = 5에서 출력결과를 20으로 만들려면 \n\tconsole.log(ㅁnum1+num2)에서 ㅁ에 어떤 함수를 사용해야 하나요?',
    type: "single",
    options: ["String()", "Number()", "parseInt()", "toString()"],
    correctAnswer: 2,
    explanation: "parseInt('15') + 5 = 15 + 5 = 20이 됩니다.",
  },
  {
    question: `10. 다음 코드의 출력 결과를 적으세요. (필요 시 공백으로 구분)

let value = "1";

switch (value) {
  case 1:
    console.log("Number 1");
    break;
  case "1":
    console.log("String 1");
    break;
  default:
    console.log("Default");
}`,
    type: "text",
    correctAnswer: "String 1",
    explanation:
      "switch문은 엄격한 비교(===)를 사용하므로 문자열 '1'과 매칭됩니다.",
  },
  {
    question: `11. 다음 코드의 출력 결과를 적으세요. (필요 시 공백으로 구분)

let num = 2;

switch (num) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Default");
}`,
    type: "text",
    correctAnswer: "Two Three",
    explanation: "case 2에 break가 없어서 case 3까지 실행됩니다(fall-through).",
  },
  {
    question: `12. 다음 코드의 출력 결과를 적으세요. (필요 시 공백으로 구분)

let num = "5";

if (num == 5) console.log("A");
if (num === 5) console.log("B");
else console.log("C");`,
    type: "text",
    correctAnswer: "A C",
    explanation:
      "== 는 타입 변환 후 비교하여 true, === 는 타입까지 비교하여 false이므로 else문 실행됩니다.",
  },
  {
    question: `13. 다음 중 자바스크립트에서 함수를 올바르게 선언한 코드는 무엇인가요?`,
    type: "single",
    options: [
      "function = add(num1, num2) { console.log(num1 + num2); }",
      "function add(num1, num2) { console.log(num1 + num2); }",
      "func add(num1, num2) { console.log(num1 + num2); }",
      "add function(num1, num2) { console.log(num1 + num2); }",
    ],
    correctAnswer: 1,
    explanation:
      "올바른 함수 선언 방식은 function 키워드 다음에 함수명을 쓰는 것입니다.",
  },
  {
    question: `14. 다음 코드의 출력 결과를 적으세요. (필요 시 공백으로 구분)

function add(num1, num2) {
  console.log(num1 + num2);
}

add(7, 3);`,
    type: "text",
    correctAnswer: "10",
    explanation: "7 + 3 = 10이 출력됩니다.",
  },
  {
    question: `15. 다음 코드의 출력 결과를 적으세요. (필요 시 공백으로 구분)

function check(num) {
  if (num < 0) return "음수입니다.";
  if (num === 0) return "0입니다.";
  return "양수입니다.";
}

console.log(check(-5));`,
    type: "text",
    correctAnswer: "음수입니다.",
    explanation:
      "-5는 0보다 작으므로 첫 번째 조건에서 '음수입니다.'를 반환합니다.",
  },
  {
    question: `16. 다음 중 전역 스코프(Global Scope)를 갖는 변수는 무엇인가요?

let num = 100;

function show() {
  let message = "Hello";
  console.log(message);
}`,
    type: "single",
    options: [
      "num",
      "message",
      "show 함수 내부의 모든 변수",
      "num과 message 모두",
    ],
    correctAnswer: 0,
    explanation:
      "num은 함수 밖에서 선언되어 전역 스코프를 가지며, message는 함수 내부에서 선언되어 지역 스코프를 가집니다.",
  },
  {
    question: `17. 다음 코드의 출력 결과를 적으세요. (공백으로 구분)

let num = 5;

function show() {
  let num = 10;
  console.log(num);
}

show();
console.log(num);`,
    type: "text",
    correctAnswer: "10 5",
    explanation:
      "함수 내부의 num은 지역 변수로 10이 출력되고, 함수 외부의 num은 전역 변수로 5가 출력됩니다.",
  },
];

let currentQuestionIndex = 0;
let userAnswers = [];

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const finalScoreEl = document.getElementById("final-score");
const resultDetailsEl = document.getElementById("result-details");

totalQuestionsEl.textContent = questions.length;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;
  currentQuestionEl.textContent = currentQuestionIndex + 1;

  optionsContainer.innerHTML = "";

  if (question.type === "single") {
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option";
      button.textContent = option;
      button.onclick = () => selectSingleOption(index);

      if (userAnswers[currentQuestionIndex] === index) {
        button.classList.add("selected");
      }

      optionsContainer.appendChild(button);
    });
  } else if (question.type === "multiple") {
    const checkboxGroup = document.createElement("div");
    checkboxGroup.className = "checkbox-group";

    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "checkbox-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = index;
      checkbox.onchange = () => selectMultipleOption(index);

      if (
        userAnswers[currentQuestionIndex] &&
        userAnswers[currentQuestionIndex].includes(index)
      ) {
        checkbox.checked = true;
        label.classList.add("selected");
      }

      const text = document.createElement("span");
      text.textContent = option;

      label.appendChild(checkbox);
      label.appendChild(text);
      checkboxGroup.appendChild(label);
    });

    optionsContainer.appendChild(checkboxGroup);
  } else if (question.type === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "input-answer";
    input.placeholder = "답을 입력하세요";

    if (userAnswers[currentQuestionIndex]) {
      input.value = userAnswers[currentQuestionIndex];
    }

    input.oninput = (e) => {
      userAnswers[currentQuestionIndex] = e.target.value;
    };

    optionsContainer.appendChild(input);
  }

  updateNavigationButtons();
}

function selectSingleOption(index) {
  userAnswers[currentQuestionIndex] = index;

  const options = document.querySelectorAll(".option");
  options.forEach((option, i) => {
    option.classList.remove("selected");
    if (i === index) {
      option.classList.add("selected");
    }
  });
}

function selectMultipleOption(index) {
  if (!userAnswers[currentQuestionIndex]) {
    userAnswers[currentQuestionIndex] = [];
  }

  const answerArray = userAnswers[currentQuestionIndex];
  const indexPos = answerArray.indexOf(index);

  if (indexPos > -1) {
    answerArray.splice(indexPos, 1);
  } else {
    answerArray.push(index);
  }

  const labels = document.querySelectorAll(".checkbox-option");
  labels[index].classList.toggle("selected");
}

function checkAnswer(questionIndex) {
  const question = questions[questionIndex];
  const userAnswer = userAnswers[questionIndex];
  let isCorrect = false;

  if (question.type === "single") {
    isCorrect = userAnswer === question.correctAnswer;
  } else if (question.type === "multiple") {
    if (userAnswer && userAnswer.length === question.correctAnswers.length) {
      isCorrect = question.correctAnswers.every((ans) =>
        userAnswer.includes(ans)
      );
    }
  } else if (question.type === "text") {
    if (!userAnswer) return false;
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = question.correctAnswer.toLowerCase();
    isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
  }

  return isCorrect;
}

function getAnswerText(questionIndex) {
  const question = questions[questionIndex];
  const userAnswer = userAnswers[questionIndex];

  if (question.type === "single") {
    return userAnswer !== undefined
      ? question.options[userAnswer]
      : "답변 없음";
  } else if (question.type === "multiple") {
    if (!userAnswer || userAnswer.length === 0) return "답변 없음";
    return userAnswer.map((idx) => question.options[idx]).join(", ");
  } else if (question.type === "text") {
    return userAnswer || "답변 없음";
  }
}

function getCorrectAnswerText(questionIndex) {
  const question = questions[questionIndex];

  if (question.type === "single") {
    return question.options[question.correctAnswer];
  } else if (question.type === "multiple") {
    return question.correctAnswers
      .map((idx) => question.options[idx])
      .join(", ");
  } else if (question.type === "text") {
    return question.correctAnswer;
  }
}

function updateNavigationButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "결과 보기";
  } else {
    nextBtn.textContent = "다음";
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function showResults() {
  quizContainer.classList.add("hidden");
  document.querySelector(".navigation").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  let score = 0;
  resultDetailsEl.innerHTML = "";

  questions.forEach((question, index) => {
    const isCorrect = checkAnswer(index);
    if (isCorrect) score++;

    const resultItem = document.createElement("div");
    resultItem.className = `result-item ${isCorrect ? "correct" : "incorrect"}`;

    const header = document.createElement("div");
    header.className = "result-item-header";

    const questionNumber = document.createElement("div");
    questionNumber.className = "result-item-number";
    questionNumber.textContent = `문제 ${index + 1}`;

    const badge = document.createElement("div");
    badge.className = `result-badge ${isCorrect ? "correct" : "incorrect"}`;
    badge.textContent = isCorrect ? "정답" : "오답";

    header.appendChild(questionNumber);
    header.appendChild(badge);

    const questionEl = document.createElement("div");
    questionEl.className = "result-question";
    questionEl.textContent = question.question;

    const yourAnswerEl = document.createElement("div");
    yourAnswerEl.className = "result-answer";
    yourAnswerEl.innerHTML = `
            <div class="result-answer-label result-your-answer">내 답변:</div>
            <div>${getAnswerText(index)}</div>
        `;

    const correctAnswerEl = document.createElement("div");
    correctAnswerEl.className = "result-answer";
    correctAnswerEl.innerHTML = `
            <div class="result-answer-label result-correct-answer">정답:</div>
            <div>${getCorrectAnswerText(index)}</div>
        `;

    const explanationEl = document.createElement("div");
    explanationEl.className = "result-explanation";
    explanationEl.textContent = `해설: ${question.explanation}`;

    resultItem.appendChild(header);
    resultItem.appendChild(questionEl);
    resultItem.appendChild(yourAnswerEl);
    if (!isCorrect) {
      resultItem.appendChild(correctAnswerEl);
    }
    resultItem.appendChild(explanationEl);

    resultDetailsEl.appendChild(resultItem);
  });

  finalScoreEl.textContent = score;
}

nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);

loadQuestion();
