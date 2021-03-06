const express = require('express')
const Project = require('./../models/project')
const Task = require('./../models/task')

const router = express.Router()

router.get('/id/:id', async (req, res)=> {
	Task.findById(req.params.id, (err, task) => {
		if (err) {
			return res.status(500).send({ err : "Task not found" })
		}
		else {
			return res.send({ task })
		}
	})
})

router.get('/project/:id', async (req, res)=> {
	Task.find({ project_id: req.params.id}, (err, tasks) => {
		if (err) {
			return res.status(500).send({ err : "Tasks not found" })
		}
		else {
			return res.send({ tasks })
		}
	})
})

router.get('/project/:id/finished', async (req, res)=> {
	Task.find({ project_id: req.params.id, complete: true }, (err, tasks) => {
		if (err) {
			return res.status(500).send({ err : "Tasks not found" })
		}
		else {
			return res.send({ tasks })
		}
	}).sort('priority')
})

router.get('/project/:id/unfinished', async (req, res)=> {
	Task.find({ project_id: req.params.id, complete: false }, (err, tasks) => {
		if (err) {
			return res.status(500).send({ err : "Tasks not found" })
		}
		else {
			return res.send({ tasks })
		}
	}).sort('priority')
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

router.put('/update/:id', (req, res) => {
	Task.findById(req.params.id, (err, task) => {
		if (err) {
			return res.status(500).send({ error: "Task doesn't exists" })
		}
		else {
			Task.updateOne({ _id: task._id }, req.body, (err) => { 
				if (err) {
					return res.status(500).send({ err: "Update failed" })
				}
				else {
					return res.send({ msg: "Success" })
				}
			})
		}
	})
})

router.delete('/destroy/:id', (req, res) => {
	Task.deleteOne({ _id: req.params.id }, (err) => {
		if (err) {
			return res.status(500).send({ error: "Delete failed" })
		}
		else {
			return res.send({ msg: "Success" })
		}
	})
})

module.exports = app => app.use('/task', router)