const _ = require("lodash");

module.exports = function({ addUtilities }) {

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
