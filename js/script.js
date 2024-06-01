const adjectives = [
    { base: 'fast', superlative: 'the fastest' },
    { base: 'strong', superlative: 'the strongest' },
    { base: 'happy', superlative: 'the happiest' },
    { base: 'intelligent', superlative: 'the most intelligent' },
    { base: 'beautiful', superlative: 'the most beautiful' },
    { base: 'good', superlative: 'the best' },
    { base: 'bad', superlative: 'the worst' }
];

let currentCard = 0;
let score = 0;
let questionsAsked = 0;
const totalQuestions = 5;

function nextCard() {
    if (questionsAsked >= totalQuestions) {
        endGame();
        return;
    }

    currentCard = Math.floor(Math.random() * adjectives.length);
    document.getElementById('adjective-card').innerText = adjectives[currentCard].base;
    document.getElementById('user-input').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('submit-button').disabled = false;
    questionsAsked++;
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    const correctAnswer = adjectives[currentCard].superlative.toLowerCase();

    if (userInput === correctAnswer) {
        document.getElementById('feedback').innerText = 'Correct!';
        score++;
    } else {
        document.getElementById('feedback').innerText = `Incorrect! The correct answer is "${adjectives[currentCard].superlative}".`;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('submit-button').disabled = true;
}

function endGame() {
    let endMessage = `Game Over! Your final score is ${score}.`;
    if (score === totalQuestions) {
        endMessage += ' Congratulations, you answered all questions correctly!';
    } else {
        endMessage += ' Better luck next time!';
    }
    document.getElementById('card-container').innerText = endMessage;
    document.getElementById('user-input').style.display = 'none';
    document.getElementById('submit-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('play-again-button').style.display = 'inline-block';
}

function resetGame() {
    score = 0;
    questionsAsked = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('user-input').style.display = 'inline-block';
    document.getElementById('submit-button').style.display = 'inline-block';
    document.getElementById('next-button').style.display = 'inline-block';
    document.getElementById('play-again-button').style.display = 'none';
    document.getElementById('card-container').innerHTML = '<p id="adjective-card"></p>';
    nextCard();
}
nextCard();