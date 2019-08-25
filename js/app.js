const level = initialLevel;

const allEnemies = [
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy(),
];

const player = new Player();

document.addEventListener('keyup', e => {
    player.handleInput(allowedKeys[e.key]);
});
