const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const albumSchema = new Schema({
	albumName: {
		type: String,
		required: true
	},
	albumImg: {
		type: String,
		required: false
	},
	artistId: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('albums', albumSchema);