class Player {
    constructor() {
        this.sprite = sprites.charCatGirl;
        this.setInitialPosition();
    }

    setInitialPosition() {
        this.positionX = PLAYER_INITIAL_POSITION_X;
        this.positionY = PLAYER_INITIAL_POSITION_Y;
    }

    // Update the player's position,
    update(dt) {
        if (this.positionY < 0) {
            this.setInitialPosition();
            Game.startNextLevel();
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }

    handleInput(key) {
        const PLAYER_MAX_RIGHT_MOVE = 404;
        switch (key) {
            case allowedKeys.ArrowLeft: {
                console.log('left');
                if (this.positionX > 0) {
                    this.positionX -= gameDimension.TILE_WIDTH;
                }
                break;
            }

            case allowedKeys.ArrowRight: {
                console.log('right');
                if (this.positionX < PLAYER_MAX_RIGHT_MOVE) {
                    this.positionX += gameDimension.TILE_WIDTH;
                }
                break;
            }

            case allowedKeys.ArrowUp: {
                console.log('up');
                this.positionY -= gameDimension.TILE_HEIGHT;
                break;
            }

            case allowedKeys.ArrowDown: {
                console.log('down');
                if (this.positionY < PLAYER_INITIAL_POSITION_Y) {
                    this.positionY += gameDimension.TILE_HEIGHT;
                }
                break;
            }
        }
    }

    resetPosition() {
        this.setInitialPosition()
    }
}
