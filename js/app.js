const startApp = () => {
    Game.build();

    document.addEventListener('keyup', e => {
        Game.player.handleInput(allowedKeys[e.key]);
    });
};

startApp();
