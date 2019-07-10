const _ = require('lodash');

module.exports = function({ addUtilities, theme }) {
  const colorThemes = theme('colorTheme');
  const utilities = _.map(colorThemes, (decl, name) => {
    var props = {};
    _.map(decl, (value, prop) => {
      props['--' + prop] = value;
    });
    if (name == 'default') {
      return {
        [`.ct`]: props
      };
    } else {
      return {
        [`.ct-${name}`]: props
      };
    }
  });

  const colorClass = {
    [`[class*="ct"]`]: {
      color: 'var(--color)',
      backgroundColor: 'var(--background-color)'
    }
  };
  addUtilities(colorClass);

  addUtilities(utilities);
};
