import { updateDirection } from './networking';

function onMouseInput(e) {
    handleInput(e.clientX, e.clientY);
}

// TODO add logic for movement of tanks
function handleInput(x, y) {
    const dir = Math.atan2(x - window.innerWidth / 2, window.innerHeight / 2 - y);
    console.log(`x:${x} y:${y} dir:${dir}`);
    updateDirection(dir);
}

export function startCapturingInput() {
    window.addEventListener('mousemove', onMouseInput);
    window.addEventListener('click', onMouseInput);
}

export function stopCapturingInput() {
    window.removeEventListener('mousemove', onMouseInput);
    window.removeEventListener('click', onMouseInput);
}
