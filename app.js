// //question 1
// let user_input = +prompt("enter a number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");




// //question 2
// let user_input = +prompt("enter negative number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");




// //question 3
// let user_input = +prompt("enter number");
// if(user_input < 0){
// document.write("absolute value is: "+(-1)*(user_input));
// }
// else{
//     document.write("absolute value is: "(user_input));
// }





// // //question 4
// let random = Math.round(Math.random()*100);
// document.write("random value of dice: "+random)



// //question 5
// let random = Math.round(Math.random(1,3));
// if(random === 0){
//     random = 1;
// }
// else if(random === 2){
//     document.write(random + "<br>" + "random coin value: heads")
// }
// else if(random === 1){
//     document.write(random + "<br>" + "random coin value: tails")
// }





// //question 6
// document.write("random no between 1 and 100 is: "+ Math.round(Math.random()*100))



// //question 7
// let number = Math.round(Math.random()*10);

// let a = prompt("enter a numer! lets see if you guess on first try");

// a = Number.parseInt(a);
// let s = 1;
// while (a != number){
//     if (a > number){
//         alert("your number is greater try guessing a smaller one!")
//     }
//     else if (a < number){
//         alert("your number is smaller try guessing a bigger one!")
//     }
//     a = prompt("enter no once again , hope you'll grt it right this time ")
//     s = s+1;
// }

// alert("wow , you guessed it right on " + s +" try")


//question 8
// Generate a random secret number between 1 and 10
//const secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
//const userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's input matches the secret number
//if (userInput === secretNumber) {
 // console.log("Congratulations! You guessed the secret number correctly.");
//}

 ///else {
 // console.log("Oops! The secret number was " + secretNumber + ". Better luck next time!");
//}
