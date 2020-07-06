const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const socketio = require('socket.io');
const webpackConfig = require('../../webpack.dev.js');

const Constants = require('../shared/constants');

const Game = require('./game');

// Setup an Express server
const app = express();
app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  // Setup Webpack for development
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));
} else {
  // Static serve the dist/ folder in production
  app.use(express.static('dist'));
}

// Listen on port
const port = process.env.PORT || 8080;
const server = app.listen(port);
// eslint-disable-next-line no-console
console.log(`Server listening on port ${port}`);

// Setup socket.io
const io = socketio(server);

// Listen for socket.io connections
io.on('connection', (socket) => {
  // eslint-disable-next-line no-console
  console.log('Player connected!', socket.id);

  socket.on(Constants.MSG_TYPES.JOIN_GAME, joinGame);
  socket.on(Constants.MSG_TYPES.INPUT, handleInput);
  socket.on('disconnect', onDisconnect);
});

// Game Setup
// TODO don't use singleton but rather different game objects for different rooms

const game = new Game();

function joinGame(username) {
  game.addPlayer(this, username);
}

function handleInput(move) {
  game.handleInput(this, move);
}

function onDisconnect() {
  game.removePlayer(this);
}
