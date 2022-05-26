# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a place holder value we put in functions that allows the developers to know what type of arguments we need to put in the function when we call it. So an argument is what we put in place of the parameter when we call the function with the data type that the parameter tells us to use. So simply put the parameter is a place holder and the argument is what the function uses in its code block. I have used parameters when creating functions and I have used arguments when I call the function I had previously created usually a preassigned variable but sometimes I fill in random values that follow the parameter to see if the function is dynamic or not.

Researched answer: The values that are declared when a function is called are known as arguments while the variabales that are defined when the function is declared or created are called parameters.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: So .map() and the two other higher order functions that we have learned so far take in three parameters which are value, index, and array. The value gives returns the value being looped over, index returns index of the value, and I believe array returns the array name being looped over. The only one that is required is the value parameter all others are optional. I have only used the value parameter when I use higher order functions especially .map because it allows me to loop over the values.

Researched answer: Yeah so value is required and gives us the value of the current element, index is optional and returns the index of the current element, and finally the array parameter is optional and returns the array of the current element.

3. What is the difference between map and filter?

Your answer: Both are are higher order functions, the only difference is map returns the same lengthed array, while filter returns a shorter array because it has conditionals built in so based on what they are deciding it returns the values that match.

Researched answer: .map creates a new array of the same length by transforming every element in the array individually, while .filter creates a new array by removing elements that dont belong or dont fit the conditions. I have used both map and filter higher order functions it allows for a cleaner and more consice code, Ill use map when I need the same lenght of array and filter when i need a conditional to return a shorter array.

4. What is the difference between a function and a method?

Your answer: Both are functions but methods are predefined and create by JavaScript creators. I have used functions when creating a specific and new code based on the question I am answering like return an array with all values multiplied by three. In that case I will create a function but I use built in methods when I want easily modify the value i am attaching it to. For example .split('') turns an a string into an array

Researched answer: Methods and functions are the same except functions are reusable code which can be called anywhhere and eliminates the need for writing the same code again and again. Functions also can pass in data and return new data based on what was entered. A method however is an object property that has a function value. Unlike the function a method only operates on the data inside a Class.

5. What is object destructuring?

Your answer: Object destructuring is creating a new variable and assigning it a path to a key inside an object. It basically reduses the amount of typing and headaches a developer could have by providing a short cut. I have used object destructuring when I needed to access a method or specific key inside of an object so i create a variable with a shorten named of the path and assign it to the path needed.

Researched answer: Destructuring is a JavaScript expression that allows us to extract data from arrays and objects and set them equal to a new distinct variable. Destructuring allows us to get multiple properties or items at one time.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance allows developers to make new classes that take the values from the parent class and basically inherit the values. We use the extends keyword to create a class inheritance, and we then use the super method which refers to the parent class. When we call the super inside of the constructor method we call the parents constructor allow the children to gain access to the parents properties.

2. React: React allows developers to create large web applications that can change data without reloading the page. The main purpose of React is to be fast, scalable, and efficient. User Interfaces that use React include Facebook. For example when you like a post on Facebook the user gets an instant respose changing the color of the button and sending a notification to the user all without reloading the page.

3. React state: The state is a built in object that is used to contain data or information about a specific component. A component can change over time whenever the user changes whats inside the component it re renders and the screen for the user changes instantly.

4. React lifecycle methods: each Reach component has a lifecycle which we can monitor in each of its three main phases. The three phases include mounting, updating, and unmounting. Mounting means putting the element into the DOM (Document Object Model), the next phase is updating when the component is updated, and finally unmounting is when the component is removed from the DOM. This all leads to an instant user repsonse.

5. DOM: The DOM or Document Object Model is a programming interface for web documents that represents how the page can change structure, style, and content depending on what the user does.
