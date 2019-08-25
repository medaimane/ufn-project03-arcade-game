class Enemy {
    constructor(level = INITIAL_LEVEL) {
        this.sprite = sprites.enemyBug;
        this.positionX = this.getRandomPositionX();
        this.positionY = this.getRandomPositionY();
        this.speed = this.getSpeed(level);
    }

    // Update the enemy's position,
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.updatePositionXBy(dt);

        // Refresh enemy
        if (this.positionX > gameDimension.WIDTH) {
            this.refreshEnemy();
        }

        // Check if enemy hit player
        if (this.isHitPlayerPosition()) {
            Game.reset();
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }

    isHitPlayerPosition() {
        const {player} = Game;
        return this.isHitPlayerPositionX(player) && this.isHitPlayerPositionY(player);
    }

    isHitPlayerPositionX(player) {
        return this.positionX > player.positionX - PLAYER_COLLISION_ZONE && this.positionX < player.positionX + PLAYER_COLLISION_ZONE;
    }

    isHitPlayerPositionY(player) {
        return this.positionY > player.positionY - PLAYER_COLLISION_ZONE && this.positionY < player.positionY + PLAYER_COLLISION_ZONE;
    }

    refreshEnemy() {
        this.positionX = this.getRandomPositionX(false);
        this.positionY = this.getRandomPositionY();

        // Update enemy speed to a random value by level to increase difficulty
        this.speed = this.getSpeed(Game.level);
    }

    updatePositionXBy(dt) {
        this.positionX = this.positionX + (this.speed * dt)
    }

    getRandomPositionY() {
        const somePositions = [41.5, 124.5, 207.5];
        const index = Math.floor(Math.random() * somePositions.length);
        return somePositions[index];
    }

    getRandomPositionX(isStartGame = true) {
        return isStartGame ? Math.floor((Math.random() * gameDimension.WIDTH) + -90) : -90;
    }

    getSpeed(level) {
        return Math.floor((Math.random() * 30) + 10) * level;
    }

    resetPosition() {
        this.positionY = this.getRandomPositionY();
        this.positionX = this.getRandomPositionX(true);
    }
}
