const _ = require("lodash");

module.exports = function({ addUtilities, e, theme, variants }) {
	const utilities = _.fromPairs(
		_.map(theme("asset.font"), (value, modifier) => {
			return [
				`.${e(`font-${modifier}`)}`,
				{
					"font-family": _.isArray(value) ? value.join(", ") : value
				}
			];
		})
	);

	addUtilities(utilities, variants("fontFamily"));
};
