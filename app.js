const wordArea = document.querySelector('.word');
const submitButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#user-word');
const inputForm = document.querySelector('.input');
const wrongGuessArea = document.querySelector('.wrong-guesses');



function startPuzzle() {
    let word = userInput.value;
    inputForm.style.display = 'none';
    let lettersArray = word.split("");
    let lettersGuessed = [];

    // Add letters to word area
    lettersArray.forEach(letter => {
        let newSpan = document.createElement('span');
        newSpan.textContent = letter;
        newSpan.classList.add('letter', 'hidden-letter');
        wordArea.appendChild(newSpan);
    });
    // Start testing the letters
    document.addEventListener('keydown', testLetterGuess);

    function testLetterGuess(event) {
        let guess = event.key;
        let lettersInPlay = document.querySelectorAll('.letter');

        let tester = false;


        function runTest() {
            // Check if guess has already been guessed
            if (lettersGuessed.indexOf(guess) != -1) {
                alert("You've already tried that one.");
            }
            else {
                lettersInPlay.forEach(letter => {
                    if (letter.textContent === guess) {
                        letter.classList.remove('hidden-letter');
                        tester = true;
                    }
                });
                if (tester === false) {
                    let wrongLetter = document.createElement('span');
                    wrongLetter.textContent = guess;
                    wrongLetter.classList.add('wrong-letter')
                    wrongGuessArea.appendChild(wrongLetter);
                }
            }

        }
        console.log(lettersGuessed);
        runTest();
        lettersGuessed.push(guess);
    }
}
submitButton.addEventListener('click', startPuzzle);



