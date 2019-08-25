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
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.positionX, this.positionY);
    }

    handleInput(key) {
        const PLAYER_MAX_RIGHT_MOVE = 404;
        const PLAYER_X_MOVE = 101;
        const PLAYER_Y_MOVE = 83;
        switch (key) {
            case allowedKeys.ArrowLeft: {
                console.log('left');
                if (this.positionX > 0) {
                    this.positionX -= PLAYER_X_MOVE;
                }
                break;
            }

            case allowedKeys.ArrowRight: {
                console.log('right');
                if (this.positionX < PLAYER_MAX_RIGHT_MOVE) {
                    this.positionX += PLAYER_X_MOVE;
                }
                break;
            }

            case allowedKeys.ArrowUp: {
                console.log('up');
                this.positionY -= PLAYER_Y_MOVE;
                if (this.positionY < 0) {
                    this.setInitialPosition();
                    Game.startNextGameLevel();
                }
                break;
            }

            case allowedKeys.ArrowDown: {
                console.log('down');
                if (this.positionY < PLAYER_INITIAL_POSITION_Y) {
                    this.positionY += PLAYER_Y_MOVE;
                }
                break;
            }
        }
    }

    resetPosition() {
        this.setInitialPosition()
    }
}
