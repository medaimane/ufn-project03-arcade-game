const INITIAL_LEVEL = 1;
const PLAYER_INITIAL_POSITION_X = 202;
const PLAYER_INITIAL_POSITION_Y = 373.5;
const PLAYER_COLLISION_ZONE = 75;

const imagesAbsolutePath = 'images/';

const sprites = {
    charCatGirl: `${imagesAbsolutePath}char-boy.png`,
    enemyBug: `${imagesAbsolutePath}enemy-bug.png`,
};

const allowedKeys = {
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    ArrowDown: 'ArrowDown',
};

const allowedKeysCodes = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

const gameDimension = {
    WIDTH: 504,
    TILE_WIDTH: 101,
    TILE_HEIGHT: 83,
};
