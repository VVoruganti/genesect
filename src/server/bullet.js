const shortid = require('shortid');
const ObjectClass = require('./object'); // TODO rename to entity
const Constants = require('../shared/constants');

class Bullet extends ObjectClass {
  constructor(parentID, x, y, dir) {
    super(shortid(), x, y, dir, Constants.BULLET_SPEED);
    this.parentID = parentID; // tracks player who made the bullet
  }

  // Returns true if the bullet should be destroyed
  update(dt) {
    super.update(dt, 1);
    return this.x < 0 || this.x > Constants.MAP_SIZE || this.y < 0 || this.y > Constants.MAP_SIZE;
  }
  // TODO implement max life time of bullet
}

module.exports = Bullet;
