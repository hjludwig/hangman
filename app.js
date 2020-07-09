const wordArea = document.querySelector('.word');
const submitButton = document.querySelector('.submit-button');
const userInput = document.querySelector('#user-word');
const inputForm = document.querySelector('.input');

function startPuzzle() {
    let word = userInput.value;
    inputForm.style.display = 'none';
    let lettersArray = word.split("");
    lettersArray.forEach(letter => {
        let newSpan = document.createElement('span');
        newSpan.textContent = letter;
        newSpan.classList.add('letter', 'hidden-letter');
        wordArea.appendChild(newSpan);
    });
}

submitButton.addEventListener('click', startPuzzle);

