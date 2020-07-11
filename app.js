const wordArea = document.querySelector('.word');
const submitButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#user-word');
const inputForm = document.querySelector('.input');
const wrongGuessArea = document.querySelector('.wrong-guesses');
const messageArea = document.querySelector('.message-area');

// Get hangman parts
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const leftArm = document.querySelector('.arm-l');
const rightArm = document.querySelector('.arm-r');
const leftLeg = document.querySelector('.leg-l');
const rightLeg = document.querySelector('.leg-r');

const hangmanParts = document.querySelector('.man').children;

function startPuzzle() {
    let word = userInput.value;
    inputForm.style.display = 'none';
    let lettersArray = word.split("");
    let lettersGuessed = [];
    let counter = 0;
    let correctGuesses = 0;

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
        
        messageArea.parentNode.classList.add('hidden');

        runTest();
        lettersGuessed.push(guess);

        function runTest() {
            if (lettersGuessed.indexOf(guess) != -1) {
                createMessage('You already tried that letter.', 'dismiss');
            }
            else {
                checkLetter(lettersInPlay, guess);
                checkWin();
                if (tester === false) {
                    addWrongLetter(guess);
                    
                    hangmanParts[counter].classList.add('show');
                    

                    // Check if player is out of guesses
                    if (counter === hangmanParts.length -1) {
                        createMessage('Out of guesses, you lose!', "reset");
                    } else {
                        counter++;
                    }

                }
            }
        }
        function checkLetter(puzzle, letter) {
            puzzle.forEach(puzzleLetter => {
                if (puzzleLetter.textContent === letter) {
                    puzzleLetter.classList.remove('hidden-letter');
                    tester = true;
                    correctGuesses++;
                    return tester;
                }
            });
        }
        function addWrongLetter(letter) {
            let wrongLetter = document.createElement('span');
            wrongLetter.textContent = letter;
            wrongLetter.classList.add('wrong-letter')
            wrongGuessArea.appendChild(wrongLetter);
        }
        function checkWin() {
            if (correctGuesses === lettersInPlay.length) {
                createMessage('You Win!', 'reset');
            }
        }
        function createMessage(message, buttonType) {
            if (messageArea.hasChildNodes()) {
                messageArea.childNodes.forEach( node => {
                    node.remove();
                })
            }
            let p = messageArea.appendChild( document.createElement('p'));
            p.textContent = message;
            
            let button = messageArea.appendChild( document.createElement('button'));
            button.setAttribute('type', 'button');
            button.textContent = "Okay";

            if (buttonType === 'reset') {
                button.addEventListener('click', resetGame);
            } else if (buttonType === 'dismiss') {
                button.addEventListener('click', () => {
                    messageArea.parentNode.classList.add('hidden');
                    messageArea.childNodes.forEach( node => {
                        node.remove();
                    })
                })
            }

            messageArea.parentNode.classList.remove('hidden');
        }
    }
}
submitButton.addEventListener('click', startPuzzle);

function resetGame() {
    alert("Time for a reset");
}





