const express = require('express')
const Project = require('./../models/Project')
const Task = require('./../models/task')

const router = express.Router()

router.get('/all', async (req, res) => {
	try {
		const tasks = await Task.find({})
		return res.send({ tasks })
	}
	catch (err) {
		return res.status(500).send({ err : "Request failed" })
	}
})

router.post('/register', (req, res) => {
	Project.findOne({ _id: req.body.project_id }, async (err, project) => {
		if (err) {
			return res.status(500).send({ error: "Associated project doesn't exists"})
		}
		else
		{
			try {
				req.body.complete = false
				const task = await Task.create(req.body)
				return res.send({ task })
			}
			catch (err) {
				return res.status(500).send({ err: "Task register failed" })
			}
		}
	})
})

module.exports = app => app.use('/task', router)