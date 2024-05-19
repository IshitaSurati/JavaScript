const Dice = () => {
    let container = document.querySelector('.dice-container');
    let dice = document.getElementById('dice');
    let button = document.getElementById('rollButton');
    let message = document.getElementById('message');

    const rollDice = () => {
        let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        let randomIndex = Math.floor(Math.random() * 6);
        dice.textContent = diceFaces[randomIndex];
        let rolledNumber = randomIndex + 1; // Adding 1 to convert index to dice face value
        message.textContent = `You rolled a ${rolledNumber}`;
    };

    button.addEventListener('click', rollDice);
};

Dice();
