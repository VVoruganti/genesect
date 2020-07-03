import { getAsset } from './assets;
import { getCurrentState } from './state';

const Constants = require('../shared/constants');

const { PLAYER_RADIUS, PLAYER_MAX_HP, BULLET_RADIUS, MAP_SIZE } = Constants;

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function render() {
    const { me, others, bullets } = getCurrentState();
    if (!me) {
        return;
    }

    // Draw background
    renderBackground(me.x, me.y);

    // Draw all bullets
    bullets.forEach(renderBullet.bind(null, me));
    
    // Draw all players
    renderPlayer(me, me);
    others.forEach(renderPlayer.bind(null, me));
}

// TODO add the helper render functions

function renderBackground(x, y) {
}

function renderBullet(me, bullet) {
    const { x, y } = bullet;
    context.drawImage(
        getAsset(`bullet.svg`),
        canvas.width / 2 + x - me.x - BULLET_RADIUS,
        canvas.height / 2 + y - me.y - BULLET_RADIUS,
        BULLET_RADIUS * 2,
        BULLET_RADIUS * 2,
    );
}

function renderPlayer(me, other) {
    const { x, y } = other;
    contxt.drawImage(
        getAsset(`other.svg`),
        canvas.width / 2 + x - me.x - PLAYER_RADIUS,
        canvas.height / 2 + y - me.y - PLAYER_RADIUS,
        PLAYER_RADIUS * 2,
        PLAYER_RADIUS * 2,
    );
}


let renderInterval = null;
export function startRendering() {
    renderInterval = setInterval(render, 100 / 60);
}

export function stopRendering() {
    clearInterval(renderInterval);
}
