import { updateInput } from './networking';

const tracker = {
    up: false,
    down: false,
    left: false,
    right: false,
    spacebar: false,
}

function onKeyDown(e) {
    switch(e.key) {
        case 'ArrowLeft':
            tracker.left = true;
            break;
        case 'ArrowRight':
            tracker.right = true;
            break;
        case 'ArrowDown':
            tracker.down = true;
            break;
        case 'ArrowUp':
            tracker.up = true;
            break;
        case ' ':
            tracker.spacebar = true;
            break;
    }
    handleInput();
}

function onKeyUp(e) {
    switch(e.key) {
        case 'ArrowLeft':
            tracker.left = false;
            break;
        case 'ArrowRight':
            tracker.right = false;
            break;
        case 'ArrowDown':
            tracker.down = false;
            break;
        case 'ArrowUp':
            tracker.up = false;
            break;
        case ' ':
            tracker.spacebar = false;
            break;
    }
    handleInput();
}

function handleInput() {
    const move = {
        dirDx: 0,
        dir: 0,
        moving: false,
        shooting: false,
    }

    // Check turning
    if (tracker.left) {
        move.dirDx = -Math.PI;
    } else if (tracker.right) {
        move.dirDx = Math.PI;
    }

    // Check forward or backward
    if(tracker.up || tracker.down) {
        move.moving = true;
        // Check Direction of movement
        if(tracker.up) {
            move.dir = 1;
        } else if(tracker.down) {
            move.dir = -1
        }
    }

    // Check if shooting
    if(tracker.spacebar) {
        move.shooting = true;
    }
    console.log(move);
    updateInput(move);
}

export function startCapturingInput() {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
}

export function stopCapturingInput() {
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
}
