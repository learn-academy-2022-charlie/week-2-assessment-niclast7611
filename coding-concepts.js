// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
// console.log(cohort.split(""))

// a) Your answer: It should return an array of each letter in the string 
// b) Verify and explain: I was right it returned 
// [
//   'B', 'r', 'a', 'v',
//   'o', ' ', '2', '0',
//   '2', '2'
// ]
// It does this because split(" ") is a built in method that turns a string into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: It will return a string of 'Hello, LEARN Student'
// b) Verify and explain: I was wrong i totally overlooked the fact that theres no return. A function will always returned undefined if theres not a return or a console.log() but always have a return. If there was a return it wouldve returned what I mentioned above because they used string interpolation which allows the function to be dynamic and change with user input 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:It should return the array with each number multiplied by two
// b) Verify and explain: I was right it did. It throws you off because it is so refactored and condenced and its assigned to a varibale not a function but they looped through the single array using the higher order function .map() and multiplied the value by 2 and then console.log() the name of the variable


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:It should return a new array of [11, 13, 15] in a new array
// b) Verify and explain: I was right it does this because they use a higher order function .filter() that has conditionals built in so they looked to see if their were going to be any remainders if there was it would return those odd numbers into a new array. And they are odd numbers because they set the remainder NOT (!) equal to 0


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: It should return the string "JavaScript"
// b) Verify and explain: I was right it does this because you have an object called myCodingSkills and they are then using dot notation to access the array inside the object in this case it was languages. They then used bracket notations to access the indexs of the array in this case it was 0 so it returned the first index "JavaScript"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: It should return the learnStudent class with all the information that the parent has except the name would equal George.
// Learn { student: 'George', cohort: 'Bravo', year: 2022 }

// b) Verify and explain: I was right except for the name of the class it returned the Learn class not the learnStudent class. However the name is updated to George because in the constructor they put the parameter of name and in the newly declared the class they put 'George' as an argument everything else remains the same.
