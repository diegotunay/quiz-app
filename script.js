const quizData = [
    {
        question:'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScrip',
        correct: 'd'
    }, {
        question: 'Who is he President of Us?',
        a: 'Tom Brad',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'Ivan Saldano',
        correct: 'b'
    }, {
        question: 'What does HTML satand for?',
        a: 'Hypertext Markup Language',
        b: 'Casding Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals',
        correct: 'a'
    }, {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1997',
        c: '1998',
        d: 'none of the above',
        correct: 'd'
   
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const d_text = document.getElementById('b_text');
const b_text = document.getElementById('c_text');
const c_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll('answer');
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            return answerEl.id;
        }
    });

    return undefined;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    const answer = getSelected();

    if(answer){
        if(currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        // TODO: show results
        alert('YOU FINISHED!')
    }
}
});