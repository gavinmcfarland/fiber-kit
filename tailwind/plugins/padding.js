const _ = require("lodash");

module.exports = function({ addUtilities }) {

	const rule = {
		[`.p`]: {
			paddingTop: 'var(--pt, unset)',
			paddingRight: 'var(--pr, unset)',
			paddingBottom: 'var(--pb, unset)',
			paddingLeft: 'var(--pl, unset)'
		},
		[`.p > *`]: {
			'--pt': 'unset',
			'--pr': 'unset',
			'--pb': 'unset',
			'--pl': 'unset'
		}
	};
		
	addUtilities(rule);
};