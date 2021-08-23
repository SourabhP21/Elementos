// create variables
var availableLetters, words, answerArray, guess, lettersGuessed, lettersMatched, letters, numOfWins, wins, remainingGuesses, lives, currentWord, numLettersMatched, messages, showDestinationImg;

// create Get Elements for later access
numOfWins = document.getElementById('num-wins');
currentWordDisplay = document.getElementById('current-word');
remainingGuesses = document.getElementById('remaining-guesses');
lettersGuessedDisplay = document.getElementById('letters-guessed');
output = document.getElementById('output');
currentDestinationImage = document.getElementById('destination-picture');
countryNameDisplay = document.getElementById('country-name');


// declare variables when game starts
function setup() {
  availableLetters = "abcdefghijklmnopqrstuvwxyz";
  wins = 0;
  lives = 15;
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  // create an array of words
  words = [
    "lead",
    "hydrogen",
    "oxygen",
    "nitrogen",
    "potassium",
    "sodium",
    "silver",
    "calcium",
    "copper",
    "titanium",
    "helium",
    "fluorine",
    "magnesium",
    "aluminium",
    
  ];

  // create messages to interact with users via output.innerHTML
  messages = {
    start: 'Press any key to get started!',
    win: 'You win! I knew you could do it.',
    lose: 'Game Over!',
    correct: 'Nice going! Keep it up.',
    wrong: 'You’re on the right track. Try again.',
    guessed: 'Already guessed, please try again',
    validLetter: 'Please enter a letter from A-Z',
    congrats: "Congratulations! You've completed this word guess challenge!"
  };

}; // End setup function

// create a function to randomly choose a word with
function newWord() {
  // set values that are displayed on the browser to default
  answerArray = [];
  lettersGuessedArray = [];
  lettersGuessed = lettersMatched = '';
  numLettersMatched = 0

  numOfWins.innerHTML = wins;
  remainingGuesses.innerHTML = lives;
  lettersGuessedDisplay.innerHTML = lettersGuessedArray.join(" ");
  output.innerHTML = messages.start;

  // choose a random word 
  currentWord = words[Math.floor(Math.random() * words.length)];
  console.log("word: " + currentWord);
  console.log(words);

  // create the answer array

  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  console.log(answerArray);
  currentWordDisplay.innerHTML = answerArray.join(" ");
  gameRound();
};

/* Once the window is loaded, run setup(); and newWord(); to start game */
window.onload = setup();
window.onload = newWord();

function gameRound() {
  document.onkeyup = function () {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User guess: " + guess);

    /* Is guess a valid letter? If so carry on, else display error message
     Use indexOf() to search for 'guess' in a string. (If it returns -1, the value to search for never occurs.) */
    if (availableLetters.indexOf(guess) > -1) {
      // Has it been guessed (missed or matched) already? If so, abadon & add notice
      if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
        output.innerHTML = messages.guessed;
      } else if (currentWord.indexOf(guess) > -1) {
        // Does guess exist in current word? 

        // add letter guessed to an answer array
        for (var i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === guess) {
            answerArray[i] = guess;
            console.log("Current answerArray is " + answerArray);
            currentWordDisplay.innerHTML = answerArray.join(" ");
            output.innerHTML = messages.correct;
          }
        }

        // check if letter appears multiple time 
        for (var j = 0; j < currentWord.length; j++) {
          if (currentWord.charAt(j) === guess) {
            numLettersMatched += 1;
          }
        }

        lettersMatched += guess;
        console.log("Letters Matched: " + lettersMatched);
        if (numLettersMatched === currentWord.length) {
            // remove the word that already played out of the 'words' array
            words.splice(words.indexOf(`${currentWord}`), 1);
            replaceImg();
            showCountryName();
            wins++;
            numOfWins.innerHTML = wins;
            endGame(true);
          }

        

      } else {
        // guess doesn't exist in current word and hasn't been guessed before, add to letterGuessed, reduce lives, and update user
        lettersGuessed += guess;
        lettersGuessedArray.push(guess);
        console.log("Letters Guessed: " + lettersGuessed);
        console.log(lettersGuessedArray);
        var letterGuessedUppercase = lettersGuessedArray.map(function toUpper(item) {
          return item.toUpperCase();
        });
        lettersGuessedDisplay.innerHTML = letterGuessedUppercase.join(" ");
        output.innerHTML = messages.wrong;
        lives--;
        remainingGuesses.innerHTML = lives;
        if (lives === 0) {
          endGame(false);
        } else {
          gameRound();
          return;
        }
      }
    } else {
      output.innerHTML = messages.validLetter;
    }
  };
};

