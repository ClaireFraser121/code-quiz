// Create an Array for Questions:

// Start by creating an array to store all the questions for your quiz. Each element in the array represents a question.

// Each question can be an object containing properties like questionText, answerChoices, and correctAnswer. For example:


const questions = [
  {
    questionText: "What does HTML stand for?",
    answerChoices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language"],
    correctAnswer: 0 // Index of the correct answer in the answerChoices array
  },
  // Add more question objects as needed
];

// Question Object Properties:

// Each question object should have the following properties:
// questionText: A string that contains the text of the question.
// answerChoices: An array of strings that represents the answer choices for the question.
// correctAnswer: An integer representing the index of the correct answer within the answerChoices array.

// Example with Multiple Questions:

// Add more question objects to the questions array for the rest of your quiz. For example:


const questions = [
  {
    questionText: "What does HTML stand for?",
    answerChoices: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language"],
    correctAnswer: 0
  },
  {
    questionText: "Which of the following is a CSS property to change the font size?",
    answerChoices: ["font-style", "font-color", "font-size"],
    correctAnswer: 2
  },
  // Add more question objects
];