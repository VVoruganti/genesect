import { connect, play } from './networking';
import {} from './render';

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementbyId('username-input');


Promise.all([

]).then(() => {
    playMenu.classList.remove('hidden');
    usernameInput.focus();
    playButton.onclick = () => {
        play(usernameInput.value);
        playMenu.classList.add('hidden');
        initState();
        startCapturingInput();
        startRendering();
        // setLeaderboardHidden(true);
    };
});
