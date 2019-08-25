class Player {
    constructor() {
        this.sprite = sprites.charCatGirl;
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
        switch (key) {
            case allowedKeys.ArrowLeft: {
                console.log('left');
                break;
            }

            case allowedKeys.ArrowRight: {
                console.log('right');
                break;
            }

            case allowedKeys.ArrowUp: {
                console.log('up');
                break;
            }

            case allowedKeys.ArrowDown: {
                console.log('down');
                break;
            }
        }
    }

    resetPosition() {
        this.positionX = PLAYER_INITIAL_POSITION_X;
        this.positionY = PLAYER_INITIAL_POSITION_Y;
    }
}
