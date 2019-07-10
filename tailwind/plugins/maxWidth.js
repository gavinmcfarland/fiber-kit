const _ = require("lodash");

module.exports = function({ addUtilities, e, theme, variants }) {
	const utilities = _.fromPairs(
		_.map(theme("maxWidth"), (value, modifier) => {
			return [
				`.${e(`max-w-${modifier}`)}`,
				{
					"--max-width": value,
					"max-width": "var(--max-width)"
				}
			];
		})
	);

	addUtilities(utilities, variants("maxWidth"));
};
