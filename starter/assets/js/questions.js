document.addEventListener("DOMContentLoaded", function () {
// define variables for all required DOM nodes
var timerEl = document.getElementById('time');
var startScreenEl = document.getElementById('start-screen');
var StartBtn = document.getElementById('start');
var questions = document.getElementById('question');
var questionTitleElement = document.getElementById('question-title');
var questionsChoices = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var finalScoreEl = document.getElementById('final-score');
var initialInput = document.getElementById('initals');
var submitBtn = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');

// Create an Array for Questions:

// Start by creating an array to store all the questions for your quiz. Each element in the array represents a question.

// Each question can be an object containing properties like questionText, answerChoices, and correctAnswer. For example:
const questions = [
    {
        // Each element in the 'questions' array is an object representing a question.

        questionText: "What does HTML stand for?",
        // 'questionText' property stores the text of the question.

        answerChoices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language", "Hyper Transfer Protocol"
        ],
        // 'answerChoices' property is an array that holds the available answer options for this question.
        // there are four possible answers.

        correctAnswer: 0 // Index of the correct answer in the answerChoices array
        // 'correctAnswer' property specifies the index of the correct answer within the 'answerChoices' array.
        // In this case, the correct answer is "Hyper Text Markup Language," which is at index 0.
    },
    {
        questionText: "Which of the following is a CSS property to change the font size?",
        answerChoices: ["font-style", "font-colour", "font-size", "font-family"],
        correctAnswer: 2
    },
    {
        questionText: "what is the result of 2 + 2 in JavaScript?",
        answerChoices: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    {
        questionText: "Which of the following is a JavaScript framework?",
        answerChoices: ["HTML", "CSS", "React", "MySQL"],
        correctAnswer: 2
    },
    {
        questionText: "What is the main purpose of a for loop in programming?",
        answerChoices: [
            "To make code look more complex",
            "To create an infinite loop",
            "To execute a block of code repeatedly",
            "To perform mathematical calculations"
        ],
        correctAnswer: 2
    }

    // You can add more question objects as needed for your quiz.
];


// Question Object Properties:

// Each question object should have the following properties:
// questionText: A string that contains the text of the question.
// answerChoices: An array of strings that represents the answer choices for the question.
// correctAnswer: An integer representing the index of the correct answer within the answerChoices array.


// Accessing Questions:

// You can access specific questions and their properties by using array indexing. For example, to access the first question's text:

const firstQuestionText = questions[0].questionText;
// This line of code creates a variable 'firstQuestionText' and assigns it the value of the 'questionText' property
// of the first question in the 'questions' array.

// The 'questions' array is an array of question objects, and you're accessing the first object (index 0) in the array.

// So, 'firstQuestionText' will contain the text of the first question in the quiz.

// Clear the "start-screen"
function startQuiz() {
    // Hide the "start-screen" element
    startScreenEl.style.display = "none";
    
    // Show the "questions" element
    questions.style.display = "block";
    
    // Other logic to start the quiz, such as displaying the first question.
    displayQuestion(currentQuestionIndex);
    
    // Start the timer when the quiz begins
    startTimer();
    }

let timer = 60; // Initial time in seconds
let timerInterval;

function startTimer() {
    // Update the timer display with the initial time
    document.getElementById("time").textContent = timer;

    // Start the countdown timer
    timerInterval = setInterval(function () {
        // Update the timer display
        document.getElementById("time").textContent = timer;

        // Check if the timer has reached 0
        if (timer <= 0) {
            // Timer has reached 0, end the quiz
            clearInterval(timerInterval);
            endQuiz();
        } else {
            // Decrement the timer by 1 second
            timer--;
        }
    }, 1000); // Update the timer every 1000 milliseconds
}

// Create a Function to Stop timer. This will clear the interval and stop the countdown
function stopTimer() {
    clearInterval(timerInterval);
}

//Start the timer when the "Start Quiz" button is clicked
document.getElementById("start").addEventListener("click", function () {
    startTimer();
    // Other logic to start the quiz, display questions, etc.
});



// Declare Global Variables 
// declare variables to keep track of the current question index and to store the HTML elements where questions and answer choices will be displayed.
let currentQuestionIndex = 0;
const questionTitleElement = document.getElementById("question-title");
const choicesElement = document.getElementById("choices");

// Function to Display Questions
// This function will update the HTML elements to show the question text and answer choices

function displayQuestion(index) {
    // Get the current question object from the 'questions' array
    const currentQuestion = questions[index];

    // Display the question text 
    questionTitleElement.textContent = currentQuestion.questionText;

    // Clear the previous answer choices
    choicesElement.innerHTML = "";

    // Create and append buttons for answer choices
    for (let i = 0; i < currentQuestion.answerChoices.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = currentQuestion.answerChoices[i];
        choiceButton.addEventListener("click", function () {
            handleAnswerClick(i);
        });
        choicesElement.appendChild(choiceButton);
    }

}

// Function to Handle User's Answer Click
function handleAnswerClick(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (answerIndex === currentQuestion.correctAnswer) {
        // Update the score (if needed)
    } else {
        // Subtract time (if needed)
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        //Quiz has ended
        endQuiz();
    }

}

// Start the Quiz Display the First Question
document.getElementById("start").addEventListener("click", function () {
    displayQuestion(currentQuestionIndex);
    startTimer(); // Start the timer when the quiz begins
    // Other logic to start the quiz
});

});