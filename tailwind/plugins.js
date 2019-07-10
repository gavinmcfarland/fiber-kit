module.exports = {
  corePlugins: {
    maxWidth: false,
    fontFamily: false,
    backgroundPosition: false
  },
  plugins: [
    require('./plugins/fontStyle'),
    require('./plugins/colorTheme'),
    require('./plugins/maxWidth')
  ]
};
