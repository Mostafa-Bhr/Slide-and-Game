 
 const words = ["apple", "banana", "orange", "grape", "kiwi", "melon", "peach"];

 
 let randomIndex = Math.floor(Math.random() * words.length);
 let chosenWord = words[randomIndex];

 
 let guessedLetters = [];

 
 let displayWord = [];
 for (let i = 0; i < chosenWord.length; i++) {
     displayWord.push("_");
 }
 document.getElementById("wordContainer").innerText = displayWord.join(" ");

 
 function checkLetter() {
     let letter = document.getElementById("letterInput").value.toLowerCase();
     if (letter.length !== 1 || !(/[a-zA-Z]/).test(letter)) {
         document.getElementById("message").innerText = "Please enter a single letter.";
         return;
     }
     if (guessedLetters.includes(letter)) {
         document.getElementById("message").innerText = "You already guessed this letter.";
         return;
     }
     guessedLetters.push(letter);
     let found = false;
     for (let i = 0; i < chosenWord.length; i++) {
         if (chosenWord[i] === letter) {
             displayWord[i] = letter;
             found = true;
         }
     }
     document.getElementById("wordContainer").innerText = displayWord.join(" ");
     if (!displayWord.includes("_")) {
         document.getElementById("message").innerText = "Congratulations! You guessed the word!";
     } else if (!found) {
         document.getElementById("message").innerText = "Incorrect guess. Try again.";
     } else {
         document.getElementById("message").innerText = "Correct guess! Keep going.";
     }
     document.getElementById("letterInput").value = "";
 }