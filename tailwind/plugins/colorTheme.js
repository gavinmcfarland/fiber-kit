const _ = require('lodash');

module.exports = function({ addUtilities, theme }) {
  const colorThemes = theme('colorTheme');
  const utilities = _.map(colorThemes, (decl, name) => {
    var props = {};
    _.map(decl, (value, prop) => {
      props['--' + prop] = value;
    });

    props.color = 'var(--color)';
    props.backgroundColor = 'var(--background-color)';

    if (name == 'default') {
      return {
        [`.color`]: props
      };
    } else {
      return {
        [`.color-${name}`]: props
      };
    }
  });

  const colorClass = {
    [`.color-reverse`]: {
      color: 'var(--background-color)',
      backgroundColor: 'var(--color)'
    }
  };
  addUtilities(colorClass);

  addUtilities(utilities);
};
