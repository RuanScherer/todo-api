const mongoose = require('../database')

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String
	}
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project