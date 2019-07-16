const _ = require('lodash');

module.exports = function({ addUtilities }) {
  //   const width = theme('width', {});

  //   const base = _.map(width, (decl, name) => {
  //     var props = {};

  //     _.map(decl, (value, prop) => {
  //       if (Array.isArray(value)) {
  //         value = value.join(' ');
  //       }
  //       return (props[prop] = value);
  //     });
  //     return {
  //       [`.font-${name}`]: props
  //     };
  //   });

  const rule = {
    [`.w`]: {
      width: 'var(--w)'
    },
    [`.w > *`]: {
      '--w': 'unset'
    }
  };

  addUtilities(rule);
};
