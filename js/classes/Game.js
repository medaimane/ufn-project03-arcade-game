class Game {
    static player = null;
    static allEnemies = [];
    static level = INITIAL_LEVEL;

    static build(numberOfEnemies = 5) {
        this.player = new Player();

        let i = 0;
        while (i < numberOfEnemies) {
            this.allEnemies.push(new Enemy());
            i += 1;
        }
    }

    static reset() {
        this.resetPlayerPosition();
        this.resetAllEnemiesPosition();
    }

    static resetPlayerPosition() {
        this.player.resetPosition();
    }

    static resetAllEnemiesPosition() {
        this.allEnemies.forEach(enemy => enemy.resetPosition());
    }
}
