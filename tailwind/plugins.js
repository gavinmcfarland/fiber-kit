module.exports = {
  corePlugins: {
    maxWidth: false,
    fontFamily: false,
    backgroundPosition: false,
    fontSize: false,
    width: false
  },
  plugins: [
    require('./plugins/fontSize'),
    require('./plugins/fontStyle'),
    require('./plugins/colorTheme'),
    require('./plugins/maxWidth'),
    require('./plugins/width'),
    require('./plugins/padding')
  ]
};
