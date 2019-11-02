const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const artistSchema = new Schema({
	artistName: {
		type: String,
		required: true
	},
	birthDate: {
		type: Number,
		required: true
	},
	categoryId: {
		type: String,
		required: true
	},
});

module.exports = mongoose.model('artist', artistSchema);