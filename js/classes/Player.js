class Player {
    constructor() {
        this.sprite = sprites.charCatGirl;
        this.x = 0;
        this.y = 0;
    }

    // This class requires an update(), render() and
    // a handleInput() method.
    update(dt) {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
}
