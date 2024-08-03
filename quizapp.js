const quizdata = [
    {
        question: 'What is the output of the following code: `console.log(typeof null)`?',
        options: ['object', 'null', 'undefined', 'string'],
        answer: 'object'
    },
    {
        question: 'What is the purpose of the `this` keyword in JavaScript?',
        options: ['to refer to the global object', 'to refer to the current object', 'to refer to the parent object', 'to refer to the child object'],
        answer: 'to refer to the current object'
    },
    {
        question: 'What is the difference between `var`, `let`, and `const` in JavaScript?',
        options: ['`var` is used for global variables, `let` is used for local variables, and `const` is used for constants', '`var` is used for local variables, `let` is used for global variables, and `const` is used for constants', '`var` is used for constants, `let` is used for local variables, and `const` is used for global variables'],
        answer: '`var` is used for global variables, `let` is used for local variables, and `const` is used for constants'
    },
    {
        question: 'What is the purpose of the `async/await` syntax in JavaScript?',
        options: ['to make synchronous code asynchronous', 'to make asynchronous code synchronous', 'to improve code readability', 'to reduce code complexity'],
        answer: 'to make asynchronous code synchronous'
    },
    {
        question: 'What is the difference between `null` and `undefined` in JavaScript?',
        options: ['`null` represents an empty value, while `undefined` represents an uninitialized variable', '`null` represents an uninitialized variable, while `undefined` represents an empty value', '`null` and `undefined` are interchangeable terms'],
        answer: '`null` represents an empty value, while `undefined` represents an uninitialized variable'
    },
    {
        question: 'What is the purpose of the `JSON.stringify()` method in JavaScript?',
        options: ['to convert a JavaScript object to a JSON string', 'to convert a JSON string to a JavaScript object', 'to parse a JSON string', 'to validate a JSON string'],
        answer: 'to convert a JavaScript object to a JSON string'
    },
    {
        question: 'What is the difference between `==` and `===` in JavaScript?',
        options: ['`==` checks for value equality, while `===` checks for type equality', '`==` checks for type equality, while `===` checks for value equality', '`==` and `===` are interchangeable operators'],
        answer: '`==` checks for value equality, while `===` checks for type equality'
    },
    {
        question: 'What is the purpose of the `forEach()` method in JavaScript?',
        options: ['to iterate over an array and perform an action on each element', 'to filter an array and return a new array', 'to sort an array in ascending order', 'to reverse an array'],
        answer: 'to iterate over an array and perform an action on each element'
    },
    {
        question: 'What is the difference between `map()` and `filter()` methods in JavaScript?',
        options: ['`map()` returns a new array with transformed elements, while `filter()` returns a new array with filtered elements', '`map()` returns a new array with filtered elements, while `filter()` returns a new array with transformed elements', '`map()` and `filter()` are interchangeable methods'],
        answer: '`map()` returns a new array with transformed elements, while `filter()` returns a new array with filtered elements'
    },
    {
        question: 'What is the purpose of the `Promise` object in JavaScript?',
        options: ['to handle asynchronous operations', 'to handle synchronous operations', 'to improve code readability', 'to reduce code complexity'],
        answer: 'to handle asynchronous operations'
    }
];

let currentquestion = 0;
let marks = 0;
let timeleft = 220;
const timer = document.getElementById('time');
const timeinterval = setInterval(function() {
    timeleft--;
    timer.textContent = timeleft;

    if (timeleft <= 0) {
        clearInterval(timeinterval);
        alert('Time is over!');
    }
}, 1000);

const lenght = quizdata.length;

function loadquestion() {
    const question_conatiner = document.getElementById('question_conatiner');
    const option_container = document.getElementById('option_container');
    const number = document.getElementById('number');

    question_conatiner.innerHTML = quizdata[currentquestion].question;

    option_container.innerHTML = '';
    quizdata[currentquestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener('click', function() {
            if (option === quizdata[currentquestion].answer) {
                marks++;
            }
            nextquestion();
        });
        option_container.appendChild(button);
    });

    number.textContent = `Question ${currentquestion + 1} of ${lenght}`;
}

function nextquestion() {
    currentquestion++;
    if (currentquestion >= lenght) {
        clearInterval(timeinterval);
        alert(`Quiz over! Your score is ${marks} out of ${lenght}`);
        return;
    }
    loadquestion();
}

loadquestion();
