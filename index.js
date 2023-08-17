// THE APPALCATION!
// The Dom (Document Object Model) aka how you use Javascript to modify a website. 

// camalCase
let countEl = document.getElementById("counter-el"); // passing an arugument
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    let saveEntries =  count + " - ";
    saveEl.innerHTML += saveEntries;
    countEl.textContent = 0;
    count = 0;
}

// ----------------------------------------------------------------
// PRATICE
// create a variable, messageToUser, that contains the message we have logged
// let userName = "per"
// let message = "You have a tree new notifications"

// let messageToUser = message + ", " + userName + "!";

// ----------------------------------------------------------------
// Create two variables name and greeting. The name variable should store your name,
// and greeting should store e.g. "Hi, my name is "

// Create a thrid variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let userName = "Corbyn"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + userName;

// ----------------------------------------------------------------
// Grab the welcome-el pargraph and store it in a variable called welcome-el

// create two varibables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message useing welcomeEl.innertext

// let welcomeEl = document.getElementById("welcome-el");
// let Name = "Corbyn";
// let greeting = "Welcome Back";

// welcomeEl.innerText = greeting + " " + Name;

// welcomeEl.innerText += "😅";
