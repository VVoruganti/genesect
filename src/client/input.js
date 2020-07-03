import { updateDirection } from './networking';

function onKeyInput(e) {
    handleInput();
}

// TODO add logic for movement of tanks

export function startCapturingInput() {
    window.addEventListener(`keydown`, onKeyInput);
}

export function stopCapturingInput() {
    window.removeEventListener('keydown', onKeyInput);
}
