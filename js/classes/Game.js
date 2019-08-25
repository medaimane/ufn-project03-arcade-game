class Game {
    static player = null;
    static allEnemies = [];
    static level = INITIAL_LEVEL;

    static build(numberOfEnemies = 5) {
        this.renderGameLevelNumber();
        this.player = new Player();

        let i = 0;
        while (i < numberOfEnemies) {
            this.allEnemies.push(new Enemy());
            i += 1;
        }
    }

    static reset() {
        this.level = INITIAL_LEVEL;
        this.renderGameLevelNumber();
        this.resetPlayerPosition();
        this.resetAllEnemiesPosition();
    }

    static resetPlayerPosition() {
        this.player.resetPosition();
    }

    static resetAllEnemiesPosition() {
        this.allEnemies.forEach(enemy => enemy.resetPosition());
    }

    static renderGameLevelNumber() {
        document.querySelector('.level > span').textContent = `${this.level}`;
    }

    static startNextGameLevel() {
        this.level += 1;
        this.renderGameLevelNumber();
    }
}
