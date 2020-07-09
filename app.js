const wordArea = document.querySelector('.word');
const submitButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#user-word');
const inputForm = document.querySelector('.input');
const wrongGuessArea = document.querySelectorAll('.wrong-guesses');

function startPuzzle() {
    let word = userInput.value;
    inputForm.style.display = 'none';
    let lettersArray = word.split("");

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
        
        function runTest() {
            lettersInPlay.forEach(letter => {
                if (letter.textContent === guess) {
                    letter.classList.remove('hidden-letter');
                }
            });
        }
        runTest();
    }
}


submitButton.addEventListener('click', startPuzzle);



