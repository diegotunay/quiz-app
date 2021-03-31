const quizData = [
    {
        question:'In the pilot episode, what would Ash`s pokemon be?',
        a: 'Clefairy',
        b: 'Pikachu',
        c: 'Bulbasaur',
        d: 'Charmander',
        correct: 'a',
    }, {
        question: 'In the anime series"Full Metal Alchermist", what do Alchemists consider the greatest taboo?',
        a: 'Human Sacriffice',
        b: 'Human Transmutation',
        c: 'Transmutting lead into golg',
        d: 'Homunculi',
        correct: 'b',
    }, {
        question: 'In "One Piece",what does "the Pirate King" mean to the captain of the Straw Hat Pirates?',
        a: 'Fortune',
        b: 'Power',
        c: 'Courage',
        d: 'Freedom',
        correct: 'd',
    }, {
        question: 'What sport is being played in the Anime Eyeshield 21?',
        a: 'American Football',
        b: 'Golf',
        c: 'Tennis',
        d: 'Soccer',
        correct: 'a',
    }, {
        question: 'In what year did the manga "Ping Pong" begin serialization?',
        a: '1994',
        b: '1995',
        c: '1996',
        d: 'none of the above',
        correct: 'c',
   
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;
   
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        quiz.innerHTML = ` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
    }
}
});