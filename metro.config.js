const { getDefaultConfig } = require('metro-config');

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    assetExts: ['db', 'mp4', 'jpg', 'png', 'ttf', 'wav', 'gif', 'svg'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs', 'db'],
  },
};
