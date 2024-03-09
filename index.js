function rollDice() {
    let diceImages = [
        'Image/dice (1).png',
        'Image/dice (2).png',
        'Image/dice (3).png',
        'Image/dice (4).png',
        'Image/dice (5).png',
        'Image/dice (6).png'
    ];

    var randomIndex = Math.floor(Math.random() * diceImages.length);
    var randomDiceImage = diceImages[randomIndex];

    document.getElementById('diceImage').src = randomDiceImage;
}




png








// ASSIGNMENT IN JS
// PROFESSOR 