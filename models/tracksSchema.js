const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const tracksSchema = new Schema({

	trackName: {
		type: String,
		required: true,
		unique: true
	},
	artistId: {
		type: String,
		required: true
	},
	albumId: {
		type: String,
		required: true
	},
	songTime: {
		type: String,
		required: true
	},
	listenCount: {
		type: Number,
		required: true
	},
	likeCount: {
		type: Number,
		required: true
	},
	downloadCount: {
		type: Number,
		required: true
	},
	shareCount: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('tracks', tracksSchema);