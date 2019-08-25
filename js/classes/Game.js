class Game {
    static player = null;
    static allEnemies = [];
    static level = INITIAL_LEVEL;
    static score = 0;

    static build(numberOfEnemies = 5) {
        this.renderLevelNumber();
        this.renderScore();

        this.player = new Player();

        let i = 0;
        while (i < numberOfEnemies) {
            this.allEnemies.push(new Enemy());
            i += 1;
        }
    }

    static reset() {
        this.level = INITIAL_LEVEL;
        this.score = 0;
        this.renderLevelNumber();
        this.renderScore();
        this.resetPlayerPosition();
        this.resetAllEnemiesPosition();
    }

    static resetPlayerPosition() {
        this.player.resetPosition();
    }

    static resetAllEnemiesPosition() {
        this.allEnemies.forEach(enemy => enemy.resetPosition());
    }

    static renderLevelNumber() {
        document.querySelector('.level > span').textContent = `${this.level}`;
    }

    static renderScore() {
        document.querySelector('.score > span').textContent = `${this.score}`;
    }

    static startNextLevel() {
        this.level += 1;
        this.score += 10 * this.level;
        this.renderLevelNumber();
        this.renderScore();
    }
}
