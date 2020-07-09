# miniature-vessels-of-war

A remake of the classic flash game tiny tanks in the form of a .io game.

A lot of the credit for making the game logic can go to [Victor Zhou](https://victorzhou.com/blog/build-an-io-game-part-1/)

## Stretch goals

- [ ] Custom Maps
- [ ] Powerups
- [ ] Capture the flag
- [ ] Different Control Scheme
- [ ] Campaign mode
- [ ] LAN mode opposed to client-server model
- [ ] CI/CD
    - [ ] Dependabot
- [ ] Check if you need all of the different dependencies
    - [ ] lodash?


## DevOps stuff

- [ ] Add unit tests
- [ ] Add proper linting rules
- [ ] Add CI/CD

## Steps to run

First clone the repo

```bash
git clone https://github.com/VVoruganti/miniature-vessels-of-war.git
```

For development you can follow the steps below.

```bash
npm install
npm run develop
```

For deployment the steps below will work

```bash
npm install
npm run build
npm run start
```
Or you an run it with docker

```
docker build -t miniature-vessels-of-war .
docker run -dp 8080:8080 miniature-vessels-of-war:latest
```
