const ObjectClass = require('./object');
const Bullet = require('./bullet');
const Constants = require('../shared/constants');

class Player extends ObjectClass {
    constructor(id, username, x, y) {
        super(id, x, y, Math.random() * 2 * Math.PI, Constants.PLAYER_SPEED);
        this.username = username;
        this.hp = Constants.PLAYER_MAX_HP;
        this.fireCooldown = 0;
        this.score = 0;
        this.moving = false;
        this.moveDir = 1;
        this.shooting = false;
        this.moveDirDx = 0
    }

    // Returns a newly created bullet, or null.
    update(dt) {
        if(this.moving) {
            super.update(dt, this.moveDir);
        }

        this.direction += dt * this.moveDirDx;
        
        // Update score
        this.score += dt * Constants.SCORE_PER_SECOND;

        // Make sure the player stays in bounds
        this.x = Math.max(0, Math.min(Constants.MAP_SIZE, this.x));
        this.y = Math.max(0, Math.min(Constants.MAP_SIZE, this.y));

        // Fire a bullet, if needed
        this.fireCooldown = Math.max(this.fireCooldown - dt, 0);
        if (this.shooting && this.fireCooldown <= 0) {
            this.fireCooldown += Constants.PLAYER_FIRE_COOLDOWN;
            return new Bullet(this.id, this.x, this.y, this.direction);
        }
        return null;
    }

    updateMove(move) {
        this.moveDirDx = move.dirDx;
        this.moving = move.moving;
        this.moveDir = move.dir;
        this.shooting = move.shooting;
    }

    takeBulletDamage() {
        this.hp -= Constants.BULLET_DAMAGE;
    }

    onDealtDamage() {
        this.score += Constants.SCORE_BULLET_HIT;
    }

    serializeForUpdate() {
        return {
            ...(super.serializeForUpdate()),
            direction: this.direction,
            hp: this.hp
        };
    }
}

module.exports = Player;
