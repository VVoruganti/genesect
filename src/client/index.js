import { connect, play } from './networking';
import { startRendering, stopRendering } from './render';
import { startCapturingInput, stopCapturingInput } from './input';
import { downloadAssets } from './assets';
import { initState } from './state';
import { setLeaderboardHidden } from './leaderboard';

import './css/bootstrap-reboot.css';
import './css/main.css';

const playMenu = document.getElementById('play-menu');
const playButton = document.getElementById('play-button');
const usernameInput = document.getElementById('username-input');

console.log("Client Page Loaded");

Promise.all([
    connect(), // connect web socket to the server
    downloadAssets() // download all necessary assets from server
]).then(() => {
    playMenu.classList.remove('hidden');
    usernameInput.focus();
    playButton.onclick = () => {
        play(usernameInput.value);
        playMenu.classList.add('hidden');
        initState();
        startCapturingInput();
        startRendering();
        setLeaderboardHidden(false);
        console.log("register the click");
    };
}).catch(console.error);
