const ASSET_NAMES = ['tank.svg', 'bullet.svg', 'tank2.svg'];

const assets = {};
// TODO test using forEach instead of map function

function downloadAsset(assetName) {
  return new Promise((resolve) => {
    const asset = new Image();
    asset.onload = () => {
      assets[assetName] = asset;
      resolve();
    };
    asset.src = `/assets/${assetName}`;
  });
}

const downloadPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

export const downloadAssets = () => downloadPromise;
export const getAsset = (assetName) => assets[assetName];
