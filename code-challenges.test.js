// ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// const { readdir } = require("fs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe('div3', () => {
    it('decides if the number is evenly divisble by three or not.', () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(div3(num1)).toEqual("15 is divisible by three")
        expect(div3(num2)).toEqual("0 is divisible by three")
        expect(div3(num3)).toEqual("-7 is not divisible by three")
    })
})

// I GOT RED!!! 
// ● div3 › decides if the number is evenly divisble by three or not.

//     ReferenceError: div3 is not defined


// b) Create the function that makes the test pass.

// Psuedo Code
    //Create a function named div3
        //It takes a number as an argument 
    //It decides if the number is evenly divisble by 3 
        //Using a conditional if statement 
            //It will decide if the number is divisible by three using % 
                //If yes it will return  "The number is divisible by three"
                    //I will put the number in using string interpolation 
                //If it is not divisible by 3 it will return "The number is not divisible by three"

const div3 = (number) => {
        if (number % 3 === 0){
            return `${number} is divisible by three`
        } else {
            return `${number} is not divisible by three`
        }
}

//I GOT GREEN
// PASS  ./code-challenges.test.js
// div3
//   ✓ decides if the number is evenly divisble by three or not. (3 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.



describe('capitalize', () => {
    it('returns an array with all the words capitalized.', () =>{
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

    })
})

// I GOT RED!!
// ● capitalize › returns an array with all the words capitalized.

//     ReferenceError: capitalize is not defined

// b) Create the function that makes the test pass.

// Psuedo Code
//Create a function named capitalize
    //It will take an argument of an array with strings in it 
//I need to iterate through the array to access each indexs value
    //I will use a higher order function .map that allows me to shorten my code 
//Once i have iterated through the array i need to access the first letter of each string in the array so i can capitalize it
    //to do that i use charAt which allows use to isolate a specific index of each string in this case its the first one so we use 0 as an argument
    //Once the first letter is isolated i capitalize it using the built in method .toUpperCase
//Now we have to put the strings back together so i use another built in method .slice which allows me to piece the string back together exactly where i want to 
    //So in this case we add the first uppercased letter back to the original string 

const capitalize = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

//I GOT GREEN!!
// PASS  ./code-challenges.test.js
//   div3
//     ✓ decides if the number is evenly divisble by three or not. (3 ms)
//   capitalize
//     ✓ returns an array with all the words capitalized. (1 ms)







// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe('vowel', () => {
    it('returns the index of the first vowel.', () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(vowel(vowelTester1)).toEqual(1)
        expect(vowel(vowelTester2)).toEqual(0)
        expect(vowel(vowelTester3)).toEqual(2)
    })
})

// IT GOT RED 
// ● vowel › returns the index of the first vowel.

//     ReferenceError: vowel is not defined

// b) Create the function that makes the test pass.

// Psuedo Code
//Create a function named vowel that takes a string argument 
// I then need to iterate through each letter of the string 
    //I do that using a for loop beginning at index 0 and going until it reaches the end length of the string inputted
//I then use a conditional to decide if the letters being looped over are vowels
    //I used charAt(i) to decide if the letter being picked was a vowel setting it strictly equal to a,e,i,o,u all split up by ORs
//I then set a variable named numIndex equal too the first vowel chosen
// return the index of the first value picked

const vowel = (string) => {
    for(let i=0; i<string.length; i++){
        if(string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u'){
            var numIndex = string.charAt(i)
            return string.indexOf(numIndex)
        }
    }
}

//I GOT GREEN
// PASS  ./code-challenges.test.js
// div3
//   ✓ decides if the number is evenly divisble by three or not. (2 ms)
// capitalize
//   ✓ returns an array with all the words capitalized. (1 ms)
// vowel
//   ✓ returns the index of the first vowel. (1 ms)
