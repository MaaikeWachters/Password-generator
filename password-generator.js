// TO DO
// on click copy password; hint: use input type text to display the password options
// choose length of password

let characters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
];
let buttonEl1 = document.getElementById("button-el-1");
let buttonEl2 = document.getElementById("button-el-2");
let buttonEl3 = document.getElementById("button-el-3");
let buttonEl4 = document.getElementById("button-el-4");

function generatePasswords() {
  let password1 = "";
  for (let i = 0; i < 24; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    console.log(password1);
  }
  buttonEl1.textContent = password1;

  let password2 = "";
  for (let i = 0; i < 24; i++) {
    password2 += characters[Math.floor(Math.random() * characters.length)];
    console.log(password2);
  }
  buttonEl2.textContent = password2;

  let password3 = "";
  for (let i = 0; i < 5; i++) {
    password3 += characters[Math.floor(Math.random() * characters.length)];
    console.log(password3);
  }
  buttonEl3.textContent = password3;

  let password4 = "";
  for (let i = 0; i < 5; i++) {
    password4 += characters[Math.floor(Math.random() * characters.length)];
    console.log(password4);
  }
  buttonEl4.textContent = password4;
}
