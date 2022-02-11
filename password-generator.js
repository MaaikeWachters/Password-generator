// TO DO
// font awesome
// generate random password
// render password 4 times
// on click copy password; hint: use input type text to display the password options
// choose length of password

let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let buttonEl = document.getElementById("button-el");
let randomPassword = generateRandomCharacters();

function generatePassword() {
  buttonEl.textContent = randomPassword;
}

function generateRandomCharacters() {
  let random = Math.floor(Math.random() * 5 + 1);
  return random;
  
}
