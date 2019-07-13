const _ = require('lodash');

module.exports = function({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('fontSize'), (value, modifier) => {
      return [
        `.${e(`f-${modifier}`)}`,
        {
          'font-size': value,
        },
      ]
    })
  )

  addUtilities(utilities, variants('fontSize'))
}
