const _ = require('lodash');

module.exports = function({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
    _.map(theme('margin'), (value, modifier) => {
      return [
        `.${e(`m-${modifier}`)}`,
        {
          margin: 'var(--max-width)'
        }
      ];
    })
  );

  addUtilities(utilities, variants('maxWidth'));
};
