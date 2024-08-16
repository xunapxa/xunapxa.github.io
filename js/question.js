// data.js 파일에서 const question = [] 만 가져옴

import {questions} from './data.js'

// console.log(questions);

// progress Bar의 노란색 value를 선택
const progressValueEL = 
    document.querySelector('.progress .value');
const numberEL = 
    document.querySelector('.number')
const questionEL =
    document.querySelector('.question')
const choice1EL =
    document.querySelector('.choice1')
const choice2EL =
    document.querySelector('.choice2')

let currentNumber = 0;
let mbti = '';
let question = ''

question = questions[currentNumber];

function rederQuestion() {
question = questions[currentNumber];
numberEL.innerHTML = question.number
questionEL.innerHTML = question.question
choice1EL.innerHTML = question.choices[0].text
choice2EL.innerHTML = question.choices[1].text
progressValueEL.style.width = 
    (currentNumber +1) * 10 + "%";
}

rederQuestion()

//버튼 클릭 시 이벤트 발생 인식
choice1EL.addEventListener('click',function(){nextQuestion(0)})
choice2EL.addEventListener('click',function(){nextQuestion(1)})

function nextQuestion(choiceNumber) {
    mbti = mbti + question.choices[choiceNumber].value
    console.log(mbti)
    if (currentNumber === questions.length - 1) {
        location.href = './result.html?mbti=' + mbti;
    }
    currentNumber = currentNumber + 1 ;
    rederQuestion()
}

