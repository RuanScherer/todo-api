const mongoose = require('../database')

const TaskSchema = new mongoose.Schema({
	project_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		unique: true,
		required: true
	},
	description: {
		type: String
	},
	priority: {
		type: Number,
		required: true
	},
	complete: {
		type: Boolean,
		required: true
	}
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task