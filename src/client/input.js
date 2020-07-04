import { updateDirection } from './networking';
import { getCurrentState } from './state';

// function onMouseInput(e) {
//     handleInput(e.clientX, e.clientY);
// }

function onKeyDown(e) {
    handleInput(e);
}

function onKeyPress(e) {

}

// TODO add logic for movement of tanks
// function handleInput(x, y) {
//     const dir = Math.atan2(x - window.innerWidth / 2, window.innerHeight / 2 - y);
//     console.log(`x:${x} y:${y} dir:${dir}`);
//     updateDirection(dir);
// }

function handleInput(e) {
    const dir = 0;
    if (e.key == 'Left') {
        dir += -0.2
        updateDirection(dir);
    }
    if (e.key == 'Right') {
        dir += 0.2
        updateDirection(dir);
    }
    // if (e.which === 115) {
    //     dir = 1;
    //     updateDirection(dir);
    // }
    // if (e.which === 119) {
    //     dir = -1;
    //     updateDirection(dir); 
    // }
}

export function startCapturingInput() {
    // window.addEventListener('mousemove', onMouseInput);
    // window.addEventListener('click', onMouseInput);
    window.addEventListener('keydown', onKeyDown);
    //window.addEventListener('keypress', onKeyPress);
}

export function stopCapturingInput() {
    // window.removeEventListener('mousemove', onMouseInput);
    // window.removeEventListener('click', onMouseInput);
    window.removeEventListener('keyup', onKeyDown);
    //window.removeEventListener('keyup', onKeyPress);
}
