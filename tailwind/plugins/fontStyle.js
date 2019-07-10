const _ = require('lodash');

module.exports = function({ addUtilities, theme }) {
  const fontStyles = theme('fontStyle', {});

  const utilities = _.map(fontStyles, (decl, name) => {
    var props = {};

    _.map(decl, (value, prop) => {
      if (Array.isArray(value)) {
        value = value.join(' ');
      }
      return (props[prop] = value);
    });
    return {
      [`.font-${name}`]: props
    };
  });

  addUtilities(utilities);
};
