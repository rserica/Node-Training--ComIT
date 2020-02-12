// Exercise 150
// Create a new index150.js
// Define a deepThought variable and assign a literal object with the following properties:
// property: name, value: Deep Thought
// property: answerToTheUltimateQuestionOfLife, value: assign a function
// The answerToTheUltimateQuestionOfLife method will show 42 as output
// Call the deepThought answerToTheUltimateQuestionOfLife method to know the best answer ever!!


let deepThought = {
  name: "Deep Thought",
  answerToTheUltimateQuestionOfLife: function (){
    return 42;
  },
}

console.log("Which is the answer for everything and so long?");
console.log(deepThought.answerToTheUltimateQuestionOfLife());