// function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// function to prompt for new game
function endGame(won) {
  if (won) {
    if (words.length == 0) {
      // Say Congrats when users have answer all the words correctly
      output.setAttribute("class", "message-congrats");
      output.innerHTML = messages.congrats;
      document.onkeyup = function () {
        /* Remove an effect from .onkeyup
        User can no longer type anything more. */
      }
    } else {
      // say You Win!
      output.innerHTML = messages.win;
      // randomly choose a new word for user to keep playing
      newWord();
    }

  } else {
    output.setAttribute("class", "message-gameover");
    console.log(capitalizeFirstLetter(currentWord));
    output.innerHTML = messages.lose + " The correct answer was " + capitalizeFirstLetter(currentWord) + ".";
    document.onkeyup = function () {
      /* Remove an effect from .onkeyup
      User can no longer type anything more. Game over! */
    }
  }
};

// replace an image to match the answer
function replaceImg() {
  showDestinationImg = currentWord;

  switch (showDestinationImg) {
      case "lead":
          console.log("Show croatia");
          var element = document.getElementById("lead");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
      break;
    case "hydrogen":
      console.log("Show argentina");
          var element = document.getElementById("hydrogen");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
          break;
    case "oxygen":
      console.log("Show japan");
          var element = document.getElementById("oxygen");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
          break;
    case "nitrogen":
      console.log("Show namibia");
          var element = document.getElementById("nitrogen");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
          break;
    case "potassium":
      console.log("Show italy");
          var element = document.getElementById("potassium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
          break;
    case "sodium":
      console.log("Show greece");
          var element = document.getElementById("sodium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;
          break;
    case "silver":
      console.log("Show australia");
          var element = document.getElementById("silver");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "calcium":
      console.log("Show malaysia");
          var element = document.getElementById("calcium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "copper":
      console.log("Show france");
          var element = document.getElementById("copper");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "titanium":
      console.log("Show seychelles");
          var element = document.getElementById("titanium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "helium":
      console.log("Show sweden");
          var element = document.getElementById("helium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "fluorine":
      console.log("Show sweden");
          var element = document.getElementById("fluorine");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "magnesium":
      console.log("Show ecuador");
          var element = document.getElementById("magnesium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
    case "aluminium":
      console.log("Show thailand");
          var element = document.getElementById("aluminium");
          var isrc = element.getAttribute("data-original");
          currentDestinationImage.src = isrc;break;
   
  }
};

// Display correct answer
function showCountryName() {
  countryName = currentWord;

  switch (countryName) {
    case "lead":
      console.log("Text lead");
      countryNameDisplay.innerHTML = 'Lead';
      break;
    case "hydrogen":
      console.log("Text hydrogen");
      countryNameDisplay.innerHTML = 'Hydrogen';
      break;
    case "oxygen":
      console.log("Text oxygen");
      countryNameDisplay.innerHTML = 'Oxygen';
      break;
    case "nitrogen":
      console.log("Text nitrogen");
      countryNameDisplay.innerHTML = 'Nitrogen';
      break;
    case "potassium":
      console.log("Text potassium");
      countryNameDisplay.innerHTML = 'Potassium';
      break;
      case "sodium":
        console.log("Text sodium");
        countryNameDisplay.innerHTML = 'Sodium';
        break;
    case "silver":
      console.log("Text silver");
      countryNameDisplay.innerHTML = 'Silver';
      break;
    case "calcium":
      console.log("Text calcium");
      countryNameDisplay.innerHTML = 'Calcium';
      break;
    case "copper":
      console.log("Text copper");
      countryNameDisplay.innerHTML = 'Copper';
      break;
    case "titanium":
      console.log("Text titanium");
      countryNameDisplay.innerHTML = 'Titanium';
      break;
    case "helium":
      console.log("Text helium");
      countryNameDisplay.innerHTML = 'Helium';
      break;
    case "fluorine":
      console.log("Text fluorine");
      countryNameDisplay.innerHTML = 'Fluorine';
      break;
    case "magnesium":
      console.log("Text magnesium");
      countryNameDisplay.innerHTML = 'Magnesium';
      break;
    case "aluminium":
      console.log("Text aluminium");
      countryNameDisplay.innerHTML = 'Aluminium';
      break;
   
  }
};

