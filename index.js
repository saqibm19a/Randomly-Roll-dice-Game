function rollDice() {
    let diceImages = [
        'Image/dice (1).jpg',
        'Image/dice (2).jpg',
        'Image/dice (3).jpg',
        'Image/dice (4).jpg',
        'Image/dice (5).jpg',
        'Image/dice (6).jpg'
    ];

    var randomIndex = Math.floor(Math.random() * diceImages.length);
    var randomDiceImage = diceImages[randomIndex];

    document.getElementById('diceImage').src = randomDiceImage;
}
















// ASSIGNMENT IN JS
// PROFESSOR 