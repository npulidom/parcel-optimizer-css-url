/**
 * Index
 */

const { Optimizer } = require('@parcel/plugin')

module.exports = new Optimizer({

	async optimize({ contents }) {

		contents = contents.replace(/_url\(/g, 'url(')

		return { contents }
	}
})
