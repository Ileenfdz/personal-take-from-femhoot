
(function () {
    const myQuestions = [
        {
            question: "Hedwig Eva Maria Kiesler, known in Hollywood as Hedy Lamarr, ¿was the inventor of wifi?",
            
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "True",
            wrongAnswer: "Try again"
        },
        {
            question: "Did Jean E. Sammet​ developed the language of programming, FORMAC, in 1962?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "True",
            wrongAnswer: "Try again"
        },
        {
            question: "Mary Kenneth Keller, the first doctorate woman in computing in the US was a nun?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "True",
            wrongAnswer: "Try again"
        },

        {
            question: "Radia Joy Perlman while working for Intel, got more than 47 patents?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "True",
            wrongAnswer: "Try again"
        },
        {
            question: "For entering in Factoría F5, do you need a Miss Universe title?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "False",
            wrongAnswer: "Try again"
        },
        {
            question: "Was Evelyn Berezin remembered as the mother of word processors?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "True",
            wrongAnswer: "Try again"
        },
        {
            question: "Frances E. Allen, a pioneer in the parallel task automation and optimization of compilators never received an award",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "False",
            wrongAnswer: "Try again"
        },
        {
            question: "Ángela Ruiz Robles pioneer of the electronic book, was born in Roma?",
            answers: {
                True: "True",
                False: "False"
            },
            correctAnswer: "False",
            wrongAnswer: "Try again"
        },

    ];

    function buildQuiz() {

        const output = [];


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];
            let choice = '';


            for (choice in currentQuestion.answers) {

                answers.push(
                    `<label>
               <input type="radio" name="question${questionNumber}" value="${choice}">
                ${currentQuestion.answers[choice]}
             </label>`
                );
            }


            output.push(
                `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
            );
        });


        quizContainer.innerHTML = output.join("");
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
        youarecorrect.style.display = "none";
        youarewrong.innerHTML = '';
        youarewrong.style.display = "none";
        checkAnswerBtn.style.display = "block";
    }

    function checkAnswer() {

        const answerContainers = quizContainer.querySelectorAll(".answers");


        youarewrong.innerHTML = '';
        youarewrong.style.display = "none";


        const answerContainer = answerContainers[currentSlide];
        const selector = `input[name=question${currentSlide}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        const correctAnswer = myQuestions[currentSlide].correctAnswer;


        if (myQuestions.indexOf(currentSlide)) {
            if (userAnswer === correctAnswer) {
                youarecorrect.style.display = "block";
                checkAnswerBtn.style.display = "none";

                if (currentSlide === slides.length - 1) {
                    completed.style.display = "inline-block";
                    youarecorrect.style.display = "none";
                    checkAnswerBtn.style.display = "none";
                } else {
                    setTimeout(showNextSlide, 5000);
                }
            } else {
                youarewrong.style.display = "block";
                youarewrong.innerHTML = `${myQuestions[currentSlide].wrongAnswer}`;
            }
        }
    }

    const quizContainer = document.getElementById("quiz");


    buildQuiz();
    const completed = document.getElementById("completed");
    const youarewrong = document.getElementById("youarewrong");
    const youarecorrect = document.getElementById("youarecorrect");
    const checkAnswerBtn = document.getElementById("checkAnswerBtn");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    showSlide(0);
    checkAnswerBtn.addEventListener("click", checkAnswer);
})();









var interval;
var called = false;

$(document).on('keydown', function (e) {
    if (interval == null) {
        console.log('keydown');
        called = false;
        interval = setInterval(function () {
            doSomething(e.keyCode);
            called = true;
        }, 1000);
    }

}).on('keyup', function (e) {
    console.log('keyup');
    clearInterval(interval);
    interval = null;
    if (!called)
        doSomething(e.keyCode);
});

function doSomething(keyCode) {
    console.log(keyCode);
}

