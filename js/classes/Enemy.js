class Enemy {
    constructor(level = INITIAL_LEVEL) {
        this.sprite = sprites.enemyBug;
        this.positionX = this.getRandomPositionX();
        this.positionY = this.getRandomPositionY();
        this.speed = this.getSpeed(level);
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }

    getRandomPositionY() {
        const positions = [41.5, 124.5, 207.5];
        const index = Math.floor(Math.random() * positions.length);
        return positions[index];
    }

    getRandomPositionX(isStartGame = true) {
        return isStartGame ? Math.floor((Math.random() * 504) + -90) : -90;
    }

    getSpeed(level) {
        return Math.floor((Math.random() * 30) + 10) * level;
    }
}
