// LOGIC OPERATORS
const age = 18;
// BASIC LOGIC (FOR RAZZMATAZZ)
if (age < 18) {
  console.log("Sorry, the door is closed");
} else {
  console.log("Come in! Free beers inside");
}

const weekDay = "Tuesday";

// === STRICT EQUALITY
// == "permissive" 😅

if (weekDay == "Friday") {
  console.log("Free beers!");
} else if (weekDay == "Wednesday") {
  console.log("Free Burgers! 🍔");
} else {
  console.log("No beers, sorry, go to Sonora and open the wallet");
}

// SWITCH STATEMENT

switch (weekDay) {
  case "Monday":
    console.log("Did you do your homework?");
    break;
  case "Tuesday":
  case "Friday":
    console.log("Negotiation day");
    break;
  case "Wednesday":
    console.log("Ping pong");
    break;
  default:
    console.log("Regular boring day");
}

// OR Operator || AND operator &&

const userAge = 30;

// LOGIC to check if the user is teenager (between 13 and 18)

if (userAge >= 13 && userAge <= 18) {
    console.log("User is a teenager");
}

if(true && true){
    console.log("Everything is true");
}

const isTeacher = false;

const isAdmin = false;

if(isTeacher || isAdmin){
    console.log("You have access to the students list");
}else{
    console.log("Sorry, you don't have access to the students list");
}


const password = "123"

const isPasswordCorrect =  password.length > 6;

console.log(isPasswordCorrect);

if(!isPasswordCorrect){
    console.log("Display an error message to the user");
}else{
    console.log("All good, send the password to the server and create the user");
}


const userNameInput = ""; // Empty strings are falsy

/*
Falsy stuff:

null
undefined
0
""
NaN
false


*/

if(userNameInput){
   console.log("Validate user input"); 
}else{
    console.log("Send an error: You forgot the username!");
}