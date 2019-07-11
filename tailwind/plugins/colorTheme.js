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
        [`.ct`]: props
      };
    } else {
      return {
        [`.ct-${name}`]: props
      };
    }
  });

  const colorClass = {
    [`.ct-reverse`]: {
      color: 'var(--background-color)',
      backgroundColor: 'var(--color)'
    }
  };
  addUtilities(colorClass);

  addUtilities(utilities);
};
